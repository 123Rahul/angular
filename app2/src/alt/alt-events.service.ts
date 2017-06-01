import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class AltEventsService{
    constructor(private http:Http){}

    populate(target, value, alts){
        return this.http.get("http://www.mocky.io/v2/592bee771000004014389852")
            .map((response:Response)=>response=response.json())
    }
}