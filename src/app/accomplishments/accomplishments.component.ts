import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-accomplishments',
    templateUrl: './accomplishments.component.html',
    styleUrls: ['./accomplishments.component.css']
})
export class AccomplishmentsComponent implements OnInit {

    title = 'A Few Accomplishments'
    subtitle = 'Here are my projects and accomplishments during my working experience.'
    accomplishments: Array<any>

    constructor() {
    }

    ngOnInit(): void {
        this.accomplishments = new Array<any>()
        this.addProject()
    }

    private addProject() {
        this.accomplishments.push({
            name: 'Inner circle Project (Backend and Android Application)',
            description: 'This project is a native Android Chat Application for course <b>CS673 at Boston University</b>. <br /> I implemented this with a native <b>Android Application framework</b>, and <b>Spring Boot Java</b> as a Backend System. Moreover, It is a chat application so to have real-time messaging. I used <b>Firebase Firestore</b> to achieve this feature.',
            imageURL: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/inner-circle%2FScreenshot_1607546781.png?alt=media&token=d2e65e30-0268-4bdd-81f0-696b7aad048a'
        }, {
            name: ''
        })
    }

}
