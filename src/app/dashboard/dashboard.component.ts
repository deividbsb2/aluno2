import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { NewsletterService } from '../newsletter.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  readonly VAPID_PUBLIC_KEY = 'BM4aBw57wuiFGY6MHvgEv2KvBbdD2LgH644l89w6fY3d5A8G5xful4P3d6tyoAvlt_JsuhgsYIDeYIjuuZI5DXU';
  sub: PushSubscription;
  notifyForm: FormGroup;
  constructor(private swPush: SwPush, private newsletterService: NewsletterService) { }
  ngOnInit() {
    this.notifyForm = new FormGroup({
      mensagem: new FormControl('', Validators.required)
    });
  }

  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => {
        this.sub = sub;
        this.newsletterService.addPushSubscriber(sub).subscribe(
          () => console.log('Sent push subscription object to server.'),
          err => console.log('Could not send subscription object to server, reason: ', err)
        );
      })
      .catch(err => console.error('Could not subscribe to notifications', err));
  }
  sendNewsletter() {
    this.newsletterService.send(this.notifyForm.value).subscribe();
    this.notifyForm.reset();
  }
}
