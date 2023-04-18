import { PostDetail } from '@/types/PostDetail.interface';
interface PostCommentProp {
  comment: PostDetail;
}

const PostComment = ({ comment }: PostCommentProp) => {
  return (
    <>
      <div className='w-100 hover: m-8 flex h-full rounded-md p-4 hover:bg-yellow-700 hover:shadow-xl'>
        <div className='flex items-center text-center'>
          <p className='text-4xl font-bold'>{comment.id}</p>
        </div>
        <div className='m-4 h-20 w-0.5 bg-white'></div>
        <div className='p-4'>
          <p className='text-xl font-bold'>{comment.name}</p>
          <p className='overflow-hidden'>{comment.body}</p>
        </div>
      </div>
    </>
  );
};

export default PostComment;
