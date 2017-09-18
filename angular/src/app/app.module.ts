import { GamesByYearResolve } from './gamesbyyear.resolve';
import { GameReviewsByPopularityResolve } from './gamereviewsbypopularity.resolve';
import { GameReviewsByDateResolve } from './gamereviewsbydate.resolve';
import { ListsByDateResolve } from './listsbydate.resolve';
import { ListsByPopularityResolve } from './listsbypopularity.resolve';
import { ReviewsByPopularityResolve } from './reviewsbypopularity.resolve';
import { ReviewsByDateResolve } from './reviewsbydate.resolve';
import { GamesByUserResolve } from './gamesbyuser.resolve';
import { GamesByDecadeResolve } from './gamesbydecade.resolve';
import { ValidateService } from './validate.service';
import { AuthService } from './auth.service';
import { DataService } from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DndModule } from 'ng2-dnd';
import { MyDatePickerModule } from 'mydatepicker';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PopularGamesComponent } from './popular-games/popular-games.component';
import { LandingComponent } from './landing/landing.component';
import { JustReviewedComponent } from './just-reviewed/just-reviewed.component';
import { ReviewComponent } from './review/review.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { ListsComponent } from './lists/lists.component';
import { GamesNavComponent } from './games/games-nav/games-nav.component';
import { StaffPicksComponent } from './staff-picks/staff-picks.component';
import { PopularGamersComponent } from './popular-gamers/popular-gamers.component';
import { LargeListComponent } from './large-list/large-list.component';
import { LongListComponent } from './long-list/long-list.component';
import { UserComponent } from './user/user.component';
import { UserNavComponent } from './user/user-nav/user-nav.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { UserListItemComponent } from './user/user-list/user-list-item/user-list-item.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { GameComponent } from './game/game.component';
import { LogListComponent } from './log-list/log-list.component';
import { GameGalleryComponent } from './game-gallery/game-gallery.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ListsListComponent } from './lists-list/lists-list.component';
import { LongListsListComponent } from './long-lists-list/long-lists-list.component';
import { ListsFeatureComponent } from './lists-feature/lists-feature.component';
import { GameReviewListComponent } from './game-review-list/game-review-list.component';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';
import { GameReviewComponent } from './game-review/game-review.component';
import { DropdownDirective } from './dropdown.directive';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReviewEditComponent } from './review-edit/review-edit.component';
import { ListEditComponent } from './list-edit/list-edit.component';
import { SearchComponent } from './search/search.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserListsComponent } from './user/user-lists/user-lists.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { ProfileEditComponent } from './user/profile-edit/profile-edit.component';
import { AvatarComponent } from './user/avatar/avatar.component';
import { LogListItemComponent } from './log-list/log-list-item/log-list-item.component';
import { UserFeatureComponent } from './user/user-feature/user-feature.component';
import { UserFeatureItemComponent } from './user/user-feature/user-feature-item/user-feature-item.component';
import { UserListMiniComponent } from './user/user-list-mini/user-list-mini.component';
import { UserListMiniItemComponent } from './user/user-list-mini/user-list-mini-item/user-list-mini-item.component';
import { UserGameGalleryComponent } from './user/user-game-gallery/user-game-gallery.component';
import { BacklogComponent } from './user/backlog/backlog.component';
import { ReviewsPageComponent } from './reviews-page/reviews-page.component';
import { ListsPageComponent } from './lists-page/lists-page.component';
import { RatingsGraphComponent } from './ratings-graph/ratings-graph.component';
import { UserReviewsComponent } from './user/user-reviews/user-reviews.component';
import { YearNavComponent } from './game-gallery/year-nav/year-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopularGamesComponent,
    LandingComponent,
    JustReviewedComponent,
    ReviewComponent,
    ListComponent,
    HomeComponent,
    GamesComponent,
    ListsComponent,
    GamesNavComponent,
    StaffPicksComponent,
    PopularGamersComponent,
    LargeListComponent,
    LongListComponent,
    UserComponent,
    UserNavComponent,
    UserInfoComponent,
    UserListItemComponent,
    UserListComponent,
    GameComponent,
    LogListComponent,
    GameGalleryComponent,
    ReviewListComponent,
    ListsListComponent,
    LongListsListComponent,
    ListsFeatureComponent,
    GameReviewListComponent,
    GameDashboardComponent,
    GameReviewComponent,
    DropdownDirective,
    ListDetailComponent,
    StarRatingComponent,
    RegisterComponent,
    LoginComponent,
    ReviewEditComponent,
    ListEditComponent,
    SearchComponent,
    UsersComponent,
    ProfileComponent,
    UserListsComponent,
    DatepickerComponent,
    ReviewDetailComponent,
    ProfileEditComponent,
    AvatarComponent,
    LogListItemComponent,
    UserFeatureComponent,
    UserFeatureItemComponent,
    UserListMiniComponent,
    UserListMiniItemComponent,
    UserGameGalleryComponent,
    BacklogComponent,
    ReviewsPageComponent,
    ListsPageComponent,
    RatingsGraphComponent,
    UserReviewsComponent,
    YearNavComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    MyDatePickerModule,
    NgxMyDatePickerModule.forRoot(),
    DndModule.forRoot()
  ],
  providers: [DataService, AuthService, ValidateService, 
              GamesByDecadeResolve, GamesByUserResolve,
              ReviewsByDateResolve, ReviewsByPopularityResolve,
              ListsByPopularityResolve, ListsByDateResolve,
              GameReviewsByDateResolve, GameReviewsByPopularityResolve,
              GamesByYearResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
