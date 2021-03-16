import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {
  uploadMessage: boolean;
  title;
  description;
  type;
  image;
  link;
  closingDate;
  studyField;
  showmessage: boolean;

  op;

  img

  hideInput:boolean =false;

  constructor(
    private af: AngularFireStorage,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {}
  path: string;
  
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

  Add(title, description, type, link, closingDate, studyField) {
    console.log(this.img)

    let id = this.firestore.createId();
    this.firestore
      .collection('timeline')
      .doc(id)
      .set({
        title: title,
        description: description,
        type: type,
        link: link,
        closingDate: closingDate,
        studyField: studyField,
        img: this.img,
      
      })
      .then(() => {
        this.showmessage = true;
        setTimeout(() => (this.showmessage = false), 3000);
        this.title = '';
        this.description = '';
        this.type = '';
        this.image = '';
        this.link = '';
        this.closingDate = '';
        this.studyField = '';
      })
      .catch((error) => {
        console.log(error);
      });


      
  }

  add() {
    console.log(this.op);
  }

  Change(){
   console.log(this.type)
  }
}
