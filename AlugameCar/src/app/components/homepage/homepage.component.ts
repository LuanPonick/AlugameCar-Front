import { PoMenuItem } from '@po-ui/ng-components';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  collapse : boolean=true;


  readonly menus: Array<PoMenuItem> = [
    { label: ' ', action: this.onClick.bind(this), shortLabel:' ',icon: "po-icon-align-justify"},
  ];

  private onClick() {
    this.collapse = !this.collapse;
  }
}
