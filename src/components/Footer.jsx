import { SectionWrapper } from "../hoc";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { styles } from "../styles";

const Footer = () => {
  return (
    <div>
      <div className="h-[1px] w-full bg-bgblue"></div>
      <h1 className={`${styles.heroSubText} mt-2 text-white-100 text-center`}>
        PARTNERZY
      </h1>
      <div className="flex justify-center items-center pt-8">
        <div className="flex md:space-x-4 xs:space-y-4 xs:flex-col md:flex-row items-center">
          <div className="w-[300px] h-[150px] mx-auto mt-4">
            <img src="/aikon.jpg" alt="bg" className="w-full h-full" />
          </div>
          <div className="w-[300px] h-[150px] mx-auto ">
            <img
              src="/zajc.png"
              alt="bg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[300] h-[150px] mx-auto">
            <img src="/satrent.png" alt="bg" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-8 xs:space-y-4 items-center xs:flex-col md:flex-row pt-8">
        <div className="flex md:space-x-4 xs:flex-col md:flex-row">
          <div className="w-[300px] h-[150px] mx-auto mt-4">
            <img src="/lubuszankakolor.JPG" alt="bg" />
          </div>
        </div>
        <div className="flex">
          <div className="w-[300px] h-[150px] mx-auto">
            <img src="/lubuszanka2.png" alt="bg" />
          </div>
        </div>
      </div>

      <div className="hover:text-bgblue text-3xl flex items-center justify-center mt-32">
        <a
          href="https://www.facebook.com/profile.php?id=61556006848080"
          target="_blank"
          className="flex items-center"
          rel="noreferrer"
        >
          <AiFillFacebook />
          <p className="">@syndicusgg</p>
        </a>
        {/* <a
          href="https://www.facebook.com/profile.php?id=61556006848080"
          target="_blank"
          className="flex items-center"
          rel="noreferrer"
        >
          <AiFillInstagram />
          <p className="ml-2">@salgg</p>
        </a> */}
      </div>
      <div className="mx-auto inset-x-0 bottom-0 pt-10">
        <p className="text-center text-xs text-white">
          &copy; 2024 Syndicus Amateur League, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SectionWrapper(Footer, "footer");
