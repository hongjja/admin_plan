import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { HomeComponent } from './home/home.component';
import { Http, HttpModule } from '@angular/http';
import { ServerAddr } from './services/server.addr';
import { AttrComponent } from './attr/attr.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AttrComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      },
      {
        path: 'home', // spot/home
        component: HomeComponent
      },
      {
        path: 'attr',
        component: AttrComponent
      },
      {
        path: 'image',
        component: ImageComponent
      }
    ]),
    HttpModule,
    FormsModule
  ],
  providers: [HttpService, ServerAddr],

  bootstrap: [AppComponent]
})
export class AppModule { }
