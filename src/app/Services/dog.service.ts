import { Injectable } from '@angular/core';
import {Pet} from '../Shared/pet';
import {dogList} from '../data/mock-dogs';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

private dogs:Pet[]=[];
  constructor() { }

  getDog():Observable<Pet[]>{
    return of(dogList)
  }
}
