import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   constructor() {
  }
  formregister=new FormGroup(
    {
      "fullname": new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      "password": new FormControl('',Validators.required ),
      "date": new FormControl('',Validators.required),
      "email": new FormControl('',[Validators.required,Validators.email]),
    }
  );
  ngOnInit(): void {

  }

}
