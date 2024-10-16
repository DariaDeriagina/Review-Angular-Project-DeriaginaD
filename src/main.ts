import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import {DogListComponent} from './app/dog-list/dog-list.component';
import {DogDetailComponent} from './app/dog-detail/dog-detail.component';
import {ModifyDogComponent} from './app/modify-dog/modify-dog.component';
import {PageNotFoundComponent} from './app/page-not-found/page-not-found.component';

const routes: Routes=[
  {path:'', redirectTo: '/dogs', pathMatch: 'full'},
  {path: 'dogs', component: DogListComponent },
  {path: 'dogs/:id', component: DogDetailComponent},
  {path: 'modify-dog', component: ModifyDogComponent},
  {path: '**', component: PageNotFoundComponent}
  ]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
})


