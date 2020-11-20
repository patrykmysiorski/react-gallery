import moment from "moment";

const GALLERIES = [
  {
    galleryId: "1",
    title: "Roma",
    dateCreated: moment(new Date()).subtract("1", "month").toDate(),
    coverUrl: "/img/galleries/box1/main.jpeg",
    description:
      "Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio.",
    tags: [],
    photos: [],
  },
  {
    galleryId: "2",
    title: "Morocco",
    dateCreated: moment(new Date())
      .subtract("1", "year")
      .subtract("2", "month")
      .subtract("15", "days")
      .toDate(),
    coverUrl: "/img/galleries/box2/main.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.",
    tags: ["morocco"],
    photos: [],
  },
  {
    galleryId: "3",
    title: "Thailand",
    dateCreated: moment(new Date()).subtract("3", "years").toDate(),
    coverUrl: "/img/galleries/box3/main.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem.",
    tags: [],
    photos: [],
  },
  {
    galleryId: "4",
    title: "Madrid",
    dateCreated: moment(new Date()).subtract("3", "years").toDate(),
    coverUrl: "/img/galleries/box4/main.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem.",
    tags: [],
    photos: [],
  },
];

export default GALLERIES;
