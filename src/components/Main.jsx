import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import { useSelector } from "react-redux";

const Main = () => {
  const darkMode = useSelector((store) => store.app.darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="App dark:bg-black dark:text-white">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
