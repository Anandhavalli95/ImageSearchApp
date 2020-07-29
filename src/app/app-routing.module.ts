import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { ImageListComponent } from './image-list/image-list.component';

const routes: Routes = [
  { path: 'search', component: ImageListComponent },
  { path: 'favorites', component: FavoritesComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
