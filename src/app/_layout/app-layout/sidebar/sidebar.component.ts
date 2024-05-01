import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarMenu } from './Entities/SidebarMenu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  sidebarExtended: boolean = false;

  hamburgerClicked() {
    this.sidebarExtended = !this.sidebarExtended;
  }

  sidebar: SidebarMenu[] = [
    {iconHtml:'<i class="fa-brands fa-square-whatsapp fa-lg mx-auto text-slate-400 hover:text-indigo-700"></i>', text: 'Menu1', children:[
      {iconHtml: '<i class="fa-solid fa-chart-pie"></i>', text : 'Analytics'},
      {iconHtml: '<i class="fa-solid fa-pen-ruler"></i>', text : 'Rules'}
    ]}
  ];

}
