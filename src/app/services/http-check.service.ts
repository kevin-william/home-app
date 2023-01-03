import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IotService } from '../models/iot-service';

@Injectable({
  providedIn: 'root'
})
export class HttpCheckService {

  constructor(private http: HttpClient) { }

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
