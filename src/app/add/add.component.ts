import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import  { AngularFireStorage } from '@angular/fire/storage'



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
showmessage :boolean;
institutionName;
aps;
years;
location;
qualificationName;
description;
router: any;

  constructor(private firestore: AngularFirestore, private af: AngularFireStorage) { }

  ngOnInit(): void {
  }

  Add(institutionName, aps,years,qualificationName,location,description ) {
    let id = this.firestore.createId();
    this.firestore.collection('Add').doc(id).set({
    institution: institutionName,
    aps: aps,
    years: years,
    qualification: qualificationName,
    location: location,
    description:description

  }).then(()=>{
    this.showmessage = true
    setTimeout(()=> this.showmessage = false, 3000);
    this.institutionName = '';
    this.aps = '';
    this.years = '';
    this.location = '';
    this.qualificationName = '';
    this.description = '';
  }).catch((error)=>{
    console.log(error)
  })
}
btnBack(){
  this.router.navigate("./home");
}




}
