import { Log } from './log.model';
import { Game } from './game.model';
import { List } from './list.model';
export class User {
    name: string;
    picture: string;
    lists: List[];
    favorites: Game[];
    log: Log[];
    games: Game[];
    wishlist: Game[];
    friends: User[];
    bio: string;
}