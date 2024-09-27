import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className="">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-gradient-to-r from-bgblue from-45% to-bgpurple p-8 rounded-2xl mt-10"
      >
        <p className={styles.sectionHeadText}>Kontakt.</p>
        <h3 className={styles.sectionSubText}>
          Wypełnij formularz lub wyślij wiadomość bezpośrednio na:
          support@sal.gg
        </h3>

        <form
          method="POST"
          action="https://getform.io/f/f2006aea-d536-415d-b8ca-c4fd591a31e5"
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Imię i nazwisko</span>
            <input
              type="text"
              name="name"
              placeholder="Podaj swoje imię i nazwisko"
              className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">E-mail</span>
            <input
              type="email"
              name="email"
              placeholder="Podaj swój adres e-mail"
              className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Wiadomość</span>
            <textarea
              rows={7}
              name="message"
              placeholder="Miejsce na twoją wiadomość"
              className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="bg-bgpurple py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            Wyślij
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
