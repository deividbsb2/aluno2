import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { NewsletterService } from '../newsletter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  readonly VAPID_PUBLIC_KEY = 'BM4aBw57wuiFGY6MHvgEv2KvBbdD2LgH644l89w6fY3d5A8G5xful4P3d6tyoAvlt_JsuhgsYIDeYIjuuZI5DXU';
  sub: PushSubscription;
  constructor(private swPush: SwPush, private newsletterService: NewsletterService) { }

  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => {
        this.sub = sub;
        console.log('Notification Subscription: ', sub);
        this.newsletterService.addPushSubscriber(sub).subscribe(
          () => console.log('Sent push subscription object to server.'),
          err => console.log('Could not send subscription object to server, reason: ', err)
        );
      })
      .catch(err => console.error('Could not subscribe to notifications', err));
  }
  sendNewsletter() {
    console.log('Sending Newsletter to all Subscribers ...');
    this.newsletterService.send().subscribe();
  }
}
