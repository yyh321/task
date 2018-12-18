import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkTheme = false;

  swithTheme(dark) {
    if (dark.checked) {
      this.darkTheme = true;
      console.log('there: ' + this.darkTheme);
    } else  {
      this.darkTheme = false;
    }
  }
}
