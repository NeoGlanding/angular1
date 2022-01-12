import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-directives',
  templateUrl: './ngif-directives.component.html',
  styleUrls: ['./ngif-directives.component.css']
})
export class NgifDirectivesComponent implements OnInit {
  name: string = ''
  showName: boolean = false;

  onChangeInput(e: any) {
    this.name = e.target.value;
  }

  clickShowName() {
    this.showName = true
  }

  getColor() {
    return 'blue'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
