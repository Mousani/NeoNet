import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'edit-address',
  styleUrls: [('./editAddress.scss')],
  templateUrl: './editAddress.html'
})

export class EditAddress implements OnInit {

  modalHeader: string;
  address: object = {};

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {}

  closeModal() {
    this.activeModal.close();
  }
}
