import { Component } from '@angular/core';
import { IotService } from './models/iot-service';
import { HttpCheckService } from './services/http-check.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home-app';
  iotServiceList : IotService[] = [];
  httpCheckService:HttpCheckService;

  constructor(httpCheckService:HttpCheckService){
    this.httpCheckService= httpCheckService;
    this.iotServiceList = [
      {isAvaliable:false, name:"cam 1", url:"http://192.168.1.82:81/stream"},
      {isAvaliable:false, name:"cam 2", url:"http://192.168.1.84:81/stream"}
    ]
  }

  ngOnInit() {
    this.iotServiceList.forEach(element => {
      element.isAvaliable = this.httpCheckService.isHostAvaliable(element.url);
    });
  }

}
