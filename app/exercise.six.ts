import { Component } from '@angular/core';

@Component({
  selector: '[exercise-six]',
  template: `
    <h2>exercise six - custom input control and npm scripts</h2>
    <ul>
    <li>update the angular route to show this component for exercise-six route and also update the express server script to handle /exercise-six url.
    <ul>
    <li>update top navigation bar to include exercise-six navigation link.</li>
    </ul>
    </li>

    <li>create custom input control to handle radio button group.
    <ul><li>it should support ngModel binding like below and set / get model value.</li>
    <li>allow using input called items to give array of values, and given control should show radio buttons for the given array values.</li>
    <li>
    <code>
    &lt;radio-group [(ngModel)]="selectedState" [items]="states"&gt;&lt;/radio-group&gt;
    </code>
    </li>
    </ul>
    </li>
    </ul>
    
    Selected value: {{selectedState}}<br/>    

  `
})
export class ExerciseSix {
  states: any = ['va', 'ca', 'ky'];
  selectedState = 'ky';
}
