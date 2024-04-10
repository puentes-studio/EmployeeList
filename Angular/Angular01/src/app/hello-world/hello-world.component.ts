import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css',
})
export class HelloWorldComponent {
  public name: string = 'Dominika';
  imageUrl: string = '';

  onButtonClick() {
    this.name = 'Beltran';
  }
}
