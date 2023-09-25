import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {_id: '1', name: 'Angular', category: 'front-end'},
    {_id: '2', name: 'React', category: 'front-end'},
    {_id: '3', name: 'NextJS', category: 'front-end'},
    {_id: '4', name: 'PHP', category: 'back-end'},
    {_id: '5', name: 'Java', category: 'back-end'},
    {_id: '6', name: 'Vue', category: 'front-end'},
    {_id: '1', name: 'NodeJS', category: 'back-end'},
  ];
  displayedColumns = ['_id', 'name', 'category'];

  constructor() {
    // opcional, caso não seja inicializado na criação
    // this.courses = [];

  }

  ngOnInit(): void {

  }
}
