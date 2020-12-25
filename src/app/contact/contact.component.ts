import {Component, OnInit} from '@angular/core';
import {EmailValidator, FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../contact.service";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    title = 'Contact Me'
    subtitle = ''
    contactMeForm: FormGroup

    constructor(private contactService: ContactService) {
    }

    ngOnInit(): void {
      this.contactMeForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [
            Validators.required,
            Validators.email
        ]),
        subject: new FormControl(''),
        message: new FormControl('')
      })
    }

    onFormReset() {
      this.contactMeForm.reset()
    }

  onSubmitContactMe() {
    // send email to me
      let sendMessage = {
          message: this.contactMeForm.get('message').value,
          '_subject': this.contactMeForm.get('subject').value,
          name: this.contactMeForm.get('name').value,
          '_replyto': this.contactMeForm.get('email').value
      }
      this.contactService.postMessage(sendMessage).subscribe(response => {
          location.href = 'https://mailthis.to/confirm'
          // show dialog successfully
          this.onFormReset()
      }, error => {
          console.log({error})
      })
  }
}
