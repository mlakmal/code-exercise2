import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Component } from '@angular/core';

@Component({
  selector: '[exercise-five]',
  template: `
    <h2>exercise five - vanilla javascript, host binding</h2>
    <ul>
    <li>whats wrong with below code. it is binding data coming back from api call but this code is not performance friendly or working properly.
      <ul>
      <li>we just need to show members first name (from api response), fix this code (but do not use any additional variables or properties)
      <br/><code>Hi &#123;&#123;loggedInMember.firstName&#125; &#125; !!!</code>
      </li>
      </ul></li>

    <li>update ClickGlobal component click function to update the last clicked time only when click on buttons with update-time css class.
    <ul>
    <li>don't create new functions or add click event on buttons. </li>
    <li>update the existing click function with your solution.</li>
    </ul></li>

    <li>append "_PRODCT" string to each array item in productArray. and sort the array in ascending order. do not use for loop or foreach iterators. 
    <ul>
    <li>complete this solution by using javascript in-built array functions.</li>
    </ul></li>
    </ul>

  Hi {{loggedInMember.firstName}} !!!
  <div click-global></div>

  `
})
export class ExerciseFive {
  productArray: Array<string> = ['FUTURE', 'TERMINATED',  'ACTIVE'];

  constructor(private _http: Http) { }

  get loggedInMember(): Observable<any> {
    return this._http.get('member.json?' + (new Date()).getTime()).map((resp) => { return resp.json(); });
  }
  
}
