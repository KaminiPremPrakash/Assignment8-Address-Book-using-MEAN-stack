import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contacts, c } from './../models/contact';

import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ContactService {

  resource: string;
  resourceURL: string;
  idContact: string;

  constructor(private http: HttpClient) {
    this.resource = 'contacts';
    this.resourceURL = `${environment.serverBaseURL}/${this.resource}`;
  }
  //this is to get the contacts
  get_Contacts(): Observable<Array<contacts>> {
    return this.http.get<Array<contacts>>(this.resourceURL);
  }

  //this creates a new contact
  create_Contact(contact: c): Observable<c> {
    let newcontact: c;
    newcontact = contact ? contact : new c(contact.FirstName, contact.LastName, contact.Email, contact.PhoneNumber);
    return this.http.post<c>(`${environment.serverBaseURL}/${this.resource}`, newcontact);
  }

  //view contact
  view_Contacts(_id: string): Observable<contacts> {
    this.idContact = `${_id}`;
    return this.http.get<contacts>(`${this.resourceURL}/${this.idContact}`);
  }

  //  for validating email
  ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(mail)) {
      return (true)
    }
    alert("Invalid email address!")
    return (false)
  }

  // for validating name
  validatename(fname, lname) {
    if (/^[a-z ,.'-]+$/i.test(fname) && /^[a-z ,.'-]+$/i.test(lname)) {
      return (true)
    }
    alert("Invalid input for name!")
    return (false)
  }
  // for validating the phone number
  validatenumber(num) {
    if (/^\d{10}$/i.test(num)) {
      return (true)
    }
    alert("Please enter 10 digits for contact input!")
    return (false)
  }
}

