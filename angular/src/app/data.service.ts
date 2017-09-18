import { AuthService } from './auth.service';
import { List } from './list.model';
import { Game } from './game.model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs';

@Injectable()
export class DataService {
    lists: any[] = [];

    constructor(private http: Http,
                private authService: AuthService) {}

    getUserByUsername(username) {
        return this.http.get('http://localhost:3000/users/username/' + username)
            .map(response => response.json());
    }

    // get games
    getGames() {
        return this.http.get('http://localhost:3000/games');
    }

    // get game by id
    getGameById(id) {
        return this.http.get('http://localhost:3000/games/' + id);
    }

    // get game by igdb id
    getGameByIGDBId(id) {
        return this.http.get('http://localhost:3000/games/igdb/' + id);
    }

    //get games by decade
    getGamesByDecade(decade, page?) {
        return this.http.get('http://localhost:3000/games/decade/' + decade + '/' + page)
            .map(response => response.json());
    }

    // get games by year
    getGamesByYear(year, page?) {
        return this.http.get('http://localhost:3000/games/year/' + year + '/' + page)
            .map(response => response.json());
    }

    getJustReviewed() {
        return this.http.get('http://localhost:3000/games/just-reviewed')
            .map(response => response.json());
    }

    getPopularGames() {
        return this.http.get('http://localhost:3000/games/popular')
            .map(response => response.json());
    }

    // get staff picks
    getStaffPicks() {
        return this.http.get('http://localhost:3000/games/staff');
    }

    // get lists
    getLists() {
        return this.http.get('http://localhost:3000/lists');
    }

    getListById(id) {
        return this.http.get('http://localhost:3000/lists/' + id);
    }

    // get lists including specific game
    getListsIncludingGame(id) {
        return this.http.get('http://localhost:3000/lists/game/' + id);
    }

    postList(body) {
        let headers = new Headers();
        headers.append('Authorization', this.authService.authToken);

        return this.http.post('http://localhost:3000/lists', body, { headers: headers })
        .map(response => response.json());
    }

    updateList(listId, body) {
        let headers = new Headers();
        headers.append('Authorization', this.authService.authToken);
        
        return this.http.put('http://localhost:3000/lists/' + listId, body, { headers: headers})
        .map(response => response.json())
    }

    deleteList(listId) {
        let headers = new Headers();
        headers.append('Authorization', this.authService.authToken);
        
        return this.http.delete('http://localhost:3000/lists/' + listId, { headers: headers})
        .map(response => response.json())
    }

    // get reviews
    getReviews() {
        return this.http.get('http://localhost:3000/reviews')
            .map(response => response.json());
    }

    postReview(body) {
        let headers = new Headers();
        headers.append('Authorization', this.authService.authToken);
        
        return this.http.post('http://localhost:3000/reviews/', body, { headers: headers })
        .map(response => response.json());
    }

    updateReview(reviewId, body) {
        let headers = new Headers();
        headers.append('Authorization', this.authService.authToken);
        
        return this.http.put('http://localhost:3000/reviews/' + reviewId, body, { headers: headers })
        .map(response => response.json());
    }

    deleteReview(reviewId) {
        let headers = new Headers();
        headers.append('Authorization', this.authService.authToken);
        
        return this.http.delete('http://localhost:3000/reviews/' + reviewId, { headers: headers })
        .map(response => response.json());
    }

    // get recent reviews
    getRecentReviews(page?) {
        return this.http.get('http://localhost:3000/reviews/recent/' + page)
            .map(response => response.json());
    }

    getPopularReviews(page?) {
        return this.http.get('http://localhost:3000/reviews/popular/' + page)
            .map(response => response.json());
    }

    addGameLike(gameId, userId) {
        let headers = new Headers();
        headers.append('Authorization', this.authService.authToken);

        const body = {
            gameId: gameId,
            date: Date.now(),
        }
        return this.http.post('http://localhost:3000/likes/game', body, { headers: headers })
            .map(response => response.json());
    }

    getGameLike(gameId, userId) {
        return this.http.get('http://localhost:3000/likes/game/' + gameId + '/user/' + userId)
            .map(response => response.json())
    }

    deleteLike(likeId) {
        let headers = new Headers();
        headers.append('Authorization', this.authService.authToken);

        return this.http.delete('http://localhost:3000/likes/' + likeId, { headers: headers })
            .map(response => response.json());
    }

    addListLike(listId, userId) {
        let headers = new Headers();
        headers.append('Authorization', this.authService.authToken);

        const body = {
            listId: listId,
            date: Date.now(),
        }

        return this.http.post('http://localhost:3000/likes/list', body, { headers: headers })
            .map(response => response.json());
    }

    getListLike(listId, userId) {
        return this.http.get('http://localhost:3000/likes/list/' + listId + '/user/' + userId)
            .map(response => response.json());
    }

    addReviewLike(reviewId, userId) {
        let headers = new Headers();
        headers.append('Authorization', this.authService.authToken);

        const body = {
            reviewId: reviewId,
            date: Date.now()
        };

        return this.http.post('http://localhost:3000/likes/review', body, { headers: headers})
            .map(response => response.json());
    }

    getReviewLike(reviewId, userId) {
        return this.http.get('http://localhost:3000/likes/review/' + reviewId + '/user/' + userId)
            .map(response => response.json());
    }

    getBackloggedGame(userId, gameId) {
        return this.http.get('http://localhost:3000/users/' + userId + '/backlog/' + gameId)
            .map(response => response.json());
    }

    // need header
    addBackloggedGame(userId, game) {
        const body = {
            game: game
        };

        let headers = new Headers();
        headers.append('Authorization', this.authService.authToken);

        return this.http.post('http://localhost:3000/users/' + userId + '/backlog', body, { headers: headers})
            .map(response => response.json())
    }

    deleteBackloggedGame(userId, gameId) {
        let headers = new Headers();
        headers.append('Authorization', this.authService.authToken);

        return this.http.delete('http://localhost:3000/users/' + userId + '/backlog/' + gameId, { headers: headers })
            .map(response => response.json())
    }

    getRating(gameId, userId) {
        return this.http.get('http://localhost:3000/ratings/game/' + gameId + '/user/' + userId)
            .map(response => response.json())
    }

    postRating(userId, gameId, rating) {
        const body = {
            gameId: gameId,
            rating: rating,
            date: Date.now()
        };

        let headers = new Headers();
        headers.append('Authorization', this.authService.authToken);

        return this.http.post('http://localhost:3000/ratings', body, { headers: headers })
            .map(response => response.json())
    }

    deleteRating(ratingId) {
        let headers = new Headers();
        headers.append('Authorization', this.authService.authToken);

        return this.http.delete('http://localhost:3000/ratings/' + ratingId, { headers: headers })
            .map(response => response.json());
    } 

    postPlay(gameId, userId) {
        const body = {
            gameId: gameId
        };

        let headers = new Headers();
        headers.append('Authorization', this.authService.authToken);

        return this.http.post('http://localhost:3000/plays', body, { headers: headers })
            .map(response => response.json());
    }

    getPlay(gameId, userId) {
        return this.http.get('http://localhost:3000/plays/game/' + gameId + '/user/' + userId)
            .map(response => response.json());
    }

    deletePlay(playId) {

        let headers = new Headers();
        headers.append('Authorization', this.authService.authToken);

        return this.http.delete('http://localhost:3000/plays/' + playId, { headers: headers })
            .map(response => response.json());
    }

    getReview(reviewId) {
        return this.http.get('http://localhost:3000/reviews/' + reviewId)
            .map(response => response.json());
    }

    getUsers() {
        return this.http.get('http://localhost:3000/users/')
            .map(response => response.json());
    }

    getRecentLists(page?) {
        return this.http.get('http://localhost:3000/lists/recent/' + page)
            .map(response => response.json());
    }

    getPopularLists(page?) {
        return this.http.get('http://localhost:3000/lists/popular/' + page)
            .map(response => response.json());
    }

    getRecentGameReviews(gameId, page?) {
        return this.http.get('http://localhost:3000/reviews/game/' + gameId + '/recent/' + page)
            .map(response => response.json());
    }

    getPopularGameReviews(gameId, page?) {
        return this.http.get('http://localhost:3000/reviews/game/' + gameId + '/popular/' + page)
        .map(response => response.json());
    }
}
