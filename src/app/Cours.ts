import {Chapter} from './Chapter'
export interface Cours {
    id_course?: number;
    description: string;
    title: string;
    category: string;
    duration: number;
    author: string;
    views: number,
    chapters: Array<Chapter>
}