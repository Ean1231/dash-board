import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'


@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  constructor(private firestore: AngularFirestore) { }

  submitData(institutionName, aps,years,location, qualificationName){
    let id = this.firestore.createId();
    this.firestore.collection('Add').doc(id).set({
    institution: institutionName,
    qualification: qualificationName,
    aps: aps,
    years: years,
    locations: location
  })
}
}
