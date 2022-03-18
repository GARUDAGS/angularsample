import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from '../Model';
import { RandomUserService } from '../Service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  errorMessage: any;
  users!: UserInfo;
  private _planService;
  constructor(private planService: RandomUserService) {
  this._planService = planService;
  }

  ngOnInit(): void {
    this.getUserInfo();
  }
  getUserInfo()
  {
    this._planService.getEntities().subscribe(heroes=> this.users = heroes);
    console.log(JSON.stringify(this.users));
  }
  nextUser(){
    this.getUserInfo()
  }
      
}

