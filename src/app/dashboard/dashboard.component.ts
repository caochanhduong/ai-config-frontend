import { Component, OnInit } from '@angular/core';
import {Account, Map} from '../app.models';
import {AccountService} from '../account.service';
import { MapService } from '../map.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchIdStr: string;
  searchAccountNameStr: string;
  searchAiTypeAccountStr: string;
  searchStartTimeStr: string;
  searchDurationStr: string;
  searchEndTimeStr: string;
  searchAiNameStr: string;
  searchAiTypeMapStr: string;
  accountResult: Account[];
  mapResult: Map[];
  constructor(    
      private accountService: AccountService,
      private mapService: MapService
    ) {
    this.searchIdStr = '';
    this.searchAccountNameStr = '';
    this.searchAiTypeAccountStr = '';
    this.searchStartTimeStr = '';
    this.searchDurationStr = '';
    this.searchEndTimeStr = '';
    this.searchAiNameStr = '';
    this.searchAiTypeMapStr = '';
    this.accountResult = [];
    this.mapResult = [];
   }

  ngOnInit(): void {
  }
  searchAccount(): void {
    if ( this.searchIdStr === '') {
      this.searchIdStr = '0';
    }
    if ( this.searchAccountNameStr === '') {
      alert('Không để trống thông tin tên Tên tài khoản');
      return;
    }
    if ( this.searchAiTypeAccountStr === '') {
      this.searchAiTypeAccountStr = '0';
    }
    if ( this.searchStartTimeStr === '') {
      this.searchStartTimeStr = '0';
    }
    if ( this.searchDurationStr === '') {
      this.searchDurationStr = '0';
    }
    if ( this.searchEndTimeStr === '') {
      this.searchEndTimeStr = '0';
    }
    var modelReq = new Account(+this.searchIdStr,this.searchAccountNameStr,+this.searchAiTypeAccountStr,+this.searchStartTimeStr,+this.searchDurationStr,+this.searchEndTimeStr);
    // console.log(this.searchAccountNameStr);
    // console.log(this.searchIdStr);
    // console.log(this.searchAiTypeAccountStr);
    // console.log(this.searchStartTimeStr);
    // console.log(this.searchDurationStr);
    // console.log(this.searchEndTimeStr);
    this.accountService.getAccountResult(modelReq).subscribe(
      (res) => {
          console.log("------------------res body")
          console.log(res.body);
          this.accountResult = res.body;
          
      }, (err) => {
          this.accountResult = [];
          console.log('could not get account', err);
      }
  );


  }
  searchMap(): void {
    if ( this.searchAiTypeMapStr === '') {
      this.searchAiTypeMapStr = '0';
    }
    if ( this.searchAiNameStr === '') {
      alert('Không để trống thông tin tên AI name');
      return;
    }
    var modelReq = new Map(+this.searchAiTypeMapStr, this.searchAiNameStr);

    // console.log(this.searchAiTypeMapStr);
    // console.log(this.searchAiNameStr);
    this.mapService.getMapResult(modelReq).subscribe(
      (res) => {
          console.log("------------------res body")
          console.log(res.body);
          this.mapResult = res.body;
          
      }, (err) => {
          this.mapResult = [];
          console.log('could not get map', err);
      }
  );
  }
}
