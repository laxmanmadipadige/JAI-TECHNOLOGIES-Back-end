const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

/**
 * ✅ Send Email API Controller
 */
const sendEmail = async (req, res) => {
  const { firstName, lastName, company, email, phone, service, message } = req.body;

  if (!firstName || !email || !service) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    // Email to Admin
    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: "laxmanmadipadige10@gmail.com", // Change to your email
      subject: "New Consultation Request",
      text: `Name: ${firstName} ${lastName}
Company: ${company}
Email: ${email}
Phone: ${phone}
Service: ${service}
Message: ${message}`,
    };

    // Email to User (Acknowledgment)
    const userMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thank You for Contacting Us!",
      text: `Hello ${firstName},

Thank you for reaching out! We received your request regarding "${service}" and will get back to you soon.

Best Regards,  
Your Company Name`,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("❌ Email Sending Error:", error);
    res.status(500).json({ error: "Failed to send emails. Please try again." });
  }
};

module.exports = { sendEmail }; // ✅ Make sure this is correctly exported
