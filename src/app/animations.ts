import {
    animate,
    animation,
    group,
    keyframes,
    style,
    transition,
    trigger
} from "@angular/animations";

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('HomePage => *', [
            animation(
                group([
                    animate(
                        '1000ms 0ms',
                        keyframes([
                            style({ opacity: 0, easing: 'ease', offset: 0 }),
                            style({ opacity: 1, easing: 'ease', offset: 0.5 }),
                            style({ opacity: 1, easing: 'ease', offset: 1 })
                        ])
                    ),
                    animate(
                        '1000ms 0ms',
                        keyframes([
                            style({ visibility: 'visible', transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 0 }),
                            style({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 1 })
                        ])
                    )
                ])
            )
        ]),
        transition('* => HomePage', [
            animation(
                group([
                    animate(
                        '1000ms 0ms',
                        keyframes([
                            style({ opacity: 1, transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0 }),
                            style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 0.5 }),
                            style({ opacity: 0, easing: 'ease', offset: 1 })
                        ])
                    ),
                    animate(
                        '1000ms 0ms',
                        keyframes([
                            style({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0 }),
                            style({ transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 0.5 })
                        ])
                    )
                ])
            )
        ])
    ])
