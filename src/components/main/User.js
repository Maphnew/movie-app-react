import { Suspense } from "react";
import Posts from "./Posts";

const User = ({ resource }) => {
  const user = resource.user.read();

  return (
    <div className="user">
      <h2>User</h2>
      <p>
        {user.name}({user.email}) 님이 작성한 글
      </p>
      <Suspense fallback={<p>글목록 로딩중...</p>}>
        <Posts resource={resource} />
      </Suspense>
    </div>
  );
};

export default User;
