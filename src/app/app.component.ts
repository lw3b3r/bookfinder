import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() search: string = '';
  title = 'bookfinder';

  // TODO: Implement searchBooks() method
  public searchBooks() {}
}
