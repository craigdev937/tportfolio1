import { IProject, ISkills } from "../models/Interfaces";
import { MdDevices } from "react-icons/md";
import { FaHtml5, FaCss3Alt, FaReact, 
    FaNodeJs, FaGitAlt, FaNpm } from "react-icons/fa";
import {
	SiJavascript, SiTypescript, SiMongodb,
	SiPostgresql, SiFirebase, SiExpress,
	SiRedux, SiWebpack, SiVite
} from "react-icons/si";
import { TfiGithub } from "react-icons/tfi";
import { TbApi } from "react-icons/tb";

export const skills: ISkills[] = [
	{ id: 1, text: "HTML", icon: FaHtml5, color: "#f05a1a" },
	{ id: 2, text: "CSS", icon: FaCss3Alt, color: "#2965f1" },
	{ id: 3, text: "JavaScript", icon: SiJavascript, color: "#e3e017" },
	{ id: 4, text: "TypeScript", icon: SiTypescript, color: "#2a74d4" },
	{ id: 5, text: "Webpack", icon: SiWebpack, color: "#fff" },
	{ id: 6, text: "Vite", icon: SiVite, color: "#2a74d4" },
    { id: 7, text: "Git", icon: FaGitAlt, color: "#f14e32" },
	{ id: 8, text: "React", icon: FaReact, color: "#61dafb" },
	{ id: 9, text: "Redux Toolkit", icon: SiRedux, color: "#764abc" },
    { id: 10, text: "Responsive Design", icon: MdDevices, color: "#e55474" },
    { id: 11, text: "GitHub", icon: TfiGithub, color: "#fff" },	
    { id: 12, text: "Firebase", icon: SiFirebase, color: "#ffa50f" },
    { id: 13, text: "npm", icon: FaNpm, color: "#cb3837" },
	{ id: 14, text: "Node.js", icon: FaNodeJs, color: "#3e863d" },
	{ id: 15, text: "Express.js", icon: SiExpress, color: "#e3e017" },
	{ id: 16, text: "MongoDB Atlas", icon: SiMongodb, color: "#13aa52" },
    { id: 17, text: "PostgreSQL", icon: SiPostgresql, color: "#4479A1" },
    { id: 18, text: "REST API", icon: TbApi, color: "#4479A1" },

];

export const projects: IProject[] = [
    {
        id: 1,
        title: "Bookstore",
        description: "A Bookstore Project.",
        technology: "Webpack, Babel, and React.",
        img: "https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg",
        link: "https://en.wikipedia.org/wiki/Bookselling",
        github: "https://github.com/craigdev937",
    },
    {
        id: 2,
        title: "College Grad",
        description: "A Grad Student Project.",
        technology: "Webpack, TypeScript, and React.",
        img: "https://cdn.pixabay.com/photo/2019/02/11/21/06/college-students-3990783_1280.jpg",
        link: "https://en.wikipedia.org/wiki/College",
        github: "https://github.com/craigdev937",
    },
    {
        id: 3,
        title: "Soccer",
        description: "A project teaching Soccer drills.",
        technology: "Vite, TypeScript, and React.",
        img: "https://cdn.pixabay.com/photo/2022/03/04/11/51/football-game-7047128_1280.jpg",
        link: "https://en.wikipedia.org/wiki/Soccer_in_the_United_States",
        github: "https://github.com/craigdev937",
    },
    {
        id: 4,
        title: "Steplechase",
        description: "A Fitness Project on long distance running.",
        technology: "Webpack, TypeScript, and React.",
        img: "https://cdn.pixabay.com/photo/2016/11/18/13/23/action-1834465_1280.jpg",
        link: "https://en.wikipedia.org/wiki/Steeplechase_(athletics)",
        github: "https://github.com/craigdev937",
    },
    {
        id: 5,
        title: "Travel",
        description: "A Project about traveling overseas.",
        technology: "Vite, TypeScript, and React.",
        img: "https://cdn.pixabay.com/photo/2016/11/19/20/19/supermoon-1840957_1280.jpg",
        link: "https://en.wikipedia.org/wiki/Travel",
        github: "https://github.com/craigdev937",
    },
    {
        id: 6,
        title: "Outer Space",
        description: "A Project about discovering outer space!",
        technology: "Webpack, TypeScript, React, and Redux-Toolkit.",
        img: "https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098_1280.jpg",
        link: "https://en.wikipedia.org/wiki/Outer_space",
        github: "https://github.com/craigdev937",
    },
];



