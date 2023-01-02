import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  isHostAvaliable(hostname:string): boolean {
    var flag = false;
    this.http.get(`http://${hostname}`).subscribe(
      res => {
        console.log("Host ${hostname} is available");
        flag = true;
      },
      err => {
        console.error(`Error: ${err.message}`);
      }
    );
    return flag;
  }
  
}
