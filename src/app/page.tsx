import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideContainer from "@/components/SideContainer";
import TechnicalSkills from "@/components/TechnicalSkills";

export default function Home() {
  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: `url("/background.jpg")` }}
    >
      <div className="container m-auto py-8">
        <Header />
      </div>
      <div className="container m-auto pb-10 grid grid-cols-12 md:gap-10 justify-between">
        <div className="col-span-12 pb-10 md:col-span-4 md:sticky top-0">
          <SideContainer />
        </div>
        <div className="col-span-12 md:col-span-8">
          <div className="py-12 px-14 space-y-8 bg-slate-900 text-slate-100 rounded-lg">
            <AboutMe />
            <Experience />
            <TechnicalSkills />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
