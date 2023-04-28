import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '../constant/queryKeys';

import { Post } from '@/types/Post.interface';

const fetchPost = async (maxPostPage: number, currentPage: number) => {
  console.log('maxPostPage, currentPage', maxPostPage, currentPage);

  const reponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${maxPostPage}&_page=${currentPage}`
  );
  return reponse.json();
};

const usePost = (maxPostPage: number, currentPage: number) => {
  const fallback: Post[] = [];
  const {
    data = fallback,
    isError,
    isLoading,
  } = useQuery(
    [queryKeys.posts, currentPage],
    () => fetchPost(maxPostPage, currentPage),
    {
      staleTime: 5000,
    }
  );
  const posts = data as Post[];
  return { posts, isError, isLoading };
};

export default usePost;
