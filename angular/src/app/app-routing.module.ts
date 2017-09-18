import { AuthGuard } from './auth-guard.service';
import { GamesByYearResolve } from './gamesbyyear.resolve';
import { GameReviewsByPopularityResolve } from './gamereviewsbypopularity.resolve';
import { GameReviewsByDateResolve } from './gamereviewsbydate.resolve';
import { BacklogComponent } from './user/backlog/backlog.component';
import { UserReviewsComponent } from './user/user-reviews/user-reviews.component';
import { ListsByPopularityResolve } from './listsbypopularity.resolve';
import { ListsByDateResolve } from './listsbydate.resolve';
import { ListsPageComponent } from './lists-page/lists-page.component';
import { ReviewsByDateResolve } from './reviewsbydate.resolve';
import { ReviewsByPopularityResolve } from './reviewsbypopularity.resolve';
import { ReviewsPageComponent } from './reviews-page/reviews-page.component';
import { UserGameGalleryComponent } from './user/user-game-gallery/user-game-gallery.component';
import { ProfileEditComponent } from './user/profile-edit/profile-edit.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { GamesByDecadeResolve } from './gamesbydecade.resolve';
import { UserListsComponent } from './user/user-lists/user-lists.component';
import { LongListsListComponent } from './long-lists-list/long-lists-list.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { ListEditComponent } from './list-edit/list-edit.component';
import { SearchComponent } from './search/search.component';
import { ReviewEditComponent } from './review-edit/review-edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { GameComponent } from './game/game.component';
import { GameGalleryComponent } from './game-gallery/game-gallery.component';
import { LogListComponent } from './log-list/log-list.component';
import { ListsComponent } from './lists/lists.component';
import { GamesComponent } from './games/games.component';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'games', component: GamesComponent },
    { path: 'games/:id/reviews/new', component: ReviewEditComponent, canActivate: [AuthGuard]},   
    { path: 'games/:id/reviews/:reviewId', component: ReviewDetailComponent},
    { path: 'games/:id/reviews/:reviewId/edit', component: ReviewEditComponent, canActivate: [AuthGuard]},
    { path: 'games/:id/reviews/popular', component: ReviewsPageComponent},
    { path: 'games/:id', component: GameComponent},
    { path: 'games/by/decade/:decade', component: GameGalleryComponent, resolve: { games: GamesByDecadeResolve}},
    { path: 'games/by/decade/:decade/:page', component: GameGalleryComponent, resolve: { games: GamesByDecadeResolve}},
    { path: 'games/by/decade/:decade/by/year/:year', component: GameGalleryComponent, resolve: { games: GamesByYearResolve}},
    { path: 'games/by/decade/:decade/by/year/:year/:page', component: GameGalleryComponent, resolve: { games: GamesByYearResolve}},
    { path: 'lists', component: ListsComponent },
    { path: 'lists/new', component: ListEditComponent, canActivate: [AuthGuard]},
    { path: 'lists/recent', component: ListsPageComponent, resolve: { lists: ListsByDateResolve}},
    { path: 'lists/recent/:page', component: ListsPageComponent, resolve: { lists: ListsByDateResolve}},
    { path: 'lists/popular', component: ListsPageComponent, resolve: { lists: ListsByPopularityResolve}},
    { path: 'lists/popular/:page', component: ListsPageComponent, resolve: { lists: ListsByPopularityResolve}},
    { path: 'lists/:id', component: ListDetailComponent},
    { path: 'lists/:id/edit', component: ListEditComponent, canActivate: [AuthGuard]},
    { path: 'reviews/popular', component: ReviewsPageComponent, resolve: { reviews: ReviewsByPopularityResolve}},
    { path: 'reviews/popular/:page', component: ReviewsPageComponent, resolve: { reviews: ReviewsByPopularityResolve}},
    { path: 'reviews/recent', component: ReviewsPageComponent, resolve: { reviews: ReviewsByDateResolve}},
    { path: 'reviews/recent/:page', component: ReviewsPageComponent, resolve: { reviews: ReviewsByDateResolve}},
    { path: 'reviews/game/:id/recent', component: ReviewsPageComponent, resolve: { reviews: GameReviewsByDateResolve}},    
    { path: 'reviews/game/:id/recent/:page', component: ReviewsPageComponent, resolve: { reviews: GameReviewsByDateResolve}}, 
    { path: 'reviews/game/:id/popular', component: ReviewsPageComponent, resolve: { reviews: GameReviewsByPopularityResolve}}, 
    { path: 'reviews/game/:id/popular/:page', component: ReviewsPageComponent, resolve: { reviews: GameReviewsByPopularityResolve}}, 
    { path: 'log', component: LogListComponent },
    { path: 'game-gallery', component: GameGalleryComponent },
    { path: 'game', component: GameComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    { path: 'search', component: SearchComponent},
    { path: 'gamers', component: UsersComponent},
    { path: ':username', component: UserComponent, children: [
        { path: '', component: ProfileComponent},
        { path: 'edit', component: ProfileEditComponent, canActivate: [AuthGuard]},
        { path: 'games', component: UserGameGalleryComponent},
        { path: 'log', component: LogListComponent},
        { path: 'lists', component: UserListsComponent},
        { path: 'lists/:page', component: UserListsComponent},
        { path: 'reviews', component: UserReviewsComponent},
        { path: 'reviews/:page', component: UserReviewsComponent},
        { path: 'backlog', component: BacklogComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {

}