import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: "Ahmed", age: 24, job: "Front end developer" },
    { name: "Mohamed", age: 25, job: "Back end developer" },
    { name: "Ali", age: 22, job: "Designer" }
  ];

  headers = [
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "job", label: "Job" }
  ];
  constructor() { }

  ngOnInit() {
  }

}
