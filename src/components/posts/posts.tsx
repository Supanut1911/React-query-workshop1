import { useState } from 'react';

import usePost from '@/hooks/usePost';

import PostCard from '@/components/posts/post';

const PostView = () => {
  const maxPostPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const { posts, isError, isLoading } = usePost(maxPostPage, currentPage);
  if (isLoading) return <div>Loading ...</div>;
  else if (isError) return <div>Fetching false</div>;

  return (
    <div>
      <div className='mb-10 flex justify-center'>
        <p className='bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-8xl font-extrabold text-transparent'>
          Use query get Posts
        </p>
      </div>
      <div className='mr-20 flex justify-end space-x-2'>
        <button
          className={`${
            currentPage <= 1 ? 'bg-gray-300' : 'bg-[#7C9070]'
          }  rounded-md p-2`}
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage((preValue) => preValue - 1)}
        >
          Prev page
        </button>
        <span className='text-md p-2'>Page {currentPage}</span>
        <button
          disabled={currentPage >= maxPostPage}
          className={`
              ${currentPage >= maxPostPage ? 'bg-gray-300' : 'bg-[#F97B22]'}  
              rounded-md p-2`}
          onClick={() => setCurrentPage((preValue) => preValue + 1)}
        >
          Next page
        </button>
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
