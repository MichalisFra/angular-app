import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {

  users: Person[] = [
    {
      "givenName": "Thomas",
      "surname": "Rodriguez",
      "email": "thomas.rodriguez61@ymail.com",
      "age": 173
    },
    {
      "givenName": "Erin",
      "surname": "Allen",
      "email": "erin.allen@live.com",
      "age": 17
    },
    {
      "givenName": "Elizabeth",
      "surname": "Flores",
      "email": "elizabethflores@live.com",
      "age": 244
    },
    {
      "givenName": "Matthew",
      "surname": "Hughes",
      "email": "m.hughes93@outlook.com",
      "age": 75
    },
    {
      "givenName": "Andrew",
      "surname": "Flores",
      "email": "aflores@aol.com",
      "age": 56
    },
    {
      "givenName": "Jack",
      "surname": "Lee",
      "email": "jack36@gmail.com",
      "age": 238
    },
    {
      "givenName": "Abigail",
      "surname": "Powell",
      "email": "abigail_lynn_powell@outlook.com",
      "age": 1
    },
    {
      "givenName": "Katherine",
      "surname": "Jenkins",
      "email": "k_jenkins@ymail.com",
      "age": 200
    },
    {
      "givenName": "Joshua",
      "surname": "Jones",
      "email": "joshua.j.jones58@yahoo.com",
      "age": 83
    },
    {
      "givenName": "Isaac",
      "surname": "Alexander",
      "email": "ih@ymail.com",
      "age": 168
    }
  ]
}
