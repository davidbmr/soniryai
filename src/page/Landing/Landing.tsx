import DiscoverSound from "@/features/DiscoverSound/DiscoverSound";
import HomeLanding from "@/features/HomeLanding/HomeLanding";
import InfoLanding from "@/features/InfoLanding/InfoLanding";

function Landing() {
  return (  
    <div>
      <HomeLanding />
      <InfoLanding/>
      <DiscoverSound/>
    </div>
  );
}

export default Landing;