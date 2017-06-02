import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class AppHttpService {
    private mockUrl = "http://www.mocky.io/v2/592fd109110000cd11b392a1";

    constructor(private http: Http){ }

    getSample1Data(){
      return this.http.get(this.mockUrl)
          .map((response:Response)=>response.json())
          .catch((error:any)=>Observable.throw(error.json().error) || "server error");
    }
}