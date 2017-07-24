import { Guide } from './guide';
import { ExerciseSix } from './exercise.six';
import { ExerciseFive } from './exercise.five';
import { ExerciseFour } from './exercise.four';
import { ExerciseThree } from './exercise.three';
import { ExerciseTwo } from './exercise.two';
import { ExerciseOne } from './exercise.one';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/guide' },
  { path: 'guide', component: Guide },
  { path: 'exercise-one', component: ExerciseOne },
  { path: 'exercise-two', component: ExerciseTwo },
  { path: 'exercise-three', component: ExerciseThree },
  { path: 'exercise-four', component: ExerciseFour },
  { path: 'exercise-five', component: ExerciseFive }
];
