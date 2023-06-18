import type { User } from '@/types/User';

export type ArticleProps = {
  id: number;
  title: string;
  content: string;
  users: User[];
};
