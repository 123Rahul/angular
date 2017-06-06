import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<sample1></sample1>
              <data-table url="{{datatableUrl}}"></data-table>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  datatableUrl="http://localhost:5000/todo/api/v1.0/task/list";
}
