import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor (
    private clipboard: Clipboard
  ) { }

  copyLink() {
    this.clipboard.copy(window.location.host + '/binds');
  }

}
