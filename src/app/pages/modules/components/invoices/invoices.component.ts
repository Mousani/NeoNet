import { Component, OnInit } from '@angular/core';
import { InvoicesService } from './invoices.service';

@Component({
  selector: 'invoices',
  templateUrl: './invoices.html',
  styleUrls: ['./invoices.scss']
})  
export class Invoices {

    data = [];
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "dbInvoiceNumber";
    sortOrder = "desc";
    count = 1;
    addNew = false;
    viewContactStatus = false;

    public setContact = (contact) => {  
      console.log(contact);
      this.viewContactStatus = true;
      this.contact = contact;
    }

    contact = {};

    constructor(private service: InvoicesService) {
      this.service.getData().subscribe((data) => {
        this.data = data;
      });;
    // this.service.getData().then((data) => {
    //   console.log(data);
    //   this.data = data;
    // }).catch(function(e) {
    //   console.log(e); // "oh, no!"
    // });
    
  }

  month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  public toDate(dateObj) {
    if(dateObj) 
      return (dateObj.day+1)+"-"+this.month[dateObj.month+1]+"-"+(dateObj.year);
    else 
      return "";
  }

  

    toInt(num: string) {
        return +num;
    }

    sortByWordLength = (a: any) => {
        return a.city.length;
    }
  
}
