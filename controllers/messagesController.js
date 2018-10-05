const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const msgController = require("../controllers/messagesController");

const nodeMailer = require("nodemailer");
const clientSecret = require("./client_secret");

const Booking = mongoose.model("booking");

module.exports.saveTicket = (req, res, next) => {
  var ticket = new Booking();
  ticket.email = req.body.email;
  ticket.movieName = req.body.movieName;
  ticket.session = req.body.session;
  ticket.price = req.body.price;
  ticket.save((err, doc) => {
    if (!err) res.send(doc);
    else {
      console.log(err);
      return next(err);
    }
  });

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
    from: "Golden Time Cinema <crysbui.depon@gmail.com>",
    to: ticket.email,
    subject:
      "Your booking confirmation for " + ticket.session + ticket.movieName, //req.body.subject,
    text: "Test message"
    //html: req.body.content
  };

  // Send email
  transporter.sendMail(messageTemplate, function(err, info) {
    if (err) {
      transporter.close();
      return res.json({
        status: "error",
        msg: err
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
};

// router.post("/sendemail", (req, res) => {});

router.post("/book", msgController.saveTicket);

module.exports = router;
