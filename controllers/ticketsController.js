const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const ticketsController = require("../controllers/ticketsController");

const nodeMailer = require("nodemailer");
const clientSecret = require("./client_secret");

const Booking = mongoose.model("booking");
const { bookingModel } = require("../models/bookingModel");

// Save ticket details in database
module.exports.saveTicket = (req, res, next) => {
  var ticket = new Booking();
  ticket.email = req.body.email;
  ticket.movieName = req.body.movieName;
  ticket.session = req.body.session;
  ticket.price = req.body.price;
  ticket.userId = req.body.uId;
  ticket.save((err, doc) => {
    if (!err) res.send(doc);
    else {
      console.log(err);
      return next(err);
    }
  });

  // Configure connection with gmail account using OAuth2
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

  // Template of the email message
  let messageTemplate = {
    from: "Golden Time Cinema <crysbui.depon@gmail.com>", // Display of sender
    to: ticket.email, // receiver
    subject: "Your " + ticket.movieName + " booking confirmation", // Subject of email
    text: "Plain text message", // Plain text of content
    // Content of email in html
    html: ` 
      <h2>GOLDEN TIME CINEMA</h2>
      <h4>BOOKING DETAILS</h4>
      <p>
      Movie: ${ticket.movieName}
      <br/>
      Session: ${ticket.session.toLocaleString("en-US")}
      <br/>
      Price: A$${ticket.price.toFixed(2)}
      <br/>
      Location: Golden Time Cinema CBD, Sydney
      </p>
      <p>
      We can't wait to see you at our cinema. Now all you need to do is print or present this confirmation email for admission.
      <br/>
      Enjoy your movie!
      </p>
      `
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

router.post("/book", ticketsController.saveTicket);

router.get("/tickets", (req, res) => {
  Booking.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in Retriving Employees :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});
module.exports = router;
