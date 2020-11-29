import moment from "moment";

export const galleriesMock = [
  {
    galleryId: "1",
    title: "Roma",
    dateCreated: "2020-11-19T20:26:56.902Z",
    coverUrl: "/img/galleries/box1/main.jpeg",
    description:
      "Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio.",
    tags: ["morocco", "tag2", "tag5"],
    photos: [
      "/img/galleries/box1/main.jpeg",
      "/img/galleries/box2/main.jpeg",
      "/img/galleries/box6/main.jpeg",
      "/img/galleries/box4/main.jpeg",
    ],
    comments: [
      {
        commentId: "1",
        userId: "1",
        content:
          "COMMENT 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis rutrum leo, vitae vehicula sem semper eu. Aliquam iaculis sagittis risus, vitae accumsan turpis. Morbi sit amet malesuada quam.",
        createdAt: moment(new Date()).toISOString(),
      },
      {
        commentId: "2",
        userId: "1",
        content:
          "COMMENT 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis rutrum leo, vitae vehicula sem semper eu. Aliquam iaculis sagittis risus, vitae accumsan turpis. Morbi sit amet malesuada quam.",
        createdAt: moment(new Date()).toISOString(),
      },
    ],
  },
  {
    galleryId: "2",
    title: "Morocco",
    dateCreated: "2020-11-19T20:26:56.902Z",
    coverUrl: "/img/galleries/box2/main.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.",
    tags: [
      "morocco",
      "tag2",
      "tag5",
      "morocco",
      "tag2",
      "tag5",
      "morocco",
      "tag2",
      "tag5",
      "morocco",
      "tag2",
    ],
    photos: [],
  },
  {
    galleryId: "3",
    title: "Thailand",
    dateCreated: "2020-11-19T20:26:56.902Z",
    coverUrl: "/img/galleries/box3/main.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem.",
    tags: [],
    photos: [],
  },
  {
    galleryId: "4",
    title: "Madrid",
    dateCreated: "2020-11-19T20:26:56.902Z",
    coverUrl: "/img/galleries/box4/main.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem.",
    tags: [],
    photos: [],
  },
];
