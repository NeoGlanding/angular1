import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-directives',
  templateUrl: './ngif-directives.component.html',
  styleUrls: ['./ngif-directives.component.css']
})
export class NgifDirectivesComponent implements OnInit {
  name: string = ''
  showName: boolean = false;
  serverOnline: boolean = false;

  src: string[] = ['Hello']

  onChangeInput(e: any) {
    this.name = e.target.value;
  }

  clickShowName() {
    this.showName = true
  }

  getColor() {
    return 'blue'
  }

  onlineServer() {
    this.serverOnline = true;
  }

  addSrv() {
    this.src.push('Jock')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
