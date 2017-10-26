import {Component} from '@angular/core';

import {ViewAddressSimpleService} from './viewAddressSimple.service';

@Component({
  selector: 'view-address-simple',
  templateUrl: './viewAddressSimple.html',
  styleUrls: ['./viewAddressSimple.scss']
})
export class ViewAddressSimple {

  public feed:Array<Object>;

  constructor(private _feedService:ViewAddressSimpleService) {
  }

  ngOnInit() {
    this._loadFeed();
  }

  expandMessage (message){
    message.expanded = !message.expanded;
  }

  private _loadFeed() {
    this.feed = this._feedService.getData();
  }
}
