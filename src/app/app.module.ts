import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestComponent } from './components/request/request/request.component';
import { FormsModule }   from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ResponseComponent } from './components/response/response/response.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { LoaderComponent } from './components/loader/loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RequestComponent,
    ResponseComponent,
    LoaderComponent,


  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, { provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
