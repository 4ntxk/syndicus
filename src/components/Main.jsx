import { styles } from "../styles";
import Timer4 from "./Timer";
import { Link } from "react-router-dom";
import Regulaminpdf from "../assets/regulamin.pdf";

const Main = () => {
  return (
    <div className="relative z-1 flex flex-col">
      <img src="/logov1.png" alt="logo" className="mx-auto w-1/4 h-1/4" />
      <div className="top-[120px] display:block max-w-7xl mx-auto flex flex-row items-start">
        <div className="flex flex-col justify-center items-center mt-2"></div>

        <div>
          <h1
            className={`${styles.heroHeadText} text-white text-center xs:hidden md:block`}
          >
            <span className="text-primary mr-1">Syndicus</span> Amateur League
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 text-center md:block`}
          >
            Wygraj turniej w swoim mieście, a później reprezentuj je na derbach
            e-sportowych. Więcej informacji na naszym facebooku!
          </p>

          <br />
          {/* <img src="/logoasp.png" alt="logo" className="mx-auto w-1/4 h-1/4" /> */}
          <p className="font-black text-white lg:text-[60px] sm:text-[30px] xs:text-[30px] text-[20px] lg:leading-[98px] mt-2 mb-10 text-center">
            Widzimy się w{" "}
            <span className="mr-1">Zielonej Górze (16.11.2024)</span> za:
          </p>
          <div className="text-7xl flex justify-center">
            <Timer4 targetDate={"2024-11-16"} />
          </div>
          <p className="font-black text-white lg:text-[60px] sm:text-[30px] xs:text-[30px] text-[20px] lg:leading-[98px] mt-2 mb-10 text-center">
            Dzień później w Gorzowie Wielkopolskim (17.11.2024) za dokładnie:
          </p>
          <div className="text-7xl flex justify-center">
            <Timer4 targetDate={"2024-11-17"} />
          </div>
          <p className="font-black text-white lg:text-[50px] sm:text-[30px] xs:text-[30px] text-[20px] lg:leading-[98px] mt-2 mb-10 text-center">
            Najlepsi gracze z każdego miasta zmierzą się w derbach (07.12.2024)
            <br />
            Zielona Góra vs Gorzów Wielkopolski
          </p>
          <div className="text-7xl flex justify-center">
            <Timer4 targetDate={"2024-12-07"} />
          </div>
          <div className="flex justify-evenly mx-10 mt-10">
            <Link
              className="bg-bgblue hover:bg-purplelight py-3 px-6 rounded-xl outline-none w-fit text-white lg:text-[30px] sm:text-[20px] xs:text-[10px] text-[10px] font-bold shadow-md shadow-primary"
              to="https://forms.gle/f1oFj6QPAPTf1oaTA"
              download="Regulamin-SALECS"
              target="_blank"
            >
              Rejestracja
            </Link>
            <Link
              className="bg-red-500 hover:bg-purplelight py-3 px-6 rounded-xl outline-none w-fit text-white lg:text-[30px] sm:text-[20px] xs:text-[10px] text-[10px] font-bold shadow-md shadow-primary"
              to={Regulaminpdf}
              download="Regulamin-SALECS"
              target="_blank"
            >
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
