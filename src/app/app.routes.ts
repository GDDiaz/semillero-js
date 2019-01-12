import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostShowComponent } from './components/post-show/post-show.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'show', component: PostShowComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
