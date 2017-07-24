import { Guide } from './guide';
import { ExerciseSix } from './exercise.six';
import { ClickGlobal } from './click.global';
import { ExerciseFive } from './exercise.five';
import { NgHide } from './ng.hide';
import { ExerciseFour } from './exercise.four';
import { Address } from './address';
import { ExerciseThree } from './exercise.three';
import { ExerciseTwo } from './exercise.two';
import { Api } from './api';
import { SlideContainer } from './slide.container';
import { Slide } from './slide';
import { ExerciseOne } from './exercise.one';
import { routes } from './routes';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CodeApp} from './app.component';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpModule, CommonModule],
    declarations: [CodeApp, ExerciseOne, SlideContainer, Slide, ExerciseTwo, ExerciseThree, Address, ExerciseFour, NgHide, ExerciseFive, ClickGlobal, ExerciseSix, Guide],
    entryComponents: [ExerciseOne, SlideContainer, Slide, ExerciseTwo, ExerciseThree, Address, ExerciseFour, ExerciseFive, ClickGlobal, ExerciseSix, Guide],
    providers: [Api],
    bootstrap: [CodeApp],
})
export class AppModule {}
