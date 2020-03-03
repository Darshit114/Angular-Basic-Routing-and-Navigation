export class Student{

    stu_id:string;
    stu_name:string;
    stu_branch:string;
    
    constructor(id?:string,name?:string,branch?:string){

        this.stu_id = id || "null";
        this.stu_name = name || "null";
        this.stu_branch = branch || "null";

    }
          

}