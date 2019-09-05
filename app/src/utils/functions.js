import React from "react";
import Info from "../components/about/Info";
import Education from "../components/about/Education";
import Experience from "../components/about/Experience";
import Skills from "../components/about/Skills";
import Interests from "../components/about/Interests";

const changer = name => {
  console.log(name);
  if (name.toLowerCase() === "experience") return <Experience />;
  else if (name.toLowerCase() === "education") return <Education />;
  else if (name.toLowerCase() === "skills") return <Skills />;
  else if (name.toLowerCase() === "interests") return <Interests />;
  else if (name.toLowerCase() === "experience") return <Interests />;
  else return <Info />;
};

export const languageIncluded = (array1, array2) => {
  array1 = array1.split("/");
  array2 = array2.toLowerCase().split(" ");

  // console.log("btns", array1);
  // console.log("list", array2);
  let newObject = {};
  let result = false;

  for (let lang of array2) {
    newObject[lang] = true;
  }

  for (let i = 0; i < array1.length; i++) {
    if (newObject[array1[i]]) {
      break;
    }
    result = true;
  }
  return result;
};

export default changer;
