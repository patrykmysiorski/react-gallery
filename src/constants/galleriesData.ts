// import {xd} from
import moment from "moment";

const GALLERIES = [
  {
    galleryId: "1",
    title: "Rzym",
    dateCreated: moment(new Date()).subtract("1", "month").toDate(),
    coverUrl: "/img/galleries/box1/main.jpeg",
    description: "Kilka dni zwariowanego wypadu do Rzymu.",
    tags: [],
    photos: [],
  },
  {
    galleryId: "2",
    title: "Maroko",
    dateCreated: moment(new Date())
      .subtract("1", "year")
      .subtract("2", "month")
      .subtract("15", "days")
      .toDate(),
    coverUrl: "/img/galleries/box2/main.jpeg",
    description: "Tydzień zwiedzania południowego Maroka z ojcem.",
    tags: [],
    photos: [],
  },
  {
    galleryId: "3",
    title: "Tajlandia",
    dateCreated: moment(new Date()).subtract("3", "years").toDate(),
    coverUrl: "/img/galleries/box3/main.jpeg",
    description: "Dwa tygodnie wycieczki po Tajlandii.",
    tags: [],
    photos: [],
  },
];

export default GALLERIES;
