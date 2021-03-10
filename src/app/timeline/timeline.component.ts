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

  uploadImage() {
    console.log(this.path);
    this.af.upload('/files' + Math.random() + this.path, this.path);

    if ((this.uploadMessage = true)) {
      setTimeout(() => (this.uploadMessage = false), 2000);
    } else if ((this.uploadMessage = false)) {
      alert('Picture could not be uploaded');
    }
  }

  Add(title, description, type, link, closingDate, studyField) {
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
        //image: image,
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
