import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntroComponent } from './pages/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,

    LandingPageComponent,
    NavbarComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
