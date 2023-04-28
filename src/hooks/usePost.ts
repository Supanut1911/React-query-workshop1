import { useQuery } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

import { queryKeys } from '../constant/queryKeys';

import { Post } from '@/types/Post.interface';

const fetchPost = async (maxPostPage: number, currentPage: number) => {
  const reponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${maxPostPage}&_page=${currentPage}`
  );
  return reponse.json();
};

const usePost = (maxPostPage: number, currentPage: number) => {
  const fallback: Post[] = [];
  const queryClient = useQueryClient();

  useEffect(() => {
    if (currentPage < maxPostPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery([queryKeys.posts, nextPage], () =>
        fetchPost(maxPostPage, nextPage)
      );
    }
  }, [currentPage, queryClient]);

  const {
    data = fallback,
    isError,
    isLoading,
    isFetching,
  } = useQuery(
    [queryKeys.posts, currentPage],
    () => fetchPost(maxPostPage, currentPage),
    {
      staleTime: 2000,
      keepPreviousData: true,
    }
  );
  const posts = data as Post[];
  return { posts, isError, isLoading, isFetching };
};

export default usePost;
