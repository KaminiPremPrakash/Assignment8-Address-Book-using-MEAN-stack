import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { ContactService } from '../services/contact.service';
import { contacts } from '../models/contact';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss']
})
export class DetailFormComponent implements OnInit {

  @Output() viewChange = new EventEmitter();
  @Input() childmessage;
  parentListOfContacts: contacts;
  _id: string;
  FirstName: String;
  LastName: String;
  Email: String;
  Phone: String;

  constructor(public contactService: ContactService) {
  }

  ngOnInit() {
    let contacts$: Observable<contacts> = this.contactService.view_Contacts(this.childmessage);
    contacts$.subscribe(contacts => {
      this.parentListOfContacts = contacts;
      this.FirstName = contacts.FirstName;
      this.LastName = contacts.LastName;
      this.Email = contacts.Email;
      this.Phone = contacts.PhoneNumber;

    });

  }

  onClickClose() {
    this.viewChange.emit();
  }

}
