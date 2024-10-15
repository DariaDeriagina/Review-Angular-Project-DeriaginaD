import {Component, Input} from '@angular/core';
import {Pet} from '../Shared/pet';

@Component({
  selector: 'app-dog-detail',
  standalone: true,
  imports: [],
  templateUrl: './dog-detail.component.html',
  styleUrl: './dog-detail.component.css'
})
export class DogDetailComponent {
  @Input dog?:Pet;

}
