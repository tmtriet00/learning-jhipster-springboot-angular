import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Employee } from '../employees.model';
import { EmployeesService } from '../service/employees.service';

@Component({
  selector: 'jhi-employee-mgmt-delete-dialog',
  templateUrl: './employees-delete-dialog.component.html',
})
export class EmployeesDeleteDialogComponent {
  employee?: Employee;

  constructor(private employeeService: EmployeesService, private activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(login: string): void {
    this.employeeService.delete(login).subscribe(() => {
      this.activeModal.close('deleted');
    });
  }
}
