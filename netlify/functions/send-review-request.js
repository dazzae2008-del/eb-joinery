const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async function (event, context) {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const data = JSON.parse(event.body);
        const { email, clientName } = data;

        if (!email || !clientName) {
            return {
                statusCode: 400,
                body: JSON.stringify({ success: false, message: 'Email and Client Name are required' })
            };
        }

        const reviewUrl = `https://ebjoinery.co.uk/leave-a-review.html?client=${encodeURIComponent(clientName)}`;

        const { data: resendData, error } = await resend.emails.send({
            from: 'EB Joinery <noreply@ebjoinery.co.uk>',
            to: [email],
            subject: `How did we do, ${clientName}?`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #2d3436;">Hi ${clientName},</h2>
          <p>Thank you for choosing <strong>EB Joinery</strong> for your recent project. We'd love to hear your feedback on the work we did for you.</p>
          <p>It only takes a minute, and your review helps us continue providing quality craftsmanship to the local community.</p>
          <div style="margin: 2rem 0;">
            <a href="${reviewUrl}" style="background-color: #c9a55c; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Leave a Review</a>
          </div>
          <p>If you have any questions or further projects in mind, please don't hesitate to get in touch.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 2rem 0;">
          <p style="font-size: 0.8rem; color: #999;">EB Joinery · Widnes, Cheshire · 07803676949</p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return {
                statusCode: 500,
                body: JSON.stringify({ success: false, message: 'Failed to send email', error: error.message })
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: 'Review request sent successfully' })
        };
    } catch (err) {
        console.error('Function Error:', err);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: 'Internal Server Error' })
        };
    }
};
