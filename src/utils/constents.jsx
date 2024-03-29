import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { GrTechnology } from "react-icons/gr";

export const viewsCounter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "k";
  } else {
    return value;
  }
};

export const categories = [
  { name: "Home", icon: <AiFillHome /> },
  { name: "Trending", icon: <MdLocalFireDepartment /> },
  { name: "Music", icon: <CgMusicNote /> },
  { name: "Films", icon: <FiFilm /> },
  { name: "Live", icon: <MdLiveTv /> },
  { name: "Gaming", icon: <IoGameControllerSharp /> },
  { name: "News", icon: <ImNewspaper /> },
  { name: "Sports", icon: <GiDiamondTrophy /> },
  { name: "Movie", icon: <RiFeedbackLine /> },
  { name: "Learning", icon: <RiLightbulbLine /> },
  { name: "Technology", icon: <GrTechnology /> },
  { name: "Settings", icon: <FiSettings /> },
  { name: "Report", icon: <AiOutlineFlag /> },
  { name: "Help", icon: <FiHelpCircle /> },
  { name: "feedback", icon: <RiFeedbackLine /> },
  { name: "Sports", icon: <RiFeedbackLine /> },
  // { name: "Learning", icon: <RiFeedbackLine /> },
  // { name: "Technology", icon: <RiFeedbackLine /> },
  { name: "Gym", icon: <RiFeedbackLine /> },
  { name: "Thriller", icon: <RiFeedbackLine /> },
];
export const FeedButtonListItem = [
  "All",
  "Home",
  "Trending",
  "Music",
  "Films",
  "Live",
  "Gaming",
  "News",
  "Sports",
  "Learning",
  "Technology",
  "Gym",
  "Movie",
  "Thriller",
  "Action",
  "Comdy",
  "ReactJs",
];
