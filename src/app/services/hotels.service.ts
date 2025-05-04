import {inject, Injectable} from '@angular/core';
import {addDoc, collection, collectionData, Firestore} from '@angular/fire/firestore';
import {Flight} from '../models/flight';
import {Observable} from 'rxjs';
import {Hotel} from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  firestore: Firestore = inject(Firestore);

  constructor() { }

  getAllHotels(): Observable<Hotel[]> {
    const hotelsRef = collection(this.firestore, 'hotels');
    return collectionData(hotelsRef, {idField: 'id'}) as Observable<Hotel[]>;
  }
}
