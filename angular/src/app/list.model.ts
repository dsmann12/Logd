import { Game } from './game.model';

export class List {
    public title: string;
    public author: string;
    public games: Game[];
    public likes: number;
    public comments: number;

    constructor(title: string, author: string, games: Game[], likes: number, comments: number) {
        this.title = title;
        this.author = author;
        this.games = games;
        this.likes = likes;
        this.comments = comments;
    }
}