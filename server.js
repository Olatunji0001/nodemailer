import express from "express";
import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

const app = express();
app.use(express.json())

app.listen(1200, () => {
  console.log("app is listinig to request on http://localhost:1200");
});

app.post("/email", (req, res) => {
  const { gmail } = req.body;
  if (gmail) {
    var transporter = nodemailer.createTransport(
      smtpTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth: {
          user: "musbautunji@gmail.com",
          pass: "lrrh vccc dcvf tsqq",
        },
      })
    );

    var mailOptions = {
      from: "musbautunji@gmail.com",
      to: gmail,
      subject: "Sending Email using Node.js[nodemailer]",
      text: "That was easy!",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
  return res.status(200).json({
    message: "sent",
  });
});
