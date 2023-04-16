import usePost from '@/hooks/usePost';

import PostDetail from '@/components/posts/post';

const PostView = () => {
  const posts = usePost();

  return (
    <div className='flex flex-col'>
      {posts.map((post, idx) => {
        return <PostDetail post={post} key={idx} />;
      })}
    </div>
  );
};

export default PostView;
