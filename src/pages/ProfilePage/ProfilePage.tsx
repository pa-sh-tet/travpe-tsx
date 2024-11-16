import React from "react";
import Profile from "../../components/Profile/Profile";
import { PostData, UserData } from "../../utils/types";

function ProfilePage({
  userPosts,
  user,
}: {
  userPosts: PostData[];
  user: UserData;
}) {
  return (
    <div className="profile-page">
      <Profile userPosts={userPosts} user={user} />
    </div>
  );
}

export default ProfilePage;
