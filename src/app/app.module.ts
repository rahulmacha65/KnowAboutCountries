import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { MapComponent } from './Component/map/map.component';
import { AppRoutingModule } from './app-routing.module';
import { CountryInfoComponent } from './Component/Country/country-info/country-info.component';
import { AboutComponent } from './Component/About/about/about.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { CountriesCodesComponent } from './Component/CountryCode/countries-codes/countries-codes.component'

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CountryInfoComponent,
    AboutComponent,
    CountriesCodesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
