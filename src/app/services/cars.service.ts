import {inject, Injectable} from '@angular/core';
import {addDoc, collection, collectionData, Firestore} from '@angular/fire/firestore';
import {Flight} from '../models/flight';
import {Observable} from 'rxjs';
import {Car} from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  firestore: Firestore = inject(Firestore);

  constructor() { }

  getAllCars(): Observable<Car[]> {
    const carsRef = collection(this.firestore, 'cars');
    return collectionData(carsRef, {idField: 'id'}) as Observable<Car[]>;
  }
}
