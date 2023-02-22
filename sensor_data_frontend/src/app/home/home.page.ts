import { Component, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { Console } from 'console';
import { RecordItem } from '../record-item';

import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  constructor(private data: DataService) { }
  records?:any;
  rec?:RecordItem;
  ngOnInit(): void {
    
    this.data.getMessages().subscribe((item:any)=>{
      console.log(item);
      this.records = item;
      this.rec = item;
      
    })

    
   
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  

}
