// import instagram from "./assets/InstagramWordmark.png";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
const Sidenav = () => {
  return (
    <div className="fixed">
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Insta"
        className=" w-[120px] m-6 -left"
      />

      <div className="sidenav__buttons fixed flex-col space-y-1 z-10">
        <div className="side_button  ">
          <button className="sidenav__button flex items-center space-x-2 pr-16          border-0     mx-1 my-1 px-1 py-1 hover:bg-gray-400">
            <HomeIcon />
            <span className="text-lg ml-3">Home</span>
          </button>
        </div>

        <div className="side_button  ">
          <button className="sidenav__button flex items-center space-x-2 pr-16          border-0     mx-1 my-1 px-1 py-1 hover:bg-gray-400">
            <SearchIcon />
            <span className="text-lg ml-3">Search</span>
          </button>
        </div>

        <div className="side_button  ">
          <button className="sidenav__button flex items-center space-x-2 pr-16          border-0     mx-1 my-1 px-1 py-1 hover:bg-gray-400">
            <ExploreIcon />
            <span className="text-lg ml-3">Explore</span>
          </button>
        </div>

        <div className="side_button  ">
          <button className="sidenav__button flex items-center space-x-2 pr-16          border-0     mx-1 my-1 px-1 py-1 hover:bg-gray-400">
            <SlideshowIcon />
            <span className="text-lg ml-3">Reels</span>
          </button>
        </div>

        <div className="side_button  ">
          <button className="sidenav__button flex items-center space-x-2 pr-16          border-0     mx-1 my-1 px-1 py-1 hover:bg-gray-400">
            <ChatIcon />
            <span className="text-lg ml-3">Messages</span>
          </button>
        </div>

        <div className="side_button  ">
          <button className="sidenav__button flex items-center space-x-2 pr-16          border-0     mx-1 my-1 px-1 py-1 hover:bg-gray-400">
            <FavoriteBorderIcon />
            <span className="text-lg ml-3">Notifications</span>
          </button>
        </div>

        <div className="side_button  ">
          <button className="sidenav__button flex items-center space-x-2 pr-16          border-0     mx-1 my-1 px-1 py-1 hover:bg-gray-400">
            <AddCircleOutlineIcon />
            <span className="text-lg ml-3">Create</span>
          </button>
        </div>
      </div>
      <div className="side_button   ">
        <button className="sidenav__button flex fixed items-center space-x-2 pr-16          border-0    inset-x-0 bottom-1 mx-1 my-1 px-1 py-1 hover:bg-gray-400">
          <MenuIcon />
          <span className="text-lg ml-3">More</span>
        </button>
      </div>
    </div>
  );
};

export default Sidenav;
