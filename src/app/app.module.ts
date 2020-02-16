import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AlbumsComponent } from "./albums/albums.component";
import { PhotosComponent } from './photos/photos.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [AppComponent, AlbumsComponent, PhotosComponent, UsersComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
