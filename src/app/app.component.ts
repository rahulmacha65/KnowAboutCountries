import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  user:FormControl=new FormControl();
  userName:any;
  showModel!:boolean;
  ngOnInit(): void {
    if(sessionStorage.getItem("username")==null){
      this.showModel=true;
    }
    this.userName = sessionStorage.getItem("username");
  }
  hideModel(){
    this.showModel=false;
    sessionStorage.setItem("username",(this.user.value)??"KYC");
    this.userName = sessionStorage.getItem("username");
  }
}
