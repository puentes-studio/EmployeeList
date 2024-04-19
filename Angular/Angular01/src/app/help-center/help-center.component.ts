import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrl: './help-center.component.css',
})
export class HelpCenterComponent implements OnInit {
  name: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve the name from the route parameters
    this.name = this.route.snapshot.paramMap.get('name') || '';
  }
}
