export class IotService {
    
    name:string;
    isAvaliable:boolean;
    url:string;

    constructor(name:string, url:string){
        this.name = name;
        this.isAvaliable = false;
        this.url=url;
    }

}
