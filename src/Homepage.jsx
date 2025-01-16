import Sidenav from "./navigation/Sidenav";
import TimeLine from "./timeline/TimeLine";
import Suggestions from "./suggestions/Suggestions";
const Homepage = () => {
  return (
    <div className="flex ">
      <div className="homepage__nav basis-[19.0857143%] border-[.6px]">
        <Sidenav />
      </div>
      <div className="homepage_timeline basis-[51.0857143%]">
        <TimeLine />
      </div>
      <div className="homepage_suggestions ">
        <Suggestions />
      </div>
    </div>
  );
};

export default Homepage;
