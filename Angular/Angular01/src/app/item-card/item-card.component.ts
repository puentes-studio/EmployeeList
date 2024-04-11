import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css',
})
export class ItemCardComponent {
  @Input() employee: any;
  @Output() employeeSelected = new EventEmitter<Employee>();

  @ContentChild('contentProjectionRef') contentProjectionRef: any;

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: any) {
    console.log('ngOnChanges - ItemCardComponent', changes);
  }

  ngOnInit() {
    console.log('ngOnInit - ItemCardComponent');
    console.log('Important to connect with back, or check Important 90%');
  }

  ngOnCheck() {
    console.log('ngOnCheck - ItemCardComponent');
    console.log('Method to check manual changes, Important 10% ');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit - ItemCardComponent');
    console.log('For proyected content @contentChild - @contentChildren');
  }

  ngContentChecked() {
    console.log('Verifica contenido del componente con ngOnChanges');
  }

  onEmployeeChecked(currentEmployee: Employee) {
    this.employeeSelected.emit(currentEmployee);
  }

  onCheckRank(rank: string) {
    if (rank === 'senior') {
      return { textDecoration: 'underline' };
    } else {
      return null;
    }
  }

  ngAfterViewInit() {
    console.log('rEF pROJECTED');
    console.log(this.contentProjectionRef);
  }
}
