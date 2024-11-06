import { Component } from '@angular/core';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { EPerson } from '../../shared/interfaces/person';

@Component({
  selector: 'app-component-output-example',
  standalone: true,
  imports: [SimpleDatatableComponent],
  templateUrl: './component-output-example.component.html',
  styleUrl: './component-output-example.component.css'
})
export class ComponentOutputExampleComponent {
  showPersonClicked(person: EPerson) {
    // alert(JSON.stringify(person))
    alert(this.personTemplate(person))
  }
  personTemplate(person: EPerson) {
    return `
    Person Details

    Firstname: ${person.givenName}
    Lastname: ${person.surname}
    Age: ${person.age}
    Email: ${person.email}
    `
  }
}
