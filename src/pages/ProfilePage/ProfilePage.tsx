import React from "react";
import Profile from "../../components/Profile/Profile";
import { PostData, UserData } from "../../utils/types";

function ProfilePage({
  userPosts,
  currentUser,
  onAddPost,
  onPostLike,
  onPostDelete
}: {
  userPosts: PostData[];
  currentUser: UserData;
  onAddPost: () => void;
  onPostLike: (post: PostData) => void;
  onPostDelete: (post: PostData) => void;
}) {
  return (
    <div className="profile-page">
      <Profile
        userPosts={userPosts}
        currentUser={currentUser}
        onAddPost={onAddPost}
        onPostLike={onPostLike}
        onPostDelete={onPostDelete}
      />
    </div>
  );
}

export default ProfilePage;
