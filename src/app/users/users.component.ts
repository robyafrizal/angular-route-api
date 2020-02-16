import { Component, OnInit } from "@angular/core";
import { PhotosService } from "../photos.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users;
  constructor(private photosService: PhotosService) {}

  ngOnInit() {
    this.users = this.photosService.getUsers();
  }
}
