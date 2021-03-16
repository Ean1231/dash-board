import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import  { AngularFireStorage } from '@angular/fire/storage'
import Swal from 'sweetalert2'


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
website;
qualificationName;
description;
router: any;
img
path: string;


  constructor(private firestore: AngularFirestore, private af: AngularFireStorage, ) { }

  ngOnInit(): void {
  }
  validateWeb(){
    var pattern = new RegExp(/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/); // fragment locator
    //console.log(pattern.test(this.website))


  if(pattern.test(this.website)) {
    Swal.fire({
      icon: 'success',
      title: 'Congrats...',
      text: 'Website saved successfully!',
      footer: '<a href>Good Work</a>'
    })
  }
  else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>'
    })
  }
    
    
  }



  Add(institutionName, aps,years,qualificationName,location,description, website, img ) {
    let id = this.firestore.createId();
    this.firestore.collection('Add').doc(id).set({
    institution: institutionName,
    aps: aps,
    years: years,
    qualification: qualificationName,
    location: location,
    description:description,
    website: website,
    img: img

  }).then(()=>{
    this.showmessage = true
    setTimeout(()=> this.showmessage = false, 2000);
    this.institutionName = '';
    this.aps = '';
    this.years = '';
    this.location = '';
    this.qualificationName = '';
    this.description = '';
    this.website = "";
  }).catch((error)=>{
    console.log(error)
  })
}
btnBack(){
  this.router.navigate("./home");
}

upload($event) {
  this.path = $event.target.files[0];
}

getImage(event) {
  let reader = new FileReader(); // HTML5 FileReader API
  let file = event.target.files[0];
  if (event.target.files && event.target.files[0]) {
    reader.readAsDataURL(file);

    // When file uploads set it to file formcontrol
    reader.onload = () => {
      this.img = reader.result;
      
      
    };

 
    // ChangeDetectorRef since file is loading outside the zone
    
  }
}


}
