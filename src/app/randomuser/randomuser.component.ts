import { Component, OnInit } from '@angular/core';
import { Myuser } from 'src/models/myusers';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-randomuser',
  templateUrl: './randomuser.component.html',
  styleUrls: ['./randomuser.component.css']
})
export class RandomuserComponent implements OnInit{

  users:Myuser[] = []
  user:any
  bgColor : string = 'grey';
  constructor(private api:ApiService){ }

  ngOnInit(): void {
    this.getusers()
  }

  getusers(){
     this.api.getAllusers().subscribe((data:any)=>{
      console.log(data);
      this.users = data.users;
      console.log(this.users);
      this.getrandomUsers()
     
      
     })
  }

  getrandomUsers(){
    var index = Math.floor(Math.random() * this.users.length) + 1;
    this.user = this.users[index];
   /*  console.log(this.user);
    console.log(this.user.firstName);
     */
    this.bgColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

    }

}
