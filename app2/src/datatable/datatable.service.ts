import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class DatatableService{
    constructor(private http:Http){ }

    getMetadata(url){
        return this.http.get(url)
                .map((response: Response) => {
                    response=response.json()
                })
                .catch((error: any)=>Observable.throw(error.json().error) || "server error");
    }

    getData(url, length, offset){
        return this.http.get(url, this.createHeader(length,offset))
                .map((response: Response)=>{
                    response=response.json();
                    return response;
                })
                .catch((error: any)=> Observable.throw(error.json().error) || "server error");
    }

    createHeader(length,offset){
        return new RequestOptions({headers:new Headers({
            'offset':offset,
            'length':length
        })});
    }
}