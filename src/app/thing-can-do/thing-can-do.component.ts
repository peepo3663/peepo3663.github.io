import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-thing-can-do',
    templateUrl: './thing-can-do.component.html',
    styleUrls: ['./thing-can-do.component.css']
})
export class ThingCanDoComponent implements OnInit {

    title: string;
    subtitle: string;
    thingsICanDo: Set<any>;

    constructor() {
    }

    ngOnInit(): void {
        this.title = 'Things I Can Do'
        this.subtitle = 'With my working experience in Software development for about six years, I can achieve these skillsets like'
        this.thingsICanDo = new Set()
            .add({
                icon: 'fa-code',
                data: 'Write Java, C#, Swift, Objective-C, <br/> Kotlin, Ruby, JavaScript, PHP and Python'
            })
            .add({
                icon: 'fa-code',
                data: 'Write Angular, React, Ionic'
            })
            .add({
                icon: 'fa-code',
                data: 'Write Mobile Frameworks, <br/> Android and iOS'
            })
            .add({
                icon: 'fa-code',
                data: 'Use Spring Boot, Spring Framework, <br/> NodeJS, Express'
            })
            .add({
                icon: 'fa-code',
                data: 'Write SQL, SQLite, Mongodb, <br/> Firebase Database, MySQL'
            })
            .add({
                icon: 'fa-code',
                data: 'Setup Docker, AWS, Elastic Beanstalk, <br/> Heroku, Digital Ocean'
            })
            .add({
                icon: 'fa-code',
                data: 'Unit Testing (Junit, XCTest), UI Testing (Appium, Espresso Test)'
            })
            .add({
                icon: 'fa-cubes',
                data: 'Agile Development, Scrum Framework, Scrum Master'
            })
    }

}
