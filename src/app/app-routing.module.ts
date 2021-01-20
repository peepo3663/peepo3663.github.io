import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import {MainComponent} from "./main/main.component"
import {AboutComponent} from "./about/about.component"
import {AccomplishmentsComponent} from "./accomplishments/accomplishments.component"
import {ContactComponent} from "./contact/contact.component"
import {ExperienceComponent} from "./experience/experience.component"
import {SkillsetComponent} from "./skillset/skillset.component"

const routes: Routes = [
  {path: '', component: MainComponent, data: { animation: 'HomePage' }},
  {path: 'my-resume', component: AboutComponent, data: { animation: 'MyResume' }},
  {path: 'my-experience', component: ExperienceComponent},
  {path: 'my-skills', component: SkillsetComponent},
  {path: 'portfolio', component: AccomplishmentsComponent},
  {path: 'contact-me', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
