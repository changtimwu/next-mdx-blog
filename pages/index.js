import { Post } from "../components/Post";
import { posts } from "../getAllPosts";

export default function IndexPage() {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.link} post={post} />
      ))}
    </>
  );
}

// My blog: https://www.ibrahima-ndaw.com/