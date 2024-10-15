import { Injectable } from '@angular/core';
import {Pet} from '../Shared/pet';

@Injectable({
  providedIn: 'root'
})
export class DogService {

private dogs:Pet[]=[];
  constructor() { }
}
