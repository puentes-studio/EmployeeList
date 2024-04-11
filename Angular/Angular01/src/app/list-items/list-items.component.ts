import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  viewChildren,
} from '@angular/core';
import { employees } from '../../assets/fixtures/employees';
import { Employee } from '../../models/employee';
import { books } from '../../assets/fixtures/books';
import { DatePipe } from '@angular/common';
import { ItemCardComponent } from '../item-card/item-card.component';
import { Subscription } from 'rxjs';
import { MockService } from '../services/mock.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css',
})
export class ListItemsComponent {
  // works as getElementbyID
  @ViewChild('todayRef') todayRef?: ElementRef;

  // RECOGE todos los objetos
  @ViewChildren('component')
  cards!: QueryList<ItemCardComponent>;

  // firstEmployee = '';
  // secondEmployee = '';
  // thirdEmployee = '';
  // fourthEmployee = '';
  selectedEmployee?: Employee;
  employeesList: any;
  today = new Date();
  booksList: any;
  datepipe: DatePipe = new DatePipe('en-US');
  tomorrow?: any;
  subscription?: Subscription;

  constructor(private mockService: MockService) {
    /*this.firstEmployee = employees[0];
    this.secondEmployee = employees[1];
    this.thirdEmployee = employees[2];
    this.fourthEmployee = employees[3];*/

    this.employeesList = employees;
    this.booksList = books;
    console.log('Here');
    console.log(this.todayRef?.nativeElement.innerText);
  }

  onEmployeeChecked(employee: Employee) {
    this.selectedEmployee = employee;
  }

  ngOnChanges(changes: any) {
    console.log('ngOnChanges - ItemCardComponent', changes);
  }

  ngOnInit() {
    // Metodo ideal para traer data de API
    this.subscription = this.mockService.getEmployees().subscribe((data) => {
      this.employeesList = data;
    });
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log(this.todayRef?.nativeElement.innerText);
    console.log(this.todayRef?.nativeElement.innerText);
    this.tomorrow = this.datepipe.transform(
      new Date(this.today.setDate(this.today.getDate() + 1)),
      'dd/MM/YYYY'
    );
    console.log('tomorrow');
    console.log(this.tomorrow);
    console.log(this.cards);
  }

  ngOnDestroy() {
    // to close the service and clean cache, navegation.
    console.log('onDestroy');

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
