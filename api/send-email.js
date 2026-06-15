const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, service, requirements, details } = req.body;

  // Validation
  if (!details || !details.email || !details.name) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Configure Transporter (Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD, // Use an App Password, not your regular password
    },
  });

  const mailOptions = {
    from: `"PixelNest Configurator" <${process.env.GMAIL_USER}>`,
    to: 'cto@pixelneststudios.tech, ceo@pixelneststudios.tech',
    subject: `New Project Inquiry: ${service || 'Direct Inquiry'} from ${details.name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px;">
        <h2 style="color: #F5A400;">New Project Transmission</h2>
        <p><strong>Submission Type:</strong> ${type}</p>
        <hr />
        <h3>Client Details</h3>
        <p><strong>Name:</strong> ${details.name}</p>
        <p><strong>Email:</strong> ${details.email}</p>
        <p><strong>Company:</strong> ${details.company || 'N/A'}</p>
        <p><strong>Timeline:</strong> ${details.timeline || 'N/A'}</p>
        
        <h3>Project Scope</h3>
        <p><strong>Primary Service:</strong> ${service}</p>
        <p><strong>Specific Requirements:</strong> ${requirements && requirements.length > 0 ? requirements.join(', ') : 'None specified'}</p>
        
        <h3>Message / Brief</h3>
        <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${details.message || 'No message provided.'}</p>
        
        <p style="font-size: 12px; color: #888; margin-top: 30px;">
          This inquiry was generated from the PixelNest Configurator.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email transmission.' });
  }
}
