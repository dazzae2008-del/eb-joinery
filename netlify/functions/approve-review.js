const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
    auth: process.env.GH_PAT
});

const owner = 'dazzae2008-del';
const repo = 'eb-joinery';

exports.handler = async function (event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { id, action } = JSON.parse(event.body);

        if (!id || !action) {
            return { statusCode: 400, body: JSON.stringify({ success: false, message: 'Missing id or action' }) };
        }

        // 1. Fetch current files
        const [pendingRes, reviewsRes] = await Promise.all([
            octokit.repos.getContent({ owner, repo, path: 'data/pending_reviews.json' }),
            octokit.repos.getContent({ owner, repo, path: 'data/reviews.json' })
        ]);

        let pending = JSON.parse(Buffer.from(pendingRes.data.content, 'base64').toString());
        let reviews = JSON.parse(Buffer.from(reviewsRes.data.content, 'base64').toString());

        const reviewIndex = pending.findIndex(r => r.id === id);
        if (reviewIndex === -1) {
            return { statusCode: 404, body: JSON.stringify({ success: false, message: 'Review not found' }) };
        }

        const targetReview = pending[reviewIndex];

        // 2. Process action
        if (action === 'approve') {
            reviews.unshift({
                id: targetReview.id,
                name: targetReview.name,
                location: 'Verified Client', // Default for web submissions
                stars: targetReview.stars,
                text: targetReview.text
            });
            pending.splice(reviewIndex, 1);
        } else if (action === 'reject') {
            pending.splice(reviewIndex, 1);
        }

        // 3. Commit changes
        const commits = [
            octokit.repos.createOrUpdateFileContents({
                owner, repo, path: 'data/pending_reviews.json',
                message: `Admin: ${action} review from ${targetReview.name}`,
                content: Buffer.from(JSON.stringify(pending, null, 2)).toString('base64'),
                sha: pendingRes.data.sha
            }),
            octokit.repos.createOrUpdateFileContents({
                owner, repo, path: 'data/reviews.json',
                message: `Admin: ${action} review from ${targetReview.name}`,
                content: Buffer.from(JSON.stringify(reviews, null, 2)).toString('base64'),
                sha: reviewsRes.data.sha
            })
        ];

        await Promise.all(commits);

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: `Review ${action}d successfully` })
        };

    } catch (err) {
        console.error('Approval logic error:', err);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: 'Failed to process review action', error: err.message })
        };
    }
};
