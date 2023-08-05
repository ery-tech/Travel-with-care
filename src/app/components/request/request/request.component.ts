import { Component,  } from '@angular/core';
import {default as jsonData } from '../../../../json/airports.json';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import {
  trigger, state, style, animate, transition, query, group
 } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),

      transition(':enter, :leave', [
        animate(5000)
      ])
    ])
  ]
})
export class RequestComponent {
constructor(private http : HttpService,private router: Router){}

response:any = ''
passengers!:number

airports = jsonData.map((airport:any) => {
    return { city: airport.city, code: airport.code}});

//calculate flightEmssions and emit response to the response component
    calculate(form:NgForm){
    this.passengers = form.value.passengers
    this.http.getFlightEmissions(form.value.origin.slice(-4, -1),
    form.value.destination.slice(-4, -1),
    form.value.passengers, form.value.cabinClass).subscribe(data=>{
      this.response = data
      form.resetForm()
    })
    }
}
