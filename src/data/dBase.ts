import { IProject, ISkills } from "../models/Interfaces";
import { MdDevices } from "react-icons/md";
import { FaHtml5, FaCss3Alt, FaReact, 
    FaNodeJs, FaGitAlt, FaNpm } from "react-icons/fa";
import {
	SiJavascript, SiTypescript, SiMongodb,
	SiPostgresql, SiFirebase, SiExpress,
	SiRedux, SiWebpack, SiVite, 
    SiTestinglibrary, SiFrontendmentor
} from "react-icons/si";
import { TfiGithub } from "react-icons/tfi";
import Pagination from "@public/Pagination1.jpg";
import Huddle from "@public/Huddle.jpg";
import FourCard from "@public/FourCard.jpg";
import Perfume from "@public/Perfume.jpg";
import NFT from "@public/NFT.jpg";
import Testimonials from "@public/Testimonials.jpg";

export const skills: ISkills[] = [
	{ id: 1, text: "HTML", icon: FaHtml5, color: "#f05a1a" },
	{ id: 2, text: "CSS", icon: FaCss3Alt, color: "#2965f1" },
	{ id: 3, text: "JavaScript", icon: SiJavascript, color: "#e3e017" },
	{ id: 4, text: "TypeScript", icon: SiTypescript, color: "#2a74d4" },
    { id: 12, text: "Frontend Mentor", icon: SiFrontendmentor, color: "#61dafb" },	
	{ id: 5, text: "Webpack", icon: SiWebpack, color: "#fff" },
	{ id: 6, text: "Vite", icon: SiVite, color: "#2a74d4" },
	{ id: 7, text: "Testing Library", icon: SiTestinglibrary, color: "#d1626f" },
    { id: 8, text: "Git", icon: FaGitAlt, color: "#f14e32" },
	{ id: 9, text: "React", icon: FaReact, color: "#61dafb" },
	{ id: 10, text: "Redux Toolkit", icon: SiRedux, color: "#764abc" },
    { id: 11, text: "Responsive Design", icon: MdDevices, color: "#e55474" },
    { id: 12, text: "GitHub", icon: TfiGithub, color: "#fff" },	
    { id: 13, text: "Firebase", icon: SiFirebase, color: "#ffa50f" },
    { id: 14, text: "npm", icon: FaNpm, color: "#cb3837" },
	{ id: 15, text: "Node.js", icon: FaNodeJs, color: "#3e863d" },
	{ id: 16, text: "Express.js", icon: SiExpress, color: "#e3e017" },
	{ id: 16, text: "MongoDB Atlas", icon: SiMongodb, color: "#13aa52" },
    { id: 17, text: "PostgreSQL", icon: SiPostgresql, color: "#4479A1" }
];

export const projects: IProject[] = [
    {
        id: 1,
        title: "Pagination",
        description: "A Pagination Project.",
        technology: "Webpack, TypeScript, React, and Redux-Toolkit.",
        img: Pagination,
        link: "https://pagination1.surge.sh/",
        github: "https://github.com/craigdev937/pagination1",
    },
    {
        id: 2,
        title: "Huddle",
        description: "Build The Community",
        technology: "HTML and CSS.",
        img: Huddle,
        link: "https://craigdev937.github.io/front7/",
        github: "https://github.com/craigdev937/front7",
    },
    {
        id: 3,
        title: "Cards",
        description: "Four card feature section",
        technology: "HTML and CSS.",
        img: FourCard,
        link: "https://craigdev937.github.io/front2/",
        github: "https://github.com/craigdev937/front2",
    },
    {
        id: 4,
        title: "Gabrielle ",
        description: "Product preview card",
        technology: "HTML and CSS.",
        img: Perfume,
        link: "https://craigdev937.github.io/front1/",
        github: "https://github.com/craigdev937/front1",
    },
    {
        id: 5,
        title: "NFT",
        description: "NFT Preview Card",
        technology: "HTML and CSS",
        img: NFT,
        link: "https://craigdev937.github.io/front6/",
        github: "https://github.com/craigdev937/front6",
    },
    {
        id: 6,
        title: "Testimonials",
        description: "Testimonials grid section",
        technology: "HTML and CSS",
        img: Testimonials,
        link: "https://craigdev937.github.io/front4/",
        github: "https://github.com/craigdev937/front4",
    },
];



