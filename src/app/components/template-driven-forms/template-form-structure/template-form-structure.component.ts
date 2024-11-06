import { Component, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EPerson } from '../../../shared/interfaces/person';

@Component({
  selector: 'app-template-form-structure',
  standalone: true,
  imports: [FormsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './template-form-structure.component.html',
  styleUrl: './template-form-structure.component.css'
})
export class TemplateFormStructureComponent implements AfterViewInit{
  @Output() person = new EventEmitter<EPerson>();
  @ViewChild('userForm', {static: false}) form: NgForm | undefined;

  ngAfterViewInit(): void {
      setTimeout(() => {
        if (this.form) {
          this.form.setValue({
            givenName: "Joey",
            surname: "Wheeler",
            age:20,
            email: "jwh@ygo.com"
          })
        }
      }, 0)
  }

  onSubmit(value: any) {
    console.log(value)
    console.log(this.form)
    this.person.emit(value);
  }

  onSetValues(){
    this.form?.setValue( {
      givenName: "Seto",
      surname: "Kaiba",
      age: 22,
      email: "skb@ygo.com"
    })
  }

}
