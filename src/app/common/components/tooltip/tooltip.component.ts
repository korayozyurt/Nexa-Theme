import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent implements OnInit{

  tooltip: string = '';
  left: number = 0;
  top: number = 0;

  constructor() {}

  ngOnInit(): void {}

}
