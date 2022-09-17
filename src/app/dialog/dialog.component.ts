import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder , Validators} from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  employeeForm !: FormGroup
  constructor(private formbuilder : FormBuilder , private api : EmployeeService, private dialogref : MatDialogRef<DialogComponent>){ }


  ngOnInit(): void {
    this.employeeForm = this.formbuilder.group({
      employeeName : ['',Validators.required],
      email : ['', Validators.required]
    })
  }
  saveDetails(){
   if(this.employeeForm.valid){
    this.api.postemployeesDetails(this.employeeForm.value)
    .subscribe({
      next:(res)=>{
        alert("Data Added Successfully")
        this.employeeForm.reset();
        this.dialogref.close()
      }
    })
   }
  }
}
