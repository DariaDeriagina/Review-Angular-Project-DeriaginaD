import { Component } from '@angular/core';
import {Pet} from '../Shared/pet';
import {JsonPipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-dog-list',
  standalone: true,
  imports: [NgForOf, JsonPipe],
  templateUrl: './dog-list.component.html',
  styleUrl: './dog-list.component.css'
})
export class DogListComponent {
  dogList:Pet[]=[
    {id:1, name: 'Bruno', breed: 'Shitzhoo', age: 10},
    {id:2, name: 'Max', breed: 'Apso', age: 1},
    {id:3, name: 'Opti', breed: 'Terrier', age: 7},
    {id:4, name: 'Dolly', breed: 'Pikangnese', age: 4}
  ];


}
