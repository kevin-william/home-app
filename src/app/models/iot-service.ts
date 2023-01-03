export class IotService {
    
    name:string;
    isAvaliable:boolean;
    host: string;
    uri:string;

    constructor(name:string, url:string, host: string){
        this.name = name;
        this.isAvaliable = false;
        this.host = host; 
        this.uri = url;
    }

}
