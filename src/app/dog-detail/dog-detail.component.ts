import {Component, Input, OnInit} from '@angular/core';
import {Pet} from '../Shared/pet';
import {NgIf} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {DogService} from '../Services/dog.service';

@Component({
  selector: 'app-dog-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './dog-detail.component.html',
  styleUrl: './dog-detail.component.css'
})
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

