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
19. Go to dig-detail.component.html
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

22. Go dog-list.component.ts and add DogDetailComponent
    imports: [NgForOf, JsonPipe, DogDetailComponent],

also add this
selectedDog? :Pet;

selectDog(dog:Pet){
this.selectedDog=dog;
}
23. In dog-detail.component.html
    add class="detail"

24. Go to dog-detailed.component. css
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






















 




