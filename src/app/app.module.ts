import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { ThingCanDoComponent } from './thing-can-do/thing-can-do.component';
import { AccomplishmentsComponent } from './accomplishments/accomplishments.component';
import { ContactComponent } from './contact/contact.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ContactService} from "./contact.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ExperienceComponent } from './experience/experience.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { AboutMeComponent } from './about-me/about-me.component';
// For MDB Angular Free
import {CarouselModule, ChartsModule, IconsModule, NavbarModule, WavesModule} from 'angular-bootstrap-md';
import { WhatIDoInADayComponent } from './what-i-do-in-a-day/what-i-do-in-a-day.component';
import { WhatILoveComponent } from './what-i-love/what-i-love.component'
import {AngularImageViewerModule} from "angular-x-image-viewer";
import { MyMottoComponent } from './my-motto/my-motto.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    FooterComponent,
    AboutComponent,
    MainComponent,
    ThingCanDoComponent,
    AccomplishmentsComponent,
    ContactComponent,
    ExperienceComponent,
    SkillsetComponent,
    AboutMeComponent,
    WhatIDoInADayComponent,
    WhatILoveComponent,
    MyMottoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule,
    WavesModule,
    NavbarModule,
    IconsModule,
    AngularImageViewerModule,
    CarouselModule
  ],
  providers: [
      ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
