export type User = {
  id: number;
  fullname: string;
  username: string;
  image?: string;
};

export type Tweet = {
  id: string;
  owner: User;
  content: string;
  created_at: string;
  image?: string;
  quote_count: number;
  reply_count: number;
  favorite_count: number;
  favorited: boolean;
  also_liked: User[];
  also_retweeted: User;
};
