import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Layout from '@/components/layout/Layout';
import PostView from '@/components/posts/posts';

const Post = () => {
  const queryClient = new QueryClient();

  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <PostView />
      </QueryClientProvider>
    </Layout>
  );
};

export default Post;
