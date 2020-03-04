import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { students } from '../Shared/Student';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student;
    
  stu_id:string;
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

           this.route.paramMap.subscribe(params =>{

              this.student = students[params.get('id')];
              console.log(this.student);
                          
          
      });

      

  }
}
