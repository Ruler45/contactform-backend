import app from "../app.js";
import Contact from "../models/contact.model.js";
export const contact = (req, res) => {
  app.get("/api/contact", (req, res) => {
    res.send("contact data will be here");
  });

  app.post("/api/contact", async (req, res) => {
    console.log(req.body);
    

    try {
        const { email, name, message } = req.body;

        // console.log(re);
        const messages = {
          email,
          name,
          message,
        };
        const newMessage = new Contact(messages);
        await newMessage.save();
        return res.status(200).json({message:"Your message has been saved"})
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({message:"Something went wrong"});
    }
  });
};
