import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {

  person0: Person = {
    givenName: "Mike",
    surname: "Frrr",
    email: "mike@aueb.gr",
    age: 30
    
  }

  person1: Person = {
    givenName: "Mike2",
    surname: "Frrr2",
    email: "mik2e@aueb.gr",
    age: 302
    
  }
}
