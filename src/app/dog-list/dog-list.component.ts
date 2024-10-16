import {Component, OnInit} from '@angular/core';
import {Pet} from '../Shared/pet';
import {JsonPipe, NgForOf} from '@angular/common';
import {DogDetailComponent} from '../dog-detail/dog-detail.component';
import {DogService} from '../Services/dog.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-dog-list',
  standalone: true,
  imports: [NgForOf, JsonPipe, DogDetailComponent, RouterLink],
  templateUrl: './dog-list.component.html',
  styleUrl: './dog-list.component.css'
})
export class DogListComponent implements OnInit {

  dogList: Pet[] = [];

  constructor(private dogService: DogService) {
  }

  ngOnInit() {
    this.dogService.getDog().subscribe({
      next: (data: Pet[]) => this.dogList = data,
      error: err => console.error("No fetching"),
      complete: () => console.log("Complete")
    })
  }

  selectedDog?: Pet;

  selectDog(dog: Pet) {
    this.selectedDog = dog;
  }
}

