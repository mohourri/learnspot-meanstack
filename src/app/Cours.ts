import {Chapter} from './Chapter'
export interface Cours {
    _id?: string;
    description: string;
    title: string;
    category: string;
    duration: number;
    author: string;
    views: number,
    chapters: Array<Chapter>
}