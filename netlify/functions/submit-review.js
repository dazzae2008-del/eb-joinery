const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
    auth: process.env.GH_PAT
});

const owner = 'dazzae2008-del';
const repo = 'eb-joinery';
const path = 'data/pending_reviews.json';

exports.handler = async function (event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { name, stars, text } = JSON.parse(event.body);

        if (!name || !stars || !text) {
            return {
                statusCode: 400,
                body: JSON.stringify({ success: false, message: 'Missing required fields' })
            };
        }

        // 1. Get the current file content and storage metadata
        let currentContent = [];
        let sha = '';

        try {
            const { data: fileData } = await octokit.repos.getContent({
                owner,
                repo,
                path,
            });
            sha = fileData.sha;
            currentContent = JSON.parse(Buffer.from(fileData.content, 'base64').toString());
        } catch (err) {
            console.warn('Could not find file, creating new list');
        }

        // 2. Add new review to the list
        const newReview = {
            id: Date.now(),
            name,
            stars: parseInt(stars),
            text,
            date: new Date().toISOString(),
            approved: false
        };

        currentContent.push(newReview);

        // 3. Commit back to GitHub
        await octokit.repos.createOrUpdateFileContents({
            owner,
            repo,
            path,
            message: `New review submitted by ${name}`,
            content: Buffer.from(JSON.stringify(currentContent, null, 2)).toString('base64'),
            sha: sha || undefined
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: 'Review submitted for approval' })
        };

    } catch (err) {
        console.error('Submission error:', err);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: 'Failed to submit review', error: err.message })
        };
    }
};
