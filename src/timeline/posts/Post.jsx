import { Avatar } from "@mui/material";
import MorehorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { BookmarkBorder, Telegram } from "@mui/icons-material";
const Post = ({ user, postImage, likes, timestamp }) => {
  return (
    <div className="posts_all w-[550px] mx-5 my-7">
      <div className="post__header flex justify-between items-center my-2">
        <div className="post__headerAuthor flex items-center">
          <Avatar>{user[0].toUpperCase()}</Avatar>
          {user} •<span className="text-gray-50/[.4]">{timestamp}</span>
        </div>
        <MorehorizIcon />
      </div>
      <div className="post__image">
        <img
          className="w-full border-[.6px] rounded-md"
          src={postImage}
          alt={user}
        />
      </div>
      <div className="post__footer  ">
        <div className="post__footerIcons flex items-center justify-between">
          <div className="post__iconsMain p-2 hover:cursor-pointer">
            <span className="">
              <FavoriteBorderIcon />
              <ChatBubbleOutlineIcon />
              <Telegram />
            </span>
          </div>
          <div className="post_iconsSave ">
            <BookmarkBorder />
          </div>
        </div>
        <span className="mx-3">{likes} likes</span>
      </div>
    </div>
  );
};

export default Post;
