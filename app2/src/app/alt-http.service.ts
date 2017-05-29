import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { AltTextbox } from "./alt-textbox";
import { AltTextarea } from "./alt-textarea";
import { AltDropdown } from "./alt-dropdown";
import { AltBase } from "./alt-base";

@Injectable()
export class AltHttpService {
    private mockUrl = "http://www.mocky.io/v2/5926c91111000042006ccb29";

    constructor(private http: Http){ }

    getAlts(){
      let alts: AltBase<any>[] = [
        new AltDropdown({
          key: 'brave',
          label: 'Bravery Rating',
          options: [
            {key: 'solid',  value: 'Solid'},
            {key: 'great',  value: 'Great'},
            {key: 'good',   value: 'Good'},
            {key: 'unproven', value: 'Unproven'}
          ],
          order: 3,
          event:false
        }),
        new AltTextbox({
          key: 'firstName',
          label: 'First name',
          value: 'Bombasto',
          required: true,
          order: 1,
          event: true
        }),
        new AltTextbox({
          key: 'emailAddress',
          label: 'Email',
          type: 'email',
          order: 2
        })
      ];
      return alts.sort((a, b) => a.order - b.order);
    }

    getSample1Data(){
      return this.http.get(this.mockUrl)
          .map((response:Response)=>response.json())
          .catch((error:any)=>Observable.throw(error.json().error) || "server error");
    }
}