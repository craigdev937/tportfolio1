import { IconType } from "react-icons";

export interface ISkills {
    id: number,
    text: string,
    icon: IconType,
    color: string,
};

export interface IProject {
    id: number,
    title: string,
    description: string,
    technology: string,
    img: "asset/resource",
    link: string,
    github: string
};



