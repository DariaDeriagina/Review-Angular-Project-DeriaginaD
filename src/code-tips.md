
Angular Study Guide For Test #1: Step By Step

1.	Open Up PHP Storm and start a new project.

2.	Click Angular CLI on the side and then change folder location and name. (Ex: /Users/chrisjamo/Documents/Review-Angular-Project). Make sure the two checkboxes are checked off. Click create button.

3.	This step is not mandatory but I will write it in anyway. In case you need to change from CSS to SCSS.
    Type: npm install schematics-scss-migrate (this will install all the packages).
    Type in terminal: npm run-script ng g schematics-scss-migrate:scss-migrate (it will then ask a question).
    Terminal will ask: Which stylesheet format are you migrating from? (With the arrow, go down one so that it will highlight scss, then click enter on that – might have to enter a second time).
    Terminal will ask: Which project do you want to migrate? (Type: Review-Angular-Project).

4.	Go to src, then app, then click on app.component.ts and change the title from ‘Review-Angular-Project’ to ‘Pet Management System’;

5.	Go to app.component.html and erase everything from inside it (Ex: Command A and delete).
    Type: <h2> {{title}}</h2>

6.	Once those have been created and packages have been installed, click terminal.
    Type: npm start (if you have to initialize your php storm for the first time).
    Type: ng serve (this will build to create your local host – http://localhost:4200/ ).

7.	Go to app.component.ts and type: ng g i Shared/Pet (This creates a folder called Shared and a subfolder called pet.ts).

8.	Go to package.json and put a comma beside “test”: “ng test”(,).
    Under “test” you type: “generateInterface”: “ng generate interface”

9.	Go to pet.ts. Go under the export interface Pet {
    type: id: number,
    name: string,
    breed: string,
    age: number,
    (In terminal, type: ng g c dog-list) (Then hit enter and that will create dog-list the folder with its subfolders).

10.	Go to dog-list.component.ts. Under the words export class DogListComponent {
     Type: dogList:Pet[]=[]
     Type: import {Pet} from ‘../Shared/pet’;
     Go back to dogList:Pet[]=[
     {id: 1, name: ‘Bruno’, breed: ‘Shitzhoo’, age: 10},
     Copy this line down 3 other times and change it up.
     {id: 2, name: ‘Max’, breed: ‘Apso’, age: 1},
     {id: 3, name: ‘Opti’, breed: ‘Terrier’, age: 7},
     {id: 4, name: ‘Dolly’, breed: ‘Pekangnese’, age: 4},
     ]
     }

11.	Go to dog-list.component.html and erase what is in it to put:
<div>
	<h2> Dog List </h2>
	<table>
	<thead>
	<th> Id </th>
	<th> Name </th>
	<th> Breed </th>
	<th> Age </th>
	</thead>
	</table>
	<tbody>
	<tr *ngFor=”let dog of dogList”>
	<td> {{dog.id}}</td>
	<td> {{dog.name}}</td>
	<td> {{dog.breed}}</td>
	<td> {{dog.age}}</td>
</tr>
	</tbody>
</div>

12.	Go to dog-list.component.ts and go to the part under @Component where it says imports: [].
     Type: imports: [NgForOf, JsonPipe],
     At the top for import, make sure to import {JsonPipe, NgForOf} from ‘@angular/common’;

13.	Go to app.component.html and under the <h2> {{title}} </h2> you will:
     Type: <app-dog-list> </app-dog-list>

14.	Go to app.component.ts and inside @Component in the imports: [RouterOutlet] area:
     Type: imports: [RouterOutlet,  DogListComponent],

15.	Go to dog-list.component.css:
     Type: table {
     width: 70%;
     border-collapse: collapse;
     }

td, th {
border: 1px solid black;
}

16.	Go to terminal:
     Type: ng g c dog-detail (it will then create the folder called dog-detail with those sub folder components).

17.	Click on the dog-detail folder and click dog-detail.component.ts and go under the export class DogDetailComponent { then type:
     @Input() dog : Pet;
     }

18.	Go to dog-detail.component.html and erase whatever is in it. Then put:
<div *ngIf=”dog”>
<h2> Dog Detail </h2>
<p> <strong> Id </strong> {{dog.id}}</p>
<p> <strong> name </strong> {{dog.name}}</p>
<p> <strong> Breed </strong> {{dog.breed}}</p>
<p> <strong> Age </strong> {{dog.age}}</p>
</div>

19.	Go to dog-detail.component.ts and under @Component where imports are:
     imports: [NgIf],
     Then at the regular imports at the top, type: import {NgIf} from ‘@angular/common’;

20.	Go to dog-list.component.html and where the <tr> is:
     Type: <tr *ngFor=”let dog of dogList” (click)=”selectDog(dog)”>
     Under </table>:
     Type: <app-dog-detail [dog]=”selectedDog”></app-dog-detail>
     You’ll have some red errors for now.

21.	Go to dog-list.component.ts and inside the @Component area where imports is:
     Type: imports: [NgForOf, JsonPipe, DogDigitalComponent],
     All the way at the bottom under the part that says dogList:Pet[]=[
     {id: 1, name: ‘Bruno’, breed: ‘Shitzhoo’, age: 10},
     Copy this line down 3 other times and change it up.
     {id: 2, name: ‘Max’, breed: ‘Apso’, age: 1},
     {id: 3, name: ‘Opti’, breed: ‘Terrier’, age: 7},
     {id: 4, name: ‘Dolly’, breed: ‘Pekangnese’, age: 4},
     ]
     Type:
     selectedDog? : Pet;
     Then type a few spaces below that:
     selectDog(dog:Pet){
     this.selectedDog = dog;
     }
     }

22.	Go to dog-detail.component.html where it says <div *ngIf=”dog”>
     Type: <div *ngIf=”dog” class=”detail”>

23.	Go to dog-detail.component.css and type:
     .detail{
     border: 1px solid black;
     width: 30%;
     text-align: center;
     }

24.	Go to terminal and type: ng g s Services/dog (This will make a folder called Services with two sub-folders called dog.service.spec.ts and dog.service.ts).

25.	Right-click on the folder called “app” and click new Directory and name it data/mock-dog.ts, press enter. Say yes create file. Basically what happens is under the folder called app, a new folder named data is formed with a sub-folder called mock-dog.ts.

26.	Click on dog-list.component.ts and Highlight under export class DogListComponent { this:
     dogList:Pet[]=[
     {id: 1, name: ‘Bruno’, breed: ‘Shitzhoo’, age: 10},
     {id: 2, name: ‘Max’, breed: ‘Apso, age: 1},
     {id: 3, name: ‘Opti’, breed: ‘Terrier’, age: 7},
     {id: 4, name: ‘Dolly’, breed: ‘Pekangnese’, age: 4}
     ]

After Highlighting, make sure you Cut, go to mock-dog.ts and Paste it in there.

This is what you are going to not only Paste but Edit as well:
export const dogList:Pet[]=[
{id: 1, name: ‘Bruno’, breed: ‘Shitzhoo’, age: 10},
{id: 2, name: ‘Max’, breed: ‘Apso, age: 1},
{id: 3, name: ‘Opti’, breed: ‘Terrier’, age: 7},
{id: 4, name: ‘Dolly’, breed: ‘Pekangnese’, age: 4}
]

27.	Now go back to dog-list.component.ts:
     Under the export class Dog List Component { :
     Type: dogList:Pet[]=[];

28.	Now go to dog.service.ts:
     Under the export class DogService { :
     Type: private dogs:Pet[]=[]
     •	import {Pet} from ‘../Shared/pet’;

Under the constructor() { }
Type: getDog():Observable<Pet[]>{
return of(dogList)
•	Go to your import at the top and fix it to look like this: import {Observable, of} from ‘rxjs’;

29.	Now go to dog-list.component.ts:
     Under dogList:Pet[]=[]; you will:
     Type: constructor(private dogService: DogService) {
     }

Under that you will type:
ngOnInit(){
}

Then go back up up to the top of this page to export class DogListComponent. You will type:
export class DogListComponent implements OnInit{
•	import this at the top, it should look like: import {Component, OnInit} from ‘@angular/core’;

Then go back down to ngOnInit(){ :
Type: ngOnInit() {
this.dogService.getDog().subscribe({
next: (data:Pet[]) => this.dogList = data,
error:err => console.error(“No Fetching”),
complete: () => console.log(“Complete”)
})
}
•	Add the imports when they turn red.

30.	Go to main.ts page:
     Type: bootstrapApplication(AppComponent, {
     providers: [providedRouter(routes)]
     })
     •	Go to imports at the top and fix:
     import {provideRouter, Routes} from ‘@angular/router’;
     import {routes} from ‘./app/app.routes;

While still in the main.ts page, go above the bootstrapApplication(AppComponent, { and type:
const routes: Routes=[
{path: ‘’, redirectTo: ‘/dogs’, pathMatch: “full”},
{path: ‘dogs’, component: DogListComponent},
{path: ‘dogs/:id’, component: DogDetailComponent}
]

31.	Go to dog-list.component.html and remove the (click)=”selectDog(dog)” from the <tr>.

In the <tr> type:
<tr *ngFor=”let dog of dogList” [routerLink]=”[‘/dogs’, dog.id]”>

Remove the line below </table>:
<app-dog-detail [dog]=”selectDog”></app-dog-detail> (REMOVE THIS).

32.	In dog-list.component.ts, go to where @Component is and go to imports. Then type:
     imports: [NgForOf, JsonPipe, DogDetailComponent, RouterLink], (BY DOING THIS, IT WILL IMPORT THE ROUTER LINK INSIDE THE DOG-LIST.COMPONENT.HTML).

33.	Go to app.component.html and REMOVE the line:
     <app-dog-list> </app-dog-list>
     Replace with:
     <router-outlet></router-outlet>

34.	Now go to dog-detail.component.ts :
     Under @Component ({
     selector: ‘app-dog-detail’,
     standalone: true,
     imports: [NgIf],
     templateURL: ‘./dog-detail.component.html’.
     styleURL: ‘./dog-detail.component.css’
     })
     Type:
     export class DogDetailComponent implements OnInit{
     // Declare Three Variables
     dog:Pet | undefined;
     dogList:Pet[]=[]
     currentIndex:number=0

Right under these, type:
constructor(
private route: ActivatedRoute,
private router: Router,		*(IMPORT THIS BY CLICKING IT).*
private dogService: DogService
) {

}

ngOnInit(){
this.dogService.getDog().subscribe(dogs=>{
this.dogList = dogs

	this.route.paramMap.subscribe(params=>{
	const id = Number(params.get(‘id’));
	if(id){
	this.currentIndex=this.dogList.findIndex(dog=>dog, id===id);
	this.dog=this.dogList[this.currentIndex]

}
})
})
}

COMMENT OUT: // @Input() dog? :Pet;

35.	Go to app.component.html at the very top. Type:
<nav>
	<a routerLink=”/dogs” routerLinkActive=”active”>Dog List</a>
</nav>

36.	Then go to app.component.ts and in the @Component section, go to imports and type:
     Imports: [RouterOutlet, DogListComponent, RouterLink, RouterLinkActive],

Go to terminal and type:
Ng g c PageNotFound (This will create packages and a folder with the same name).
Ng g c ModifyDog (This will create packages and a folder with the same name).

37.	Go to main.ts and where:
     const routes: Routes=[
     {path: ‘’, redirectTo: ‘/dogs’, pathMatch: “full”},
     {path: ‘dogs’, component: DogListComponent},
     {path: ‘dogs/:id’, component: DogDetailComponent},
     // Add another 2 lines
     {path: ‘modify-dog’, component: ModifyDogComponent},
     {path: ‘**’, component: PageNotFoundComponent}
     ]

38.	Go to app.component.html.
     Type Under: <nav>
     <a routerLink=”/dogs” routerLinkActive=”active”> Dog List </a>
     <a routerLink=”page-not-found” routerLinkActive=”active”> Modify Dog </a>
     </nav>

39.	Now go to page-not-found.component.html and type:
<p>This page is under construction. To finish this we need Forms, because this is based CRUD. See you next week.</p>

40.	Now go back to app.component.html and copy the lines:
<nav>
<a routerLink=”/dogs” routerLinkActive=”active”> Dog List </a>
</nav> 
Paste this into page-not-found.component.html below the page is under construction paragraph. It should look like this: 
<p>This page is under construction. To finish this we need Forms, because this is based CRUD. See you next week.</p>

<nav>
<a routerLink=”/dogs” routerLinkActive=”active”> Dog List </a>
</nav> 

41.	Now go to dog-detail.component.html and put a <nav> in there. It should look like this at the end:
<div *ngIf=”dog” class=”detail”>
<h2> Dog Detail </h2>
<p> <strong> Id </strong> {{dog.id}}</p>
<p> <strong> name </strong> {{dog.name}}</p>
<p> <strong> Breed </strong> {{dog.breed}}</p>
<p> <strong> Age </strong> {{dog.age}}</p>
<nav>
	<a routerLink=”/dogs” routerLinkActive=”active”> Dog List </a>
</nav>
</div>
























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
