import { Component } from '@angular/core';

@Component({
  selector: '[exercise-four]',
  template: `
    <h2>exercise four - structural directives, filters and ngTemplate</h2>
    <ul>
      <li>update ng.hide directive to add functionality to hide the element when given input condition is true.
      <ul>
        <li>this should work simillar to angular v1 ngHide directive. (v1 uses css class to hide the element dynamically adding that on condition changes.)</li>
        </ul>
        </li>
    <li>Use ngTemplateOutlet to show the firstname and dob of each member in members array.
    <ul>
      <li>create common ngTemplate that will accept member object as the context and bind the firstName and dob to the template html like given exmaple (you will need to setup how to pass member object as context to this template)</li>
      <li>use ngFor and ngTemplateOutlet. and pass the member data to ng-template to render both members using same ngTemplate given below.</li>
      <li>formate members dob as MMM dd, yyyy (Ex: Jan 05, 2012)</li>
      </ul>
      </li>
    <li>bind htmlContent value to below div element and make sure when anchor link is clicked javascript alert show up properly.</li>
    </ul>

  `
})
export class ExerciseFour {
  members: any = [
    {
      firstName: 'john',
      dob: '10/10/1980'
    },
    {
      firstName: 'john',
      dob: '5/5/1950'
    }
  ];

  htmlContent =  '<p><a onclick="alert(\'hello\')" href="javascript:void(0)">click me</a> to see alert !!!</p>';

  constructor(){}
}
