import { Header } from "../components/Header";
import HeroSection from "../components/HeroSection";

const Index = () => {
  return (
    <>
      <div className="fixed top-0 w-full z-10"> 
        <Header />
      </div>
      <div className="relative"> 
        <div id="Home" className="mt-20 md:mt-32">
          <HeroSection />
        </div>
      </div>
    </>
  );
};

export default Index;
