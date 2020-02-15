import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.css"]
})
export class AlbumsComponent implements OnInit {
  albums: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    let resp = this.http.get("https://jsonplaceholder.typicode.com/albums");
    resp.subscribe(data => (this.albums = data));
  }
}
