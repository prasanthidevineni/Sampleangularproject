import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-listpeople',
  templateUrl: './listpeople.component.html',
  styleUrls: ['./listpeople.component.css']
})
export class ListpeopleComponent implements OnInit {
  people = [
    { "id": 1, "name": "prasanthi", "age": 22, "gender": "Female", "mobilenumber": "123589647" },
    { "id": 2, "name": "Divya", "age": 23, "gender": "Female", "mobilenumber": "123589647" },
    { "id": 3, "name": "Gopi", "age": 18, "gender": "Male", "mobilenumber": "123589647" },
    { "id": 4, "name": "Sai", "age": 15, "gender": "Male", "mobilenumber": "123589647" },
    { "id": 5, "name": "Lakshmi", "age": 32, "gender": "Female", "mobilenumber": "123589647" },
    { "id": 6, "name": "Srinu", "age": 40, "gender": "Male", "mobilenumber": "123589647" },
  ];
  updatedperson: any;
  constructor(public router: Router, public dataService: DataService) {
    if (this.dataService.data) {
      this.updatedperson = this.dataService.data;
      for (var i = 0; i < this.people.length; i++) {
        if (this.updatedperson.id == this.people[i].id) {
          this.people[i] = this.updatedperson;
        }
      }
    }
  }

  ngOnInit() {
  }
  edit(member) {
    console.log(member);
    this.router.navigateByUrl('/updatepeople');
    this.dataService.data = member;
  }
  delete(member) {
    this.people.splice(this.people.indexOf(member), 1);
    //this.people = this.people;
    console.log(member);
  }
}
