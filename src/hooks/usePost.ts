import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '../constant/queryKeys';

import { Post } from '@/types/Post.interface';

const fetchPost = async () => {
  const reponse = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0'
  );
  return reponse.json();
};

const usePost = () => {
  const fallback: Post[] = [];
  const {
    data = fallback,
    isError,
    isLoading,
  } = useQuery([queryKeys.post], fetchPost);
  const posts = data as Post[];
  return { posts, isError, isLoading };
};

export default usePost;
