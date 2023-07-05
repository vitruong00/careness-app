export interface CreatePostProps {
  title: string;
  message: string;
  selectedFile: string;
}

export interface PostDataProps {
  createdAt: Date;
  likeCount: number;
  message: string;
  selectedFile: string;
  title: string;
  __v: number;
  _id: string;
}
