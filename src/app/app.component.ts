import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {DogListComponent} from './dog-list/dog-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  //in imports add DogListComponent
  imports: [RouterOutlet, DogListComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pet Management System';
}
