import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Component/About/about/about.component';
import { CountryInfoComponent } from './Component/Country/country-info/country-info.component';
import { CountriesCodesComponent } from './Component/CountryCode/countries-codes/countries-codes.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'about',
    pathMatch:'full'
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'country',component:CountryInfoComponent
  },
  {
    path:'countryCodes',component:CountriesCodesComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
