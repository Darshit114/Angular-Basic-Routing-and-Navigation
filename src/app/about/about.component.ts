import { Component, OnInit } from '@angular/core';
import { Student } from './Student';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  temp:string = "Darshit";
  stu_1:Student = new Student("1","Jeegar Vinodkumar","Computer Engineering");
  stu_2:Student = new Student("2","Dipak Bavaliya","Computer Engineering");
  stu_3:Student = new Student("3","Sandip Chauhan","Computer Engineering");
  stu_4:Student = new Student("4","Vishal Das","Computer Engineering");
  stu_5:Student = new Student("5","Jenish Dhanani","Computer Engineering");
  stu_6:Student = new Student("6","Ashish Domadiya","Computer Engineering");
  stu_7:Student = new Student("7","Jeel Faldu","Computer Engineering");
  stu_8:Student = new Student("8","Maulik Gajera","Computer Engineering");
  stu_9:Student = new Student("9","Vikas Gajera","Computer Engineering");
  stu_10:Student = new Student("10","Bhagirath Galathiya","Computer Engineering");

  studs:Student[] = [this.stu_1,this.stu_2,this.stu_3,this.stu_4
                    ,this.stu_5,this.stu_6,this.stu_7,
                      this.stu_8,this.stu_9,this.stu_10];
  

  myClickFunction(student) { 
                  
          alert("Clicked on "+student.stu_name);
          //console.log(event);
  }
  

  constructor() {

  }

  

  ngOnInit(): void {

  }

}


