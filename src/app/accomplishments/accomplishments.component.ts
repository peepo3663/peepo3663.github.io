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
            name: 'Glurr (iOS Application)',
            description: 'Glurr Application is the No.1 platform for Thai university students that everyone can create any topic for freeFeatures:-Feed/Post contents about university and your interests. <br />It is developed with native <b>iOS Swift</b> and <b>PHP</b> as Backend. Here is the <a href="https://download.cnet.com/Glurr/3000-12941_4-76603491.html">download link</a>',
            imageURL: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/glurr%2F230x0w.png?alt=media&token=5dbf88e7-329d-4b6a-ab10-d35b4ad5b601'
        }, {
            name: 'Glurr Talk (Backend and iOS Application)',
            description: 'Glurr Talk is the #1 online live learning platform. It is developed with <b>iOS Swift</b> and <b>Node JS</b> as a backend system with <b>Firebase firestore</b> for real-time chat messaging',
            imageURL: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/glurr-talk%2F230x0w%20(1).png?alt=media&token=1125b73d-4bec-4c4c-a4a5-00ccfb739b1c'
        }, {
            name: 'TEEZY (iOS Application)',
            description: 'TEEZY application is the customized t-shirt design and make it real. It is developed with <b>iOS Swift</b> with <b>Shopify</b> sdk.<br /> Here is the <a href="http://www.ninefar.com/?p=20430">article</a> about the application.',
            imageURL: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/tezzy%2F750x750bb.jpeg?alt=media&token=b0b8dc10-2821-4245-bcfe-7925ca1433c9'
        })
    }

}
