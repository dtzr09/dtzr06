import birdexPhoto from "../static/images/birdex/2.png";
import netflixPhoto from "../static/images/netflix/1.png";
import imPhoto from "../static/images/im/2.png";

export const creations = [
  {
    key: 1,
    name: "Birdex",
    details: "An encyclopedia that uses the CRUD framework with Redux library",
    skills: ["React", "Redux", "CSS", "Javascript", "HTML"],
    url: "dtzr09.github.io/birdex-redux/",
    source: "github.com/dtzr09/birdex",
    file_name: "birdex/",
    preview: birdexPhoto,
    photos: ["0.mp4", "2.png", "3.png", "4.png"],
  },
  {
    key: 2,
    name: "Netflix Clone",
    details: "A clone of Netflix implemented with Stripe and Firebase",
    skills: ["React", "HTML", "CSS", "Javascript", "Stripe", "Firebase"],
    url: "netflix2-clone-e95d8.firebaseapp.com",
    source: "github.com/dtzr09/netflix-clone",
    preview: netflixPhoto,
    file_name: "netflix/",
    photos: ["0.mp4", "1.png", "2.png", "3.png"],
  },
  {
    key: 3,
    name: "Instant Messaging System",
    details: "A system that enables users to send and retrieve messages.",
    skills: ["Golang", "gRPC", "mySQL", "Docker"],
    url: "",
    source: "https://github.com/dtzr09/IM_service",
    preview: imPhoto,
    file_name: "im/",
    photos: ["0.mp4", "1.png", "2.png", "3.png"],
  },
];
