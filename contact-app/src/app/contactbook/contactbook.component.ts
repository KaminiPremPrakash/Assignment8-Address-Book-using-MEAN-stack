import { Component, OnInit } from '@angular/core';
import { contacts } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contactbook',
  templateUrl: './contactbook.component.html',
  styleUrls: ['./contactbook.component.scss']
})
export class ContactbookComponent implements OnInit {
  parentListOfContacts: Array<contacts>;
  isOn: boolean = false;
  isView: boolean = false;
  parentmessage: string;

  // Constructor
  constructor(contactService: ContactService) {

    this.isOn = false;
    this.isView = false;



    let contacts$: Observable<Array<contacts>> = contactService.get_Contacts();
    contacts$.subscribe(contacts => {
      this.parentListOfContacts = contacts;
    });

  }

  // save event for diappearning the form
  onClickSave() {
    document.getElementById("myForm").style.display = "none";
  }
  onClickAdd() {
    this.isOn = true;
  }

  //passing the id to view a particular contact
  onClickView(_id: string) {
    this.parentmessage = _id;
    this.isView = true;
  }

  ngOnInit() {

  }

}
