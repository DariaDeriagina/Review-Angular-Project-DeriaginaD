Review Angular Project:


1. git init
2. npm install schematics-scss-migrate
   Always pick scss
3. npm run-script ng g schematics-scss-migrate:scss-migrate
4. Go to app.component.ts and change Title for “Pet Management System”
5. go to app-component. Html and delete everything
   Inside we write <h2> {{tittle}} </h2>
6. Lets create a new component
   Go to terminal and type ng serve
   Run the serve to check what u see in your browser
7. ng g i Shared/Pet
8. Go to pakage.json and type "generateInterface" : "ng generate interface", after "test": "ng test"
9. Go to Shared/pet.ts and write inside:

export interface Pet {
id: number,
name: string,
breed: string,
age: number
}
10. Generate component in terminal ng g c dog-list
11. go to dog-list.component.ts and add there
    export class DogListComponent {
    dogList:Pet[]=[
    {id:1, name: 'Bruno', breed: 'Shitzhoo', age: 10},
    {id:2, name: 'Max', breed: 'Apso', age: 1},
    {id:3, name: 'Opti', breed: 'Terrier', age: 7},
    {id:4, name: 'Dolly', breed: 'Pikangnese', age: 4}
    ];

12. Go to go-list.component.html delete what we have there and paste next:

<div>
  <h2>Dog List</h2>
  <table>
    <thead>
      <th>id</th>
      <th>Name</th>
      <th>Breed</th>
      <th>Age</th>
    </thead>
<tbody>
      <tr *ngFor="let dog of dogList">
        <td> {{dog.id}}</td>
        <td> {{dog.name}}</td>
        <td> {{dog.breed}}</td>
        <td> {{dog.age}}</td>
    </tbody>
  </table>
</div>

13. Go to dog-list.components.ts
    and in imports: [NgForOf, JsonPipe],

also remember about import {JsonPipe, NgForOf} from '@angular/common';
14. Go back to app-component.html and type
    <app-dog-list></app-dog-list>

15. Go to app-component.ts and in imports add DogListComponent
    imports: [RouterOutlet, DogListComponent],
16. Go to dog-list.component.css and add styles
    table {
    width: 70%;
    border-collapse: collapse;
    }
    td, th {
    border: 1px solid black;
    }

17. Create new component
    Ng g c dog-detail
18. Go to dog-detail.component.ts
    export class DogDetailComponent {
    @Input() dog? :Pet;

}
19. Go to dog-detail.component.html
<div *ngIf="dog">
<h2>Dog detail</h2>
<p><strong></strong>{{dog.id}}</p>
<p><strong></strong>{{dog.name}}</p>
<p><strong></strong>{{dog.bread}}</p>
<p><strong></strong>{{dog.age}}</p>
</div>
20. go to Go to dig-detail.component.ts
imports: [NgIf],

21. Go to dog list component html and add click
<tr *ngFor="let dog of dogList" (click)="selectDog(dog)">

also add:
<app-dog-detail [dog]="selectedDog"></app-dog-detail>

22. Go dog-list.component.ts and import DogDetailComponent
    imports: [NgForOf, JsonPipe, DogDetailComponent],

also add this
selectedDog? :Pet;

selectDog(dog:Pet){
this.selectedDog=dog;
}
23. In dog-detail.component.html
    add class="detail"

24. Go to dog-detail.component. css
    .detail {
    border: 1px solid black;
    width: 30%;
    text-align: center;
    }

24. 1. Create new ng g s Services/dog

25.  Click on app and make a new directory data/mock-dogs.ts
26. Go to dog-list.component.ts and CUT this one

dogList:Pet[]=[
{id:1, name: 'Bruno', breed: 'Shitzhoo', age: 10},
{id:2, name: 'Max', breed: 'Apso', age: 1},
{id:3, name: 'Opti', breed: 'Terrier', age: 7},
{id:4, name: 'Dolly', breed: 'Pikangnese', age: 4}
];
and paste it to mock-dogs.ts

change to next export const dogList:Pet[]=[
{id:1, name: 'Bruno', breed: 'Shitzhoo', age: 10},
{id:2, name: 'Max', breed: 'Apso', age: 1},
{id:3, name: 'Opti', breed: 'Terrier', age: 7},
{id:4, name: 'Dolly', breed: 'Pikangnese', age: 4}
];

27. Go to dog-list.component.ts
    and add this one
    dogList:Pet[]=[];

28. Go to dog.service.ts
    and add
    private dogs:Pet[]=[];

29. Now we gonna use observables to get our data back:
    Go to dog.service.ts
    getDog():Observable<Pet[]>{
    return of(dogList)
    }
    ! don’t forget: import {Observable, of} from 'rxjs';

30. Let’s inject dependences by creating a constructor:
    dog-list.component.ts
    constructor(private dogService: DogService) {
    }
31. Fetch the data I will use
    dog-list.component.ts:
    ngOnInit(){
    }


Then still in dog.service.ts: add implements OnInit{

So it will look like export class DogListComponent implements OnInit{
Then below add this:


32. Go to dog-list.component.ts and add next:

ngOnInit(){
this.dogService.getDog().subscribe({
next: (data:Pet[]) => this.dogList=data,
error:err=> console.error("No fetching"),
complete: () => console.log("Complete")
})

33. Now we have provide routers
    Main.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {routes} from './app/app.routes';
import {provideRouter} from '@angular/router';

bootstrapApplication(AppComponent, {
providers: [provideRouter(routes)]
})

34. set uo souts. 2 components for now, as many as components
    Main.ts
    const routes: Routes=[
    {path:'', redirectTo: '/dogs', pathMatch: 'full'},
    {path: 'dogs', component: DogListComponent },
    {path: 'dogs/:id', component: DogDetailComponent}
    ]

35. Now we don’t need clicking anymore and we replace clicking with Router, so we will remove the click:
    Go to dog-list.component.html and remove there:  (click)="selectDog(dog)">
    And add instead of that, this one:
     <tr *ngFor="let dog of dogList" [routerLink]="['/dogs', dog.id]">
        <td> {{dog.id}}</td>
        <td> {{dog.name}}</td>
        <td> {{dog.breed}}</td>
        <td> {{dog.age}}</td>
</tr>



and delete <app-dog-detail [dog]="selectedDog"></app-dog-detail>

36. app.component.html
    Delete this <app-dog-list></app-dog-list>


37. CREATE SERVER AND ROUTER TO MY DETAIL COMPONENT
    Dog-detail.component.ts

export class DogDetailComponent implements OnInit{
// I need variable for a do to be displayed, for whole array....
// declare three variables

dog:Pet | undefined;
dogList:Pet[]=[]
currentIndex:number=0;

constructor(
private route: ActivatedRoute,
private router: Router,
private dogService:DogService
) {
}

ngOnInit(){
this.dogService.getDog().subscribe(dogs=>{
this.dogList = dogs

      this.route.paramMap.subscribe(params=>{
        const id = Number(params.get('id'));
        if(id){
          this.currentIndex=this.dogList.findIndex(dog=>dog.id===id);
          this.dog=this.dogList[this.currentIndex];
        }
      })
    })

}



// @Input() dog? :Pet;

}

38. HOW we move from one page to another page? We have to navigate:

now we fo to app.component.html


<nav>
  <a routerLink="/dogs" routerLinkActive="active"> Dog List</a>
<a routerLink="page-not-found" routerLinkActive="active"> Modify Dog</a>
</nav>

<h2> {{title}}</h2>

<router-outlet></router-outlet>


DON’T FORGET IN app.component. ts      add:
imports: [RouterOutlet, DogListComponent, RouterLink, RouterLinkActive],

39. Create NOT FOUND PAGE
    Open the terminal:
    ng g c PageNotFoFound
    And:
    ng g c ModifyDog

40. Go to main.ts and link these created pages:

{path: 'modify-dog', component: ModifyDogComponent},
{path: '**', component: PageNotFoundComponent}

go to app.component.html

<a routerLink="/dogs" routerLinkActive="active"> Dog List</a>
<a routerLink="page-not-found" routerLinkActive="active"> Modify Dog</a>

page-not-found.html
<p>This page is under construction. To finish this we need Forms,
  because this is based CRUD. See you next week.</p>

<nav>
  <a routerLink="/dogs" routerLinkActive="active"> Dog List</a>
</nav>

dog-detail.component.html
<nav>
  <a routerLink="/dogs" routerLinkActive="active"> Dog List</a>
</nav>
