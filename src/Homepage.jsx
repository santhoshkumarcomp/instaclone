import Sidenav from "./navigation/Sidenav";
import TimeLine from "./timeline/TimeLine";
const Homepage = () => {
  return (
    <div className="flex">
      <div className="homepage__nav">
        <Sidenav />
      </div>
      <div className="homepage_timeline">
        <TimeLine />
      </div>
    </div>
  );
};

export default Homepage;
