export class contacts {
    _id: String;
    FirstName: String;
    LastName: String;
    Email: String;
    PhoneNumber: String;
    //creating model for the contact form
    constructor(_id: String, FirstName: String, LastName: String, Email: String, Phone: String) {
        this._id = _id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.PhoneNumber = Phone;
    }

}
export class c {
    FirstName: String;
    LastName: String;
    Email: String;
    PhoneNumber: String;
    constructor(FirstName: String, LastName: String, Email: String, PhoneNumber: String) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.PhoneNumber = PhoneNumber;
    }

}