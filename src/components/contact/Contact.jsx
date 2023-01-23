import "../../styles/contact.scss";
import { motion } from "framer-motion";
import burger from "../../assets/burger2.png";

const Contact = () => {
  return (
    <section className="contact">
      <motion.form>
        <h2>Contact Us</h2>
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <textarea placeholder="Message..." cols="30" rows="10"></textarea>
        <button type="submit">Send</button>
      </motion.form>
      <motion.div className="contactFormBorder">
        <motion.div>
          <img src={burger} alt="burger" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
