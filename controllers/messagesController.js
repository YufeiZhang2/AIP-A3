const express = require("express");
const router = express.Router();

const nodeMailer = require("nodemailer");
const clientSecret = require("./client_secret");

router.post("/sendemail", (req, res) => {
  let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "crysbui.depon@gmail.com",
      clientId: clientSecret.web.client_id,
      clientSecret: clientSecret.web.client_secret,
      refreshToken: "1/2OG6BRvWpTlRqDPSRdFG9rmRJAcFp0Byu8r5s7KVBKk",
      accessToken:
        "ya29.GlssBlic1f5lJNwXGdki2HoYIO0WRcc123BE7uuDQ06icXE4NQH6kzWy36x_gokgXrgbh3n_ERioqm8BaJ7_AApmEphslY7yCY6bE5lnvCw1paAB9ILm-w2uLkI9",
      expires: 1484314697598
    }
  });

  let messageTemplate = {
    to: req.body.email,
    subject: "Test subject", //req.body.subject,
    text: "Test message"
    //html: req.body.content
  };

  // Send email
  transporter.sendMail(messageTemplate, function(err, info) {
    if (err) {
      transporter.close();

      return res.json({
        status: "error",
        msg: "Email sending failure"
      });
    } else {
      transporter.close();

      console.log("Message %s sent: %s", info.messageId, info.response);
      return res.json({
        status: "ok",
        msg: "Email sent sucessfully"
      });
    }
  });
});

module.exports = router;
