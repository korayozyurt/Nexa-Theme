import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SidebarMenu, SubMenu } from './Entities/SidebarMenu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  sidebarMenuList: SidebarMenu[] = [
    {index: 1,iconHtml:'<i class="fa-brands fa-square-whatsapp fa-lg mx-auto text-slate-400 hover:text-indigo-700"></i>', text: 'Menu1', children:[
      {iconHtml: '<i class="fa-solid fa-chart-pie"></i>', text : 'Analytics'},
      {iconHtml: '<i class="fa-solid fa-pen-ruler"></i>', text : 'Rules'}
    ]},
    {index: 2,iconHtml: '<i class="fa-solid fa-phone fa-lg mx-auto text-slate-400 hover:text-indigo-700"></i>', text: 'Menu2', children: [
      {iconHtml: '<i class="fa-solid fa-address-book"></i>', text: 'Adres Defteri'},
      {iconHtml: '<i class="fa-solid fa-tower-cell"></i>', text: 'LTE Anteni Seç'},
      {iconHtml: '<i class="fa-solid fa-satellite-dish"></i>', text: 'Uydu Seç'}
    ]}
  ];

  sidebarExtended: boolean = false;
  selectedMenu: SidebarMenu = this.sidebarMenuList[0];


  hamburgerClicked() {
    this.sidebarExtended = !this.sidebarExtended;
  }

  menuClicked(menu: SidebarMenu) {
    //this.sidebarExtended = menu.index !== this.selectedMenu.index;
    this.sidebarExtended = !this.sidebarExtended;
    this.selectedMenu = menu;

    /*
    if(menu.index !== this.selectedMenu?.index) {
      this.sidebarExtended = true;
      this.selectedMenu = menu;
    } else {
      this.sidebarExtended = false;
      this.selectedMenu = this.sidebarMenuList[0];
    }
*/
  }

}
