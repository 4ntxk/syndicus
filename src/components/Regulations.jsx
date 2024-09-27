import { Link } from "react-router-dom";
// import Dummypdf from "../assets/test.pdf";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

const Regulations = () => {
  return (
    <div className="mt-10 md:mb-48">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-gradient-to-r from-bgblue from-45% to-bgpurple p-8 rounded-2xl"
      >
        <div>
          <h1 className="font-black text-white md:text-[60px] sm:text-[30px] xs:text-[40px] text-[40px] lg:leading-[98px] mt-2 text-center">
            Regulaminy
          </h1>
          <h2 className="text-red-300 text-[24px] uppercase text-center">
            regulaminy będą udostępniane wraz z ogłoszeniem daty zapisów
            turnieju
          </h2>
          <p
            className={`${styles.heroSubText} mt-2 text-red-400 text-center md:block`}
          >
            Poniżej znajduje się lista regulaminów
          </p>
          <div className="flex justify-center items-center mt-10 bg-primary hover:bg-bgbluelight py-2 px-6 text-white rounded-lg outline-none border-none font-medium">
            <Link
              // to={Dummypdf}
              // download="Example-PDF-document"
              // target="_blank"
              rel="noreferrer"
              className="text-white px-3 py-1 rounded text-xl text-center truncate"
            >
              Regulamin SAL E-ESPORT CHALLENGER SERIES - CZERWIEŃSK CUP
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Regulations, "regulations");
