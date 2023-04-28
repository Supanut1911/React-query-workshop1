import { useRouter } from 'next/router';

import { Post } from '@/types/Post.interface';
interface PostProp {
  post: Post;
}

const PostCard = ({ post }: PostProp) => {
  const router = useRouter();

  return (
    <>
      <div
        onClick={() => {
          router.push(`/post/${post.id}`);
        }}
      >
        <div className='w-100 flex h-full rounded-md p-2 hover:shadow-xl'>
          <div className='flex items-center text-center'>
            <p className='text-4xl font-bold'>{post.id}</p>
          </div>
          <div className='mx-2 h-20 w-0.5 bg-black'></div>
          <div className='p-2'>
            <p className='text-xl font-bold'>{post.title}</p>
            <p className='overflow-hidden'>{post.body}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
