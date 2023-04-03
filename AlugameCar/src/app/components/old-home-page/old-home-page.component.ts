import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-old-home-page',
  templateUrl: './old-home-page.component.html',
  styleUrls: ['./old-home-page.component.css']
})
export class OldHomePageComponent {
  collapse : boolean=true;


  readonly menus: Array<PoMenuItem> = [
    { label: ' ', action: this.onClick.bind(this), shortLabel:' ',icon: "po-icon-align-justify"},
  ];

  private onClick() {
    this.collapse = !this.collapse;
    document.querySelector("");
  }
}
