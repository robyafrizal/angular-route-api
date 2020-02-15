import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"]
})
export class PhotosComponent implements OnInit {
  photos: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    let resp = this.http.get("https://jsonplaceholder.typicode.com/photos");
    resp.subscribe(data => (this.photos = data));
  }
}
