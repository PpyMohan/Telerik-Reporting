import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newProject';
  viewerContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '600px',
    ['font-family']: 'ms sans serif'
  };
}
