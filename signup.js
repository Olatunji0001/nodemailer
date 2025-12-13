import transporter from "./nodemailer.js";
export const signup = async (req, res) => {
  try {
    const { gmail } = req.params;
    if (!gmail) {
      return res.status(400).json({
        message: "enter gmail",
      });
    }
    if (gmail) {
      try {
        const info = await transporter.sendMail({
          from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
          to: gmail,
          subject: "Hello ✔",
          text: "Hello world?", // plain‑text body
          html: "<b>Hello world?</b>", // HTML body
        });
        if (info.accepted) {
          return res.status(200).json({
            message: "message sent successfuly",
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  } catch (error) {
    return res.status(500).json({
      message: "server error",
    });
  }
};
