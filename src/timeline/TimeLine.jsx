import { useState } from "react";
import Post from "./posts/Post";

const TimeLine = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "maheswari__ravi",
      postImage:
        "https://create.microsoft.com/_next/image?url=https%3A%2F%2Fdsgrcdnblobprod5u3.azureedge.net%2Fcmsassets%2FPhotoConcepts-HERO.webp&w=1920&q=75",
      likes: 12,
      timestamp: "2d",
    },
    {
      id: 2,
      user: "jayashree__ravi",
      postImage:
        "https://images.news18.com/ibnlive/uploads/2021/08/sun-photo-16293134144x3.jpg",
      likes: 24,
      timestamp: "1d",
    },
    {
      id: 3,
      user: "nathiya__ravi",
      postImage:
        "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg",
      likes: 8,
      timestamp: "19h",
    },
    {
      id: 4,
      user: "santhosh__ravi",
      postImage:
        "https://px-web-images2.pixpa.com/DcM_xhgQ0OTO0gy5E7HX72q5Nw1JwDvptyfIepSxSV0/rs:fit:640:0/q:80/aHR0cHM6Ly9waXhwYWNvbS1pbWcucGl4cGEuY29tL2NvbS9hcnRpY2xlcy8xNTQzNDgzMzg3LXJlaW5oYXJ0LWp1bGlhbi0xMTQ1OTQ3LXVuc3BsYXNoLmpwZw==",
      likes: 3,
      timestamp: "1h",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline_posts">
        {posts.map((post) => (
          <Post
            key={post.id}
            user={post.user}
            postImage={post.postImage}
            likes={post.likes}
            timestamp={post.timestamp}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
