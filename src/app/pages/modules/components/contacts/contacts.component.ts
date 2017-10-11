import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.html',
  styleUrls: ['./contacts.scss']
})
export class Contacts {

    data;
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "email";
    sortOrder = "asc";
    count = 1;
    addNew = false;

    

    constructor(private service: ContactsService) {
    this.service.getData().then((data) => {
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
