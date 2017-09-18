import { List } from './list.model';

export class Game {
    title: string;
    releaseYear: string;
    description: string;
    cover: string;
    played: number;
    fans: number;
    lists: List[];
    developers: string[];
    publishers: string[];
}
