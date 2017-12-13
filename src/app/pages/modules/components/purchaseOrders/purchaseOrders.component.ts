import { Component, OnInit } from '@angular/core';
import { PurchaseOrdersService } from './purchaseOrders.service';

@Component({
  selector: 'purchaseOrders',
  templateUrl: './purchaseOrders.html',
  styleUrls: ['./purchaseOrders.scss']
})
export class PurchaseOrders {
    data = [];
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "dbPurchaseOrderNumber";
    sortOrder = "asc";
    count = 1;

    constructor(private service: PurchaseOrdersService) {
      this.service.getData().subscribe((data) => {
        this.data = data;
      });;

  }

    toInt(num: string) {
        return +num;
    }

    sortByWordLength = (a: any) => {
        return a.city.length;
    }
  
}
