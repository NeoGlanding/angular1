import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {

  serverName: string = 'Input a Server Name';
  inputNameServer: string = '';
  
  inputServerName(e: any) {
    this.inputNameServer = e.target.value
  }

  confirmServerName() {
    this.serverName = this.inputNameServer
  }

  constructor() { }

  ngOnInit(): void {
  }

}
