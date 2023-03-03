import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchTerm:any
  selectedBrand:any;
  brands:any=[]
  items: any[] = [];

  constructor(private service:ServiceService) { }
  ngOnInit(): void {
    this.service.getPayloadRmp().subscribe((res:any)=>{
      console.log(res)
      this.items = res.requests
    })

    this.service.getBrands().subscribe((res:any)=>{
      console.log('ee',res)
      this.brands = res
    })
    
  }
}
