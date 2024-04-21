import { Component } from '@angular/core';

export const CC_PROJECT_INITIALS = 'clothes-store-template';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meat-store-template';

  ngOnInit() {

    document.documentElement.style.setProperty('--v-dynamic-primary', '#000');
    document.documentElement.style.setProperty('--v-dynamic-secondary', '#000');

  }

}

