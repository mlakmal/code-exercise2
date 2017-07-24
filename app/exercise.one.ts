import { Observable } from 'rxjs/Observable';
import { Api, IApiResponse } from './api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[exercise-one]',
  template: `
    <h2>exercise one - writing service and rest api calls</h2>
     
    <ul>
    <li>update the Api class getCityState function to call below GET url thorugh Angular http client and return the observable with data after mapping the data to IApiResponse inerface object.</li>
        <li>ex: use https://maps.googleapis.com/maps/api/geocode/json?sensor=true&address=12345 url for HTTP GET api. (12345 should be replace by passed zipcode parameter)</li>
        <li>when city/state api call returns valid result, cache the result in applicaiton session so next call to same url will not be invoked by angular.</li>
        <li>cache solution should be O(1) complexity based solution not O(n). (dont use browser storage or cookies, use vanilla js solution)</li>
    </ul>
  `
})
export class ExerciseOne implements OnInit {
  data: Observable<IApiResponse>;

  constructor(private _api: Api) { }

  ngOnInit() {
    this.data = this._api.getCityState('23058');
  }
}
