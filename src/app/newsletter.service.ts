import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  api = environment.api;
  constructor(private http: HttpClient) {
  }

  addPushSubscriber(sub: any) {
    return this.http.post(this.api + '/api/notifications', sub);
  }

  send(mensagem: any) {
    return this.http.post(this.api + '/api/newsletter', mensagem);
  }
}
