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
    {index: 1,iconHtml:'<i class="fa-brands fa-square-whatsapp "></i>', text: 'Menu1', children:[
      {iconHtml: '<i class="fa-solid fa-chart-pie"></i>', text : 'Analytics'},
      {iconHtml: '<i class="fa-solid fa-pen-ruler"></i>', text : 'Rules'}
    ]},
    {index: 2,iconHtml: '<i class="fa-solid fa-phone"></i>', text: 'Menu2', children: [
      {iconHtml: '<i class="fa-solid fa-address-book"></i>', text: 'Adres Defteri'},
      {iconHtml: '<i class="fa-solid fa-tower-cell"></i>', text: 'LTE Anteni Seç'},
      {iconHtml: '<i class="fa-solid fa-satellite-dish"></i>', text: 'Uydu Seç'}
    ]},
    {index: 3,iconHtml: '<i class="fa-solid fa-magnifying-glass-chart"></i>', text: 'Artificial Intelligence', children: [
      {iconHtml: '<i class="fa-solid fa-brain"></i>', text: 'Makine Öğrenmesi'},
      {iconHtml: '<i class="fa-brands fa-sketch"></i>', text: 'Yapay Zeka'},
      {iconHtml: '<i class="fa-solid fa-microchip"></i>', text: 'Donanım'}
    ]},
  ];

  menuDialogShow: boolean = false;
  sidebarExtended: boolean = false;
  selectedMenu: SidebarMenu = this.sidebarMenuList[0];

  hamburgerClicked() {
    this.sidebarExtended = !this.sidebarExtended;
  }

  menuClicked(menu: SidebarMenu) {
    this.sidebarExtended = !this.sidebarExtended;
    this.selectedMenu = menu;
  }

  openMenudialog() {
    this.menuDialogShow = !this.menuDialogShow;
  }


}
