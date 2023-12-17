import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderUpperComponent } from './header-upper/header-upper.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MediaawardsComponent } from './mediaawards/mediaawards.component';
import {MatIconModule} from '@angular/material/icon';
import { HistoryComponent } from './history/history.component';
import { MissionComponent } from './mission/mission.component';
import { CareerComponent } from './career/career.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { MunicipalSolidWasteComponent } from './municipal-solid-waste/municipal-solid-waste.component';
import { DiretorsComponent } from './diretors/diretors.component';
import { InvestorsComponent } from './investors/investors.component';
import { IecComponent } from './iec/iec.component';
import { CsrComponent } from './csr/csr.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderUpperComponent,
    FooterComponent,
    HomeComponent,
    MediaawardsComponent,
    HistoryComponent,
    MissionComponent,
    CareerComponent,
    ContactUsComponent,
    MunicipalSolidWasteComponent,
    DiretorsComponent,
    InvestorsComponent,
    IecComponent,
    CsrComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    SlickCarouselModule,
    MatIconModule,
    CommonModule,
    HttpClientModule,
    // SolutionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
