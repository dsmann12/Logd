import { Game } from './game.model';
import { User } from './user.model';
export class Review {
    user: User;
    game: Game;
    text: string;
    likes: number;
    comments: number;
}