import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { NgifDirectivesComponent } from './ngif-directives/ngif-directives.component';
import { ForComponentComponent } from './for-component/for-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestcomponentComponent,
    TwoWayDataBindingComponent,
    NgifDirectivesComponent,
    ForComponentComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
