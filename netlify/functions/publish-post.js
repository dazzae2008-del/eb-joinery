const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
    auth: process.env.GH_PAT
});

const owner = 'dazzae2008-del';
const repo = 'eb-joinery';
const path = 'data/posts.json';

exports.handler = async function (event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const post = JSON.parse(event.body);

        if (!post.title || !post.content) {
            return { statusCode: 400, body: JSON.stringify({ success: false, message: 'Title and content required' }) };
        }

        // 1. Fetch current posts
        const { data: fileData } = await octokit.repos.getContent({ owner, repo, path });
        let posts = JSON.parse(Buffer.from(fileData.content, 'base64').toString());

        // 2. Prep new post
        const newPost = {
            id: Date.now(),
            featured: post.featured || false,
            title: post.title,
            author: post.author || 'Ed Bates',
            date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
            tag: post.tag || 'Project',
            excerpt: post.content.substring(0, 220) + (post.content.length > 220 ? '...' : ''),
            content: post.content, // We store full content for single post pages
            img: post.img || 'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657462/473543467_1775541593199303_6408288811264688599_n_yvgu8e.webp'
        };

        posts.unshift(newPost);

        // 3. Commit back
        await octokit.repos.createOrUpdateFileContents({
            owner, repo, path,
            message: `Admin: Published post "${post.title}"`,
            content: Buffer.from(JSON.stringify(posts, null, 2)).toString('base64'),
            sha: fileData.sha
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: 'Post published successfully' })
        };

    } catch (err) {
        console.error('Publish error:', err);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: 'Failed to publish post', error: err.message })
        };
    }
};
