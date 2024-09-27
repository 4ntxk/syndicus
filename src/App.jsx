import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Register,
  Contact,
  Navbar,
  StarsCanvas,
  Footer,
  Regulations,
  Lubuskie,
} from "./components";
import Main from "./components/Main";
import RegisterTemp from "./components/RegisterTemp";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-gradient-to-r from-bgpurple from-45% to-bgblue">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/register" element={<RegisterTemp />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/regulations" element={<Regulations />} /> */}
          <Route path="/lubuskie" element={<Lubuskie />} />
        </Routes>
        <Footer />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
