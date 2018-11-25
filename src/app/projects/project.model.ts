import { Requisite } from "./requisite.model";

export interface Project {
    title: string;
    id?: number;
    requisites?: Requisite[];
}