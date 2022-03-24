import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Employee, IEmployee } from './employees.model';
import { EmployeesService } from './service/employees.service';
import { EmployeesComponent } from './list/employees.component';
import { EmployeesDetailComponent } from './detail/employees-detail.component';
import { EmployeesUpdateComponent } from './update/employees-update.component';

@Injectable({ providedIn: 'root' })
export class EmployeesResolve implements Resolve<IEmployee> {
  constructor(private service: EmployeesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IEmployee> {
    const id = route.params['login'];
    if (id) {
      return this.service.find(id);
    }
    return of(new Employee());
  }
}

export const EmployeesRoute: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    data: {
      defaultSort: 'employeeId,asc',
    },
  },
  {
    path: ':login/view',
    component: EmployeesDetailComponent,
    resolve: {
      user: EmployeesResolve,
    },
  },
  {
    path: 'new',
    component: EmployeesUpdateComponent,
    resolve: {
      user: EmployeesResolve,
    },
  },
  {
    path: ':login/edit',
    component: EmployeesUpdateComponent,
    resolve: {
      user: EmployeesResolve,
    },
  },
];
