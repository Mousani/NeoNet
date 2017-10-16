import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'view-contact',
	styleUrls: ['./viewContact.scss'],
	templateUrl: './viewContact.html',
})
export class ViewContact {
	viewContact = {};

	@Input() contact;
	@Output() addNewChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	ngOnInit() {
		console.log(this.contact)
		this.viewContact = this.contact;
	}
	createToggle() {
		console.log(this.contact);
	}

	submitContact() {
		console.log(this.contact);
	}


	constructor() {
	}
}
