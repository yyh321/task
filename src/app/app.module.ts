import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  MatSidenavModule} from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import {ProjectModule} from './project/project.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    LoginModule,
    ProjectModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
