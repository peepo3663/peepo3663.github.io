import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    title = 'Contact Me'
    subtitle = ''
    contactMeForm: FormGroup

    constructor() {
    }

    ngOnInit(): void {
      this.contactMeForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        subject: new FormControl(''),
        message: new FormControl('')
      })
    }

    onFormReset() {
      this.contactMeForm.reset()
    }

  onSubmitContactMe() {
    // send email to me
    
  }
}
