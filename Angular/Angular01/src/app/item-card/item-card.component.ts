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
