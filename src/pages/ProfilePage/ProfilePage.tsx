import React from "react";
import Profile from "../../components/Profile/Profile";
import { PostData, UserData } from "../../utils/types";

function ProfilePage({
  userPosts,
  user,
  onAddPost,
}: {
  userPosts: PostData[];
  user: UserData;
  onAddPost: () => void;
}) {
  return (
    <div className="profile-page">
      <Profile userPosts={userPosts} user={user} onAddPost={onAddPost} />
    </div>
  );
}

export default ProfilePage;
