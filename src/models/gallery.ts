interface IGallery {
  galleryId: string;
  title: string;
  dateCreated: Date;
  description: string;
  coverUrl: string;
  tags?: string[];
  photos?: any;
}

export default IGallery;
