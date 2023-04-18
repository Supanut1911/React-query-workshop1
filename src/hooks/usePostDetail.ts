import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/constant/queryKeys';

import { PostDetail } from '@/types/PostDetail.interface';

const fetchPostDetail = async (postId: string) => {
  const reponse = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return reponse.json();
};

const usePostDetail = (postId: string) => {
  const fallback: PostDetail[] = [];
  const {
    data = fallback,
    isError,
    isLoading,
  } = useQuery([queryKeys.posts, postId], () => {
    return fetchPostDetail(postId);
  });
  return { data, isError, isLoading };
};

export default usePostDetail;
