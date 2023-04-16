import { Post } from '@/types/Post.interface';

interface PostProp {
  post: Post;
}

const PostCard = ({ post }: PostProp) => {
  return (
    <>
      <div className='w-100 m-8 flex h-full rounded-md p-4 hover:shadow-xl '>
        <div className='flex items-center text-center'>
          <p className='text-4xl font-bold'>{post.id}</p>
        </div>
        <div className='m-4 h-20 w-0.5 bg-black'></div>
        <div className='p-4'>
          <p className='text-xl font-bold'>{post.title}</p>
          <p className='overflow-hidden'>{post.body}</p>
        </div>
      </div>
    </>
  );
};

export default PostCard;
