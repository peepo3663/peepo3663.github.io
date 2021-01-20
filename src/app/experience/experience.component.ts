import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  workingExperience: Array<any>

  private colors = ['grey', 'green', 'blue', 'yellow', 'red']
  private lastPick: any

  constructor() { }

  ngOnInit(): void {
    this.workingExperience = new Array<any>()
    this.workingExperience.push({
      position: 'Research Assistant',
      time: 'January 2021 - present',
      company: 'Boston University',
      description: "• Partner with Assistant Professor Supervisor to develop Android application on interactive fitness tracking.<br>" +
          "• Research and implement algorithms for on device search engine.",
      icon: 'balance',
      color: this.pickColor()
    }, {
      position: 'Application Development Product Support Specialist (Full-stack developer)',
      time: 'March 2018 - August 2020',
      company: 'IBM Solutions Delivery Co., Ltd.',
      description: "• Lead, teach and handle mobile application development teams as projects assigned.<br>" +
          "• Get and analyse customer’s requirements and develop software features.<br>" +
          "• Present and demonstrate the innovation to the clients and provide technical solutions<br>",
      icon: 'case',
      color: this.pickColor()
    }, {
      position: 'Senior iOS Developer',
      time: 'March 2017 - March 2018',
      company: 'Nimbl3 Co., Ltd.',
      description: "• Act as the leader of the mobile development team (iOS) and partner up with CTO.<br>" +
          "• Setup a continuous delivery system for all application deployment.<br>" +
          "• Communicate with clients to solve problems with technical aspects.<br>",
      icon: 'city',
      color: this.pickColor()
    }, {
      position: 'Founder & Chief technical officer',
      time: 'April 2016 - April 2017',
      company: 'Unicorn Studio Co., Ltd.',
      description: "• Have responsibilities in looking at the big picture of all the technical aspects of the company as Full-stack Engineer.<br>" +
          "• Act as a company representative to contact third parties both private and government sector.<br>" +
          "• Generate and implement new business and application \"Glurr Talk\" - online learning.<br>",
      icon: 'lamp',
      color: this.pickColor()
    }, {
      position: 'iOS Developer',
      time: 'December 2014 - June 2016',
      company: 'Ookbee Co., Ltd.',
      description: "• Manage and handle all company iOS applications.<br>" +
          "• Introduce new features that create better user experiences.<br>" +
          "• Work with start-up partners, creating a new reader system to the company’s application.<br>",
      icon: 'book',
      color: this.pickColor()
    }, {
      position: 'Software Developer',
      time: 'June 2014 - December 2014',
      company: '500 trends LTD',
      description: "• Acts as the main programmer of the start-up, improving the product, and partnering with the CEO.<br>" +
          "• Develop Java web services that serve a mobile application with Tomcat, Hibernate, MySQL.<br>",
      icon: 'shopping-cart',
      color: this.pickColor()
    })
  }

  private pickColor() {
    if (this.lastPick == null) {
      this.lastPick = this.colors[Math.floor(Math.random() * this.colors.length)]
      return this.lastPick
    }
    let currentColor = this.colors[Math.floor(Math.random() * this.colors.length)]
    while (currentColor == this.lastPick) {
      currentColor = this.colors[Math.floor(Math.random() * this.colors.length)]
    }
    this.lastPick = currentColor
    return currentColor
  }

}
