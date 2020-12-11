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
 router: any;

  constructor(private firestore: AngularFirestore, private af: AngularFireStorage) { }

  ngOnInit(): void {
  }

  Add(institutionName, aps,years,location, qualificationName) {
    let id = this.firestore.createId();
    this.firestore.collection('Add').doc(id).set({
    institution: institutionName,
    aps: aps,
    years: years,
    location: location,
    qualification: qualificationName

  }).then(()=>{
    this.showmessage = true
    setTimeout(()=> this.showmessage = false, 3000);
    this.institutionName = '';
    this.aps = '';
    this.years = '';
    this.location = '';
    this.qualificationName = '';
  }).catch((error)=>{
    console.log(error)
  })
}
btnBack(){
  this.router.navigate("./home");
}


  

}
