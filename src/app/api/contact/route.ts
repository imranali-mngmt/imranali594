import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // 1. Validation Logic
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, or message' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('CRITICAL: RESEND_API_KEY is missing from environment variables');
      return NextResponse.json(
        { error: 'Server configuration error: Email service not initialized' },
        { status: 500 }
      );
    }

    // 2. Premium Email UI Design
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
            .header { background: linear-gradient(135deg, #2a9d8f 0%, #264653 100%); color: white; padding: 30px; text-align: center; }
            .content { padding: 30px; background-color: #ffffff; }
            .field-label { font-size: 12px; font-weight: bold; color: #888; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
            .field-value { font-size: 16px; color: #222; margin-bottom: 25px; padding-bottom: 10px; border-bottom: 1px solid #f0f0f0; }
            .message-box { background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #2a9d8f; font-style: italic; color: #444; }
            .footer { background-color: #f4f4f4; padding: 20px; text-align: center; font-size: 12px; color: #777; }
            .badge { display: inline-block; padding: 4px 12px; border-radius: 20px; background-color: #e9f5f3; color: #2a9d8f; font-weight: bold; font-size: 11px; margin-bottom: 15px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin:0; font-size: 24px;">New Portfolio Inquiry</h1>
              <p style="margin: 5px 0 0; opacity: 0.8;">You have received a new message from your website.</p>
            </div>
            <div class="content">
              <div class="badge">CONTACT FORM</div>
              
              <div class="field-label">Sender Name</div>
              <div class="field-value">${name}</div>
              
              <div class="field-label">Email Address</div>
              <div class="field-value">${email}</div>
              
              <div class="field-label">Message Details</div>
              <div class="message-box">
                "${message}"
              </div>
            </div>
            <div class="footer">
              <p>Sent via Imran Ali Portfolio Engine &bull; ${new Date().toLocaleString()}</p>
              <p>This is an automated notification. Reply directly to this email to contact the sender.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // 3. Sending the Request
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Portfolio Inquiry <onboarding@resend.dev>',
        to: [process.env.MY_EMAIL || 'imranali.13imran@gmail.com'],
        subject: `📬 New Inquiry from ${name}`,
        reply_to: email,
        html: emailHtml,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Resend API Error:', result);
      return NextResponse.json({ error: result.message || 'Failed to send email' }, { status: response.status });
    }

    return NextResponse.json({ success: true, id: result.id });

  } catch (error: any) {
    console.error('EXCEPTION: Unhandled error in Contact API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}
