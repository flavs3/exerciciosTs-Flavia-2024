import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';
  showMore = false;

  toggleShowMore() {
    this.showMore = !this.showMore;
  }
}
