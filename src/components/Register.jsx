import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nickname: "",
    phonenumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://localhost:3000/send-email", formData);
      toast.success("Wysłano!");
      // Optionally, you can reset the form after successful submission
      setFormData({
        name: "",
        email: "",
        nickname: "",
        phonenumber: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Coś poszło nie tak :<");
    }
  };

  return (
    <div className="mt-10">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-gradient-to-r from-bgblue from-45% to-bgpurple p-8 rounded-2xl"
      >
        <p className={styles.sectionHeadText}>Rejestracja.</p>
        <h2 className="text-red-300 text-[24px] uppercase">
          REJESTRACJA OTWARTA
        </h2>
        <h3 className={styles.sectionSubText}>
          Wypełnij formularz aby zarejestrować się na turniej
        </h3>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Imię i nazwisko</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Podaj swoje imię i nazwisko"
              className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">E-mail</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Podaj swój adres e-mail"
              required
              className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Nickname</span>
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              placeholder="Podaj swój nickname w grze"
              required
              className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            Numer telefonu
            <small>Format: +48 xxx xxx xxx</small>
            <input
              type="num"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              placeholder="Podaj swój numer telefonu"
              required
              className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-bgpurple py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            Wyślij
          </button>
        </form>
        <ToastContainer position="top-center" />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Register, "register");
