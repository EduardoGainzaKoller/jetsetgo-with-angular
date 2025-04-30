import {inject, Injectable} from '@angular/core';
import {addDoc, collection, collectionData, Firestore} from '@angular/fire/firestore';
import {Flight} from '../models/flight';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  firestore: Firestore = inject(Firestore);

  constructor() { }

  addFlight(flight: Flight) {
    const flightRef = collection(this.firestore, 'flights');
    return addDoc(flightRef, flight);
  }

  getAllFlights(): Observable<Flight[]> {
    const flightsRef = collection(this.firestore, 'flights');
    return collectionData(flightsRef, {idField: 'id'}) as Observable<Flight[]>;
  }
}
