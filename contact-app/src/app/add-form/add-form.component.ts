import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { contacts, c } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  parentListOfContacts: Array<contacts>;
  contactService: ContactService;
  model: any = {};

  @Output() valueChange = new EventEmitter();
  constructor(contactService: ContactService) {
    this.contactService = contactService;
  }

  ngOnInit() {
  }
  //on save click this function would get executed
  onClickSave() {
    let newcontact$: Observable<c> = this.contactService.create_Contact(this.model);
    newcontact$.subscribe(
      success => { alert("success") },
      error => {

      });
    this.valueChange.emit();

    //getcontacts to fetch the contacts from DB
    let contacts$: Observable<Array<contacts>> = this.contactService.get_Contacts();
    contacts$.subscribe(contacts => {
      this.parentListOfContacts = contacts;
    });


  }
}
