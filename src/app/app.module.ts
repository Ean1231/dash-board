import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';


import { RouterModule, Routes } from '@angular/router'
import { environment } from '../environments/environment'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { TimelineComponent } from './timeline/timeline.component'
import { AngularFireStorageModule } from '@angular/fire/storage'


const routes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AddComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireStorageModule,
    RouterModule.forRoot(routes),AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
