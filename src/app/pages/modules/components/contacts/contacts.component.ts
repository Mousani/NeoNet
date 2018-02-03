import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modals } from '../../../../theme/components/modals/modals.component';
import { EditAddress } from './components/editAddress/editAddress.component';
import { DefaultModal } from '../../../../theme/components/modals/default-modal/default-modal.component';


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
    addressArray = [];
    invoices = [];
    searchFileds = '';

    editContact(contact, addressArray) {
      this.addressArray = addressArray;
      this.addNew = !this.addNew;
      this.viewContactStatus = !this.viewContactStatus;
    }



    lgModalShow(address) {
      const activeModal = this.modalService.open(EditAddress/*, {size : 'lg'}*/);
      activeModal.componentInstance.modalHeader = 'Address';
      console.log("this.address ", address);
      this.addElement(address, 'dbEmails');
      this.addElement(address, 'dbPhoneNumbers');
      activeModal.componentInstance.address = address;
    } 
    addElement(array, key) {
      console.log(array[key])
      if(!array[key]) array[key] = [];
      array[key].push('');
      return array;
    }

    public setContact = (contact) => {  
      this.viewContactStatus = true;
      this.contact = contact;
      this.service.getAddress(contact.dbContactNumber).subscribe((address) => {
        this.addressOfContact = address;
      });
      this.service.getInvoicesofContact(contact.dbContactNumber).subscribe((invoices) => {
        this.invoices = invoices;
      });
    }

    backToList() {
      this.addressOfContact = [];
    }
    
    contact = {};
    searChFiled = [
    {filed : 'Any',value:''}  ,
    {filed : 'Contact Number',value:' dbContactNumber'}  ,
    {filed : 'First Name',value:'dbFirstName'}  ,
    {filed : 'Last Name',value:'dbLastName'}  ,
    {filed : 'Company',value:'dbCompany'}  ,
    {filed : 'Primary Email',value:'dbPrimaryEmail'}  ,
    {filed : 'Web Address',value:'dbWebAddress'}  ,
    {filed : 'Secondary Email ',value:'dbSecondaryEmail'}  ,
    {filed : 'Add Notes',value:'dbAddNotes'}  ,
    {filed : 'Source',value:'dbSource'}  ,
   // {filed : 'Check',value:'dbPassword'}  ,
   // {filed : 'Security Question',value:'dbSecurityQuestion'}  ,
   // {filed : 'Security Answer ',value:'dbSecurityAnswer'}  ,
   // {filed : 'How Find',value:'dbHowFind'}  ,
    {filed : 'Where Use',value:'dbWhereUse'}  ,
    {filed : 'Vehicles',value:'dbVehicles'}  ,
    {filed : 'How Much',value:'dbHowMuch'}  ,
    //{filed : 'Other Comments',value:'dbOtherComments'}  ,
    //{filed : 'How Interest',value:'dbHowInterest'}  ,
   // {filed : 'I P',value:'dbUsr'}  ,
   // {filed : 'Phone',value:'dbPhone'}  ,
   // {filed : 'Address',value:'dbAddress'}  ,
   // {filed : 'City',value:'dbCity'}  ,
   // {filed : 'State',value:'dbState'}  ,
   // {filed : 'Country',value:'dbCountry'}  ,
   // {filed : 'Zip',value:'dbZip'}  ,
    {filed : 'Type',value:'dbType'}  ,
    {filed : 'Contacts Company',value:'dbContactsCompany'}  ,
   // {filed : 'Name',value:'dbName'}  ,
    //{filed : 'Province',value:'dbProvince'}  ,
   // {filed : 'Address Label',value:'dbAddressLabel'}  ,
   // {filed : 'Email',value:'dbEmail'}  ,
    //{filed : 'Number',value:'dbNumber'}  ,
    //{filed : 'Label',value:'dbPaymentNotes'}  ,
    //{filed : 'Payment Label',value:'dbPaymentLabel'}  ,
      ];

    constructor(private service: ContactsService,
                private modalService: NgbModal) {
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
