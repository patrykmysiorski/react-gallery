interface IGallery {
  galleryId: string;
  title: string;
  dateCreated: Date;
  description: string;
  coverUrl: string;
  tags: any;
  photos: any;
}

export default IGallery;