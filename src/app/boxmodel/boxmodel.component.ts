import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boxmodel',
  templateUrl: './boxmodel.component.html',
  styleUrls: ['./boxmodel.component.css']
})
export class BoxmodelComponent {
  title='MyNote';
  constructor(private router:Router){}
  logout()
  {
    this.router.navigate(['/login']);
  }
}
