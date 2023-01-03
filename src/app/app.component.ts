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
      {isAvaliable:false, name:"cam 1", uri:":81/stream", host: "http://192.168.1.82"},
      {isAvaliable:false, name:"cam 2", uri:":81/stream", host: "http://192.168.1.84"}
    ]
  }

  ngOnInit() {
    this.iotServiceList.forEach(element => {
      this.httpCheckService.isHostAvaliable(element);
    });
  }

}
