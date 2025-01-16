import { Avatar } from "@mui/material";

const Suggestions = () => {
  return (
    <div className="suggestions mt-7  mr-5 w-full">
      <div className="suggestions__title text-gray-50/[.4] font-bold">
        Sugesstions for you
      </div>

      <div className="suggestions__usernames">
        <div className="suggestion__username flex flex-row justify-between mt-4">
          <div className="username__left flex items-center justify-between">
            <span className="avatar mr-2">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info flex flex-col">
              <span className="username">maheswari__ravi</span>
              <span className="relation text-gray-50/[.4] text-sm">
                New to Instagram
              </span>
            </div>
          </div>
          <button className="follow__button text-blue-500 hover:text-white">
            Follow
          </button>
        </div>
      </div>

      <div className="suggestions__usernames">
        <div className="suggestion__username flex flex-row justify-between mt-4">
          <div className="username__left flex items-center justify-between">
            <span className="avatar mr-2">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info flex flex-col">
              <span className="username">maheswari__ravi</span>
              <span className="relation text-gray-50/[.4] text-sm">
                New to Instagram
              </span>
            </div>
          </div>
          <button className="follow__button text-blue-500 hover:text-white">
            Follow
          </button>
        </div>
      </div>

      <div className="suggestions__usernames">
        <div className="suggestion__username flex flex-row justify-between mt-4">
          <div className="username__left flex items-center justify-between">
            <span className="avatar mr-2">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info flex flex-col">
              <span className="username">maheswari__ravi</span>
              <span className="relation text-gray-50/[.4] text-sm">
                New to Instagram
              </span>
            </div>
          </div>
          <button className="follow__button text-blue-500 hover:text-white">
            Follow
          </button>
        </div>
      </div>

      <div className="suggestions__usernames">
        <div className="suggestion__username flex flex-row justify-between mt-4">
          <div className="username__left flex items-center justify-between">
            <span className="avatar mr-2">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info flex flex-col">
              <span className="username">maheswari__ravi</span>
              <span className="relation text-gray-50/[.4] text-sm">
                New to Instagram
              </span>
            </div>
          </div>
          <button className="follow__button text-blue-500 hover:text-white">
            Follow
          </button>
        </div>
      </div>

      <div className="suggestions__usernames">
        <div className="suggestion__username flex flex-row justify-between mt-4">
          <div className="username__left flex items-center justify-between">
            <span className="avatar mr-2">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info flex flex-col">
              <span className="username">maheswari__ravi</span>
              <span className="relation text-gray-50/[.4] text-sm">
                New to Instagram
              </span>
            </div>
          </div>
          <button className="follow__button text-blue-500 hover:text-white">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
