import { useRouter } from 'next/router';

import usePostDetail from '@/hooks/usePostDetail';

import PostComment from '@/components/posts/postComment';

import { PostDetail } from '@/types/PostDetail.interface';
const PostDetailById = () => {
  const router = useRouter();
  // const postId =
  // typeof router.query.test === 'string' ? router.query.test : '0';
  const postId = router.query.id;
  const { data, isError, isLoading } = usePostDetail(postId as string);

  if (isLoading) return <div>Loading ...</div>;
  else if (isError) return <div>Fetching false</div>;

  return (
    <>
      {data.map((item: PostDetail, idx: number) => {
        return <PostComment key={idx} comment={item} />;
      })}
    </>
  );
};

export default PostDetailById;
