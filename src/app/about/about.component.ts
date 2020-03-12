import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { students } from '../shared/student';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  temp:string = "Darshit";
 
  students = students;
  

  myClickFunction() { 
                  
    //alert("Clicked on "+student.stu_name);

         
  }
  
  

  constructor() {

  }

  

  ngOnInit(): void {
  
    
  }

}


