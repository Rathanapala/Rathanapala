import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
  kit: {
    adapter: vercel()
  },
  preprocess: vitePreprocess()
};
