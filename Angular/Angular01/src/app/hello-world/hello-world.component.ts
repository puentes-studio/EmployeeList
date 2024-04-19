import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css',
})
export class HelloWorldComponent {
  public name: string = '';

  constructor(private router: Router) {} // Inject the Router service here

  onButtonClick() {
    // this.name = 'Beltran';
    this.router.navigate(['/helpcenter', { name: this.name }]);
  }
}
