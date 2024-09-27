import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const RegisterTemp = () => {
  return (
    <div className="mt-10 md:mb-48">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-gradient-to-r from-bgblue from-45% to-bgpurple p-8 rounded-2xl"
      >
        <div>
          <h1 className="font-black text-white md:text-[60px] sm:text-[30px] xs:text-[40px] text-[40px] lg:leading-[98px] mt-2 text-center">
            Rejestracja
          </h1>
          <h2 className="text-red-300 text-[40px] uppercase text-center">
            REJESTRACJA OTWARTA
          </h2>
          <p
            className={`${styles.heroSubText} mt-2 text-red-400 text-center md:block`}
          >
            Klniknij w poniższy link i wypełnij formularz, aby wziąć udział w
            turnieju
          </p>
          <div className="flex justify-center items-center mt-10 bg-primary hover:bg-bgbluelight py-2 px-6 text-white rounded-lg outline-none border-none font-medium">
            <Link
              to="https://forms.gle/ZSzgeH5cjTrF17CH8"
              target="_blank"
              rel="noreferrer"
              className="text-white px-3 py-1 rounded text-xl text-center truncate"
            >
              → → → Rejestracja SAL E-ESPORT CHALLENGER SERIES - CZERWIEŃSK CUP
              ← ← ←
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(RegisterTemp, "register");
