import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
     selectedtab : string =" "
  constructor() { }

  ngOnInit(): void {
  }


  onclick(tab:string){
   this.selectedtab = tab
  }
}
