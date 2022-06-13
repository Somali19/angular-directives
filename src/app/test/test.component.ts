import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //ngIfElse
  isLogIn : boolean = false;
  isLogOut : boolean = true;

  //ngFor
  list = [1,2,3,4,5];


  //trackBy
  studentArr: any[] = [
    {
    "id": 1,
    "name": "student1"
    },
    {
    "id": 2,
    "name": "student2"
    },
    {
    "id": 3,
    "name": "student3"
    }, 
    {
      "id": 4,
      "name": "student4"
      }
      ];
      trackByData(index:number, studentArr:any): number {
      return studentArr.id;
      }

      //ngSwitch
      logInName = 'admin';

      //ngClass
      users: User[] = [
      {
      "userId": 1,
      "userName": 'User1'
      },
      {
      "userId": 2,
      "userName": 'User2'
      },
      ];

      //component directives

      name: string = 'Peter';
}

  


