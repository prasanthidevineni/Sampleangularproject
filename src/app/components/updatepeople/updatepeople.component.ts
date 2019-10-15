import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updatepeople',
  templateUrl: './updatepeople.component.html',
  styleUrls: ['./updatepeople.component.css']
})
export class UpdatepeopleComponent implements OnInit {
  person: {};
  constructor(public dataService: DataService, public router: Router) {
    this.person = this.dataService.data;
  }

  ngOnInit() {
  }
  edit(person) {
    this.dataService.data=person;
    this.router.navigateByUrl('/listofpeople');
  }
}
