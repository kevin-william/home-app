import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IotService } from '../models/iot-service';

@Injectable({
  providedIn: 'root'
})
export class HttpCheckService {

  constructor(private http: HttpClient) { }

  // public isHostAvaliable(hostname:string): boolean{
  //   var flag = false
  //   lookup(hostname, (err, address, family) => {
  //     if (err) {
  //       console.error(`Error: ${err.message}`);
  //     } else {
  //       console.log(`Host ${hostname} is available at ${address}`);
  //       flag = true;
  //     }
  //   });
  //   return flag;
  // }

  isHostAvaliable(item: IotService) {
    this.http.get(item.host).subscribe(
      res => {
        console.log("Host ${hostname} is available");
        item.isAvaliable = true;
      },
      err => {
        console.error(`Error: ${err.message}`);
      }
    );
  }
  
}
