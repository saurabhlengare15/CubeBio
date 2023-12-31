import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MediaawardsComponent } from './mediaawards/mediaawards.component';
import { HistoryComponent } from './history/history.component';
import { CareerComponent } from './career/career.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DiretorsComponent } from './diretors/diretors.component';
import { InvestorsComponent } from './investors/investors.component';
import { IecComponent } from './iec/iec.component';
import { CsrComponent } from './csr/csr.component';
import { MunicipalSolidWasteComponent } from './municipal-solid-waste/municipal-solid-waste.component';
import { SolutionPageComponent } from './solution-page/solution-page.component';
import { CareerPageComponent } from './career-page/career-page.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'media-and-rewards',
    component:MediaawardsComponent,
    pathMatch:'full'
  },
  {
    path:'about/brifhistory',
    component:HistoryComponent,
    pathMatch:'full'
  },
  {
    path:'career',
    component:CareerPageComponent,
    pathMatch:'full'
  },
  {
    path:'contact-us',
    component:ContactUsComponent,
    pathMatch:'full'
  },
  {
    path:'about/board-of-directors',
    component:DiretorsComponent,
    pathMatch:'full'
  },
  {
    path:'about/investors-deck',
    component:InvestorsComponent,
    pathMatch:'full'
  },
  {
    path:'about/iec',
    component:IecComponent,
    pathMatch:'full'
  },
  {
    path:'about/csr',
    component:CsrComponent,
    pathMatch:'full'
  },
  {
    path:'solutions/:solution',
    component:MunicipalSolidWasteComponent
  },
  {
    path:'solutions',
    component:SolutionPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
