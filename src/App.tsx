import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import SideContainer from "./components/SideContainer";
const backgroundImageUrl = new URL("./assets/background.jpg", import.meta.url)
  .href;

const App = () => {
  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="container m-auto py-8">
        <Header />
      </div>
      <div className="container m-auto pb-10 grid grid-cols-12 md:gap-10 justify-between">
        <div className="col-span-12 pb-10 md:col-span-4 md:sticky top-0">
          <SideContainer />
        </div>
        <div className="col-span-12 md:col-span-8">
          <div className="space-y-10">
            <Home />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
