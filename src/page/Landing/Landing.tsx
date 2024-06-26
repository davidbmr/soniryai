import DiscoverSound from "@/features/DiscoverSound/DiscoverSound";
import Footer from "@/features/Footer/Footer";
import HomeLanding from "@/features/HomeLanding/HomeLanding";
import InfoLanding from "@/features/InfoLanding/InfoLanding";

function Landing() {
  return (  
    <div>
      <HomeLanding />
      <InfoLanding/>
      <DiscoverSound/>
      <Footer/>

    </div>
  );
}

export default Landing;