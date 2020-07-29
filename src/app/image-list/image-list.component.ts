import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  searchQuery:string;
  images: any[];
  searching: boolean = false;
  imagesAvailable: boolean = false;
  constructor(private imageService: ImagesService) { }

  ngOnInit(): void {
  }
  getImageSuccess(data) {
    this.imagesAvailable = true;
    this.images = data['hits'];
  }
  debouncedSearch = (fn, delay) => {
    let timerId;
    return function(query) {
      let context = this;
      let args = arguments;
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        fn.apply(context, args);
      }, delay)
    }
  }
  searchImages(query: string) {
    if (query === '') {
      return;
    }
    this.searching = true;
    this.imageService.getImages(query).subscribe(
      data => this.getImageSuccess(data),
      error => console.log('Error Fetching Images', error),
      () => { this.searching = false}
    )
  }
  improvedSearchFn = this.debouncedSearch(this.searchImages, 300);
  addToFavorites = (imageURL) => {
    let favList = JSON.parse(localStorage.getItem("favorites")).concat(imageURL);
    console.log(favList);
    localStorage.setItem("favorites", JSON.stringify(favList));
  }

}
