import usePost from '@/hooks/usePost';

import PostCard from '@/components/posts/post';

const PostView = () => {
  const { posts, isError, isLoading } = usePost();
  if (isLoading) return <div>Loading ...</div>;
  else if (isError) return <div>Fetching false</div>;

  return (
    <div>
      <div className='mb-10 flex justify-center'>
        <p className='bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-8xl font-extrabold text-transparent'>
          Use query get Posts
        </p>
      </div>
      <div className='flex flex-col'>
        {posts.map((post, idx) => {
          return <PostCard post={post} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default PostView;
