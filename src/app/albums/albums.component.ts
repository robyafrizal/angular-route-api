import { Component, OnInit } from "@angular/core";
import { PhotosService } from "../photos.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.css"]
})
export class AlbumsComponent implements OnInit {
  albums;
  userId;
  constructor(
    private photosService: PhotosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.params.userId;
    this.albums = this.photosService.getAlbums(this.userId);
  }
}
