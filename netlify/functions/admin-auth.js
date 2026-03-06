const ADMIN_USER = process.env.ADMIN_USER || 'EdBates';
const ADMIN_PASS = process.env.ADMIN_PASS || 'EBJoinery2025!';

exports.handler = async function (event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const data = JSON.parse(event.body);
        const { username, password } = data;

        if (username === ADMIN_USER && password === ADMIN_PASS) {
            // In a more robust system, you'd return a JWT or secure cookie here.
            // For this simple static setup, returning success is sufficient to unlock the UI.
            return {
                statusCode: 200,
                body: JSON.stringify({ success: true, message: 'Authenticated' })
            };
        }

        return {
            statusCode: 401,
            body: JSON.stringify({ success: false, message: 'Invalid credentials' })
        };
    } catch (err) {
        return {
            statusCode: 400,
            body: JSON.stringify({ success: false, message: 'Bad request' })
        };
    }
};
