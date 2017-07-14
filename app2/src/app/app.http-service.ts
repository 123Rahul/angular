import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class AppHttpService {
    private url = "http://localhost:8080/form/getForm";

    constructor(private http: Http){ }

    getFormJSON(id){
      return this.http.post(this.url,  this.getBody(id), this.getOptions("getGroupData"))
          .map((response:Response)=>response.json())
          .catch((error:any)=>Observable.throw(error.json().error) || "server error");
    }

    private getOptions(action) {
        let options: RequestOptions = new RequestOptions({
            headers: this.getHeaders(action)
        })
        return options;
    }

    private getHeaders(action){
        return new Headers({
            "Content-Type":"application/json"
        })
    }

    private getBody(id){
        return {
            "protocol": {
                "userCode": "superadmin",
                "userName": "superadmin",
                "orgCode": "org2",
                "tenantCode": "",
                "sysFormCode": "",
                "portalType": "SUPERADMIN",
                "loggedInUserIdentifier": "2",
                "loggedInTimestamp": 346834638434
            },
            "requestData": [
                {
                    "altFormCodeList":[id]
                }
            ]

        }
    }
}