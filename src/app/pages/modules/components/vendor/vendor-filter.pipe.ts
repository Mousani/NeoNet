import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'vendorFilter'
})
export class VendorFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=> 
                ( String(row.dbVendorNumber)).indexOf(query.toLowerCase()) > -1 
                || (row.dbCompany ? row.dbCompany  : '').toLowerCase().indexOf(query.toLowerCase()) > -1
                || (row.dbContactName ? row.dbContactName : '').toLowerCase().indexOf(query.toLowerCase()) > -1 
                || (row.dbAddress? row.dbAddress : '' ).toLowerCase().indexOf(query.toLowerCase()) > -1               );
        }
        return array;
    }

}
