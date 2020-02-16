import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { AlbumsComponent } from "./albums/albums.component";
import { PhotosComponent } from "./photos/photos.component";

const routes: Routes = [
  { path: "", component: UsersComponent },
  { path: "albums/:userId", component: AlbumsComponent },
  { path: "photos/:albumId", component: PhotosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
