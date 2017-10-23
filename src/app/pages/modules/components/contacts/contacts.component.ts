import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.html',
  styleUrls: ['./contacts.scss']
})
export class Contacts {

    data = [];
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "dbContactNumber";
    sortOrder = "asc";
    count = 1;
    addNew = false;
    viewContactStatus = false;
    addressOfContact = [];
    address = {};

    public setContact = (contact) => {  
      console.log(contact);
      this.viewContactStatus = true;
      this.contact = contact;
      this.service.getAddress(contact.dbContactNumber).subscribe((address) => {
        console.log("address ",address);
        this.addressOfContact = address;
      });
    }

    backToList() {
      this.addressOfContact = [];
    }

    contact = {};

    constructor(private service: ContactsService) {
      this.service.getData().subscribe((data) => {
        this.data = data;
      });
  }

    toInt(num: string) {
        return +num;
    }

    sortByWordLength = (a: any) => {
        return a.city.length;
    }
  
}
