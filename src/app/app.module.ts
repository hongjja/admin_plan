import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { HomeComponent } from './home/home.component';
import { Http, HttpModule } from '@angular/http';
import { ServerAddr } from './services/server.addr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    HttpModule,
    FormsModule
  ],
  providers: [HttpService, ServerAddr],

  bootstrap: [AppComponent]
})
export class AppModule { }
