import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class VendorService {

  constructor(private http : Http) { }
  dataTableData : any;
  getData( ) {
    return this.http.get("./assets/json/vendor.json")
          .map((res:Response) =>  res.json()); //records in this case
    }
}
