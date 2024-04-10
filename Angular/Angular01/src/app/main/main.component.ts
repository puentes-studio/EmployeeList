import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  constructor(private _router: Router) {}

  onRedirect(path: string) {
    this._router.navigate([path]);
  }
}
