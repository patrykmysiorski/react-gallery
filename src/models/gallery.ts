import IComment from "./comment";

interface IGallery {
  galleryId: string;
  title: string;
  dateCreated: Date;
  description: string;
  coverUrl: string;
  tags?: string[];
  photos?: any;
  comments: IComment[];
}

export default IGallery;
