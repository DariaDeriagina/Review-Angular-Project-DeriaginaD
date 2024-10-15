import { Component } from '@angular/core';
import {Pet} from '../Shared/pet';
import {JsonPipe, NgForOf} from '@angular/common';
import {DogDetailComponent} from '../dog-detail/dog-detail.component';

@Component({
  selector: 'app-dog-list',
  standalone: true,
  imports: [NgForOf, JsonPipe, DogDetailComponent],
  templateUrl: './dog-list.component.html',
  styleUrl: './dog-list.component.css'
})
export class DogListComponent {

dogList:Pet[]=[];
  selectedDog? :Pet;

  selectDog(dog:Pet){
    this.selectedDog=dog;
  }


}
