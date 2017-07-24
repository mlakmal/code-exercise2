import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class Api {

    constructor() { }

    getCityState(zip: string): Observable<IApiResponse> {
        //TODO: add code here
        return null;
    }

}

export interface IApiResponse {
    city: string;
    state: string;
}
