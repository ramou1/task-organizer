import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Columbia Trading', url: '/folder/inbox', icon: 'mail' },
    { title: 'CG Vale', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Grupo Castelli', url: '/folder/favorites', icon: 'heart' },
    { title: 'Cerâmica Tatuí', url: '/folder/archived', icon: 'archive' },
    { title: 'Saúde na Cidade', url: '/folder/trash', icon: 'trash' },
    { title: 'Backlog', url: '/folder/spam', icon: 'warning' },
  ];
  constructor() {}
}
