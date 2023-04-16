import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '../constant/queryKeys';

import { Post } from '@/types/Post.interface';

const fetchPost = async () => {
  const reponse = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0'
  );
  return reponse.json();
};

const usePost = (): Post[] => {
  const fallback: Post[] = [];
  const { data = fallback } = useQuery([queryKeys.post], fetchPost);
  return data;
};

export default usePost;
