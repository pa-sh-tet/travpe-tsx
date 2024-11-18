import React from "react";
import Main from "../../components/Main/Main";
import { PostData, UserData } from "../../utils/types";

function MainPage({
  posts,
  onAddPost,
  currentUser,
  onPostLike,
}: {
  posts: PostData[];
  onAddPost: () => void;
  currentUser: UserData;
  onPostLike: (post: PostData) => void;
}) {
  return (
    <div className="main-page">
      <Main
        posts={posts}
        currentUser={currentUser}
        onAddPost={onAddPost}
        onPostLike={onPostLike}
      />
    </div>
  );
}

export default MainPage;
