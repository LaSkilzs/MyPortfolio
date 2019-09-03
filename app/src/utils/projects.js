import React from "react";
import doggie from "../images/doggie.png";
import hair from "../images/hair.png";
import jobs from "../images/jobs.png";
import car from "../images/car.png";
import assets from "../images/assets.png";
import immersful from "../images/immersful.png";
import social from "../images/social.png";
import portfolio from "../images/portfolio.png";
import google from "../images/google.png";

const projects = [
  {
    id: 1,
    title: "Sniff Scratch n' Shake",
    language: "Ruby Rails Bootstrap",
    summary:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
    author: "La Fountain",
    goal: {
      start: "date",
      name: "name of goal",
      estimated_time: "time to complete"
    },
    image: doggie
  },
  {
    id: 2,
    title: "Shear Elegance",
    language: "Rails React Redux Rails API CSS DJ.3 Node.JS Socket.io",
    summary:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
    author: "La Fountain",
    goal: {
      start: "date",
      name: "name of goal",
      estimated_time: "time to complete"
    },
    image: hair
  },
  {
    id: 3,
    title: "Time Travel",
    language: "Javascript Rails API",
    summary:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
    author: "La Fountain",
    goal: {
      start: "date",
      name: "name of goal",
      estimated_time: "time to complete"
    },
    image: jobs
  },
  {
    id: 4,
    title: "Car Collection",
    language: "React Rails API BootStrap",
    summary:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
    author: "La Fountain",
    goal: {
      start: "date",
      name: "name of goal",
      estimated_time: "time to complete"
    },
    image: car
  },
  {
    id: 5,
    title: "Flatbook",
    language: "CSS React DAPP Solidarity Rails API",
    summary:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
    author: "La Fountain",
    goal: {
      start: "date",
      name: "name of goal",
      estimated_time: "time to complete"
    },
    image: social
  },
  {
    id: 6,
    title: "Portfolio",
    language: "React Firebase CSS",
    summary:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
    author: "La Fountain",
    goal: {
      start: "date",
      name: "name of goal",
      estimated_time: "time to complete"
    },
    image: portfolio
  },
  {
    id: 7,
    title: "Immersful",
    language: "React Firebase Material-UI React-Hooks",
    summary:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
    author: "La Fountain",
    goal: {
      start: "August 18, 2019",
      end: "Still Working on Project"
    },
    image: immersful
  },
  {
    id: 8,
    title: "Google API",
    language: "React Netlify Material-UI Google Api",
    summary:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
    author: "La Fountain",
    goal: {
      start: "June 19, 2019",
      end: "June 22, 2019"
    },
    image: google
  },
  {
    id: 9,
    title: "Asset Management",
    language: "React Solidity Typescript Javascript Jest Material-UI Stock-Api",
    summary:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
    author: "La Fountain",
    goal: {
      start: "July 19, 2019",
      end: "August 17, 2019"
    },
    image: assets
    // },
    // {
    //   id: 10,
    //   title: "Casino",
    //   language:
    //     "React Typescript Javascript Jest Material-UI Sockets Express NodeJs MongoDB Firebase",
    //   summary:
    //     "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.",
    //   author: "La Fountain",
    //   goal: {
    //     start: "Sept 1, 2019",
    //     end: "in progess"
    //   },
    //   image: "casino"
  }
];

export default projects;
