import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnChanges{
@Input()response:any
@Input()passengers!:number

ngOnChanges(){
  console.log(this.response)
}
}
