import React from "react";
import Main from "../../components/Main/Main";
import { PostData } from "../../utils/types";

function MainPage({ posts }: { posts: PostData[] }) {
  return (
    <div className="main-page">
      <Main posts={posts} />
    </div>
  );
}

export default MainPage;
