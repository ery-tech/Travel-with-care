import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }



  getFlightEmissions(origin:string, destination:string, passengers:any,cabinClass:any){
    let data = {
      legs: [
        {
          from: origin,
          to: destination,
          passengers: passengers,
          class: cabinClass
        }
      ]
    };
   return this.http.post(environment.BASE_URL,data);

  }
}
