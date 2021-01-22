import {Component, OnInit} from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet
} from "@angular/router";
import {slideInAnimation} from "./animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
      slideInAnimation
  ]
})
export class AppComponent {
  title = 'Wasupol Tungsakultong, Full-stack, Mobile Developer and Software Engineer';
  loading: boolean

  constructor(private router: Router) {
    var timer = null
    this.loading = true
    this.playOpenSound()
    router.events.subscribe((event: Event) => {
      if (!(event instanceof NavigationStart)) {
        return;
      }
      let navigationUrl = event.url
      clearTimeout(timer)
      if (navigationUrl == '/') {
        timer = setTimeout(() => {
          this.loading = false
        }, 3000)
      } else {
        this.loading = false
      }
    })
  }

  private playOpenSound() {
    let audio = new Audio('/assets/sounds/opening_sound.mp3')
    audio.autoplay = true
    audio.muted = true
    audio.play()
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
