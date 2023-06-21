import "./App.scss";
import { IoMailOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import Contact from "./comps/Contact";
import { Link } from "react-scroll";
import bgVideo from "./assets/fifa-bg.mp4";
import logoImage from "./assets/sal-logo1-transbg.png";
//to be refactored

let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: easeing,
    },
  },
};

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const btnGroup = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

const App = () => {
  return (
    <motion.div className="landing" initial="initial" animate="animate">
      <video src={bgVideo} autoPlay loop muted></video>
      <motion.header variants={stagger}>
        <motion.div className="logo-wrapper" variants={header}>
          <span>SAL</span>
        </motion.div>
        <motion.div className="menu-container" variants={stagger}>
          <motion.span variants={header}>
            <IconContext.Provider
              value={{
                color: "#fff",
                size: "18px",
                className: "icons-container",
              }}
            >
              <a href="https://www.facebook.com">
                <div className="icon">
                  {" "}
                  <AiFillFacebook />{" "}
                </div>
              </a>
              <a href="https://twitter.com">
                <div className="icon">
                  {" "}
                  <AiFillTwitterCircle />{" "}
                </div>
              </a>
            </IconContext.Provider>
          </motion.span>

          <motion.span variants={header}>
            <IconContext.Provider
              value={{
                color: "#fff",
                size: "18px",
              }}
            >
              <div className="icon">
                {" "}
                <IoMailOutline />{" "}
              </div>
              <span>support@sal.gg</span>{" "}
            </IconContext.Provider>
          </motion.span>
        </motion.div>
      </motion.header>

      <motion.div className="content-wrapper">
        <div className="left-content-wrapper">
          <motion.h2>
            <motion.span
              variants={firstName}
              initial="initial"
              animate="animate"
              className="first"
            >
              <motion.span variants={letter}>S</motion.span>
              <motion.span variants={letter}>y</motion.span>
              <motion.span variants={letter}>n</motion.span>
              <motion.span variants={letter}>d</motion.span>
              <motion.span variants={letter}>i</motion.span>
              <motion.span variants={letter}>c</motion.span>
              <motion.span variants={letter}>u</motion.span>
              <motion.span variants={letter}>s</motion.span>
            </motion.span>
            <motion.span
              variants={lastName}
              initial="initial"
              animate="animate"
              className="last"
            >
              <motion.span variants={letter}>A</motion.span>
              <motion.span variants={letter}>m</motion.span>
              <motion.span variants={letter}>a</motion.span>
              <motion.span variants={letter}>t</motion.span>
              <motion.span variants={letter}>e</motion.span>
              <motion.span variants={letter}>u</motion.span>
              <motion.span variants={letter}>r</motion.span>
              <motion.span variants={letter}>&nbsp;</motion.span>
              <motion.span variants={letter}>L</motion.span>
              <motion.span variants={letter}>e</motion.span>
              <motion.span variants={letter}>a</motion.span>
              <motion.span variants={letter}>g</motion.span>
              <motion.span variants={letter}>u</motion.span>
              <motion.span variants={letter}>e</motion.span>
            </motion.span>
          </motion.h2>
          <motion.p variants={fadeInUp}>
            Głodny esportowych wrażeń?
            <br /> Rywalizuj w jednodniowych turniejach lub sprawdź swoje
            umiejętności w lidze sezonowej. <br />
            Pokaż na co cię stać i wejdź na szczyt!
          </motion.p>
          <motion.div className="btn-group" variants={stagger}>
            <motion.a
              className="btn btn-primary"
              variants={btnGroup}
              href="https://docs.google.com/forms/d/e/1FAIpQLSefJ9b7aVDu5RJRvWIFnCQ9oe-uRZwIjgUCg9F7H8SXnIsVvw/viewform?usp=sf_link"
            >
              <motion.div>Zarejestruj</motion.div>
            </motion.a>
            <Link
              className="btn btn-secondary"
              variants={btnGroup}
              to="contact"
              smooth={true}
              duration={500}
            >
              <motion.a>
                <motion.div>Kontakt</motion.div>
              </motion.a>
            </Link>
          </motion.div>
        </div>

        <motion.div className="right-content-wrapper" variants={stagger}>
          <motion.div variants={fadeInUp}>
            <motion.img src={logoImage} alt="" />
          </motion.div>
        </motion.div>
      </motion.div>

      <Contact />
    </motion.div>
  );
};

export default App;
