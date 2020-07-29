import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  images: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.images = JSON.parse(localStorage.getItem('favorites'));
    console.log(JSON.parse(localStorage.getItem('favorites')), localStorage.getItem('favorites'));
  }

}
