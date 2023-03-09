import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { IcountryDetails } from 'src/app/Model/ICountryDetails';
import {GetCountryNameService} from 'src/app/Service/get-country-name.service'

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements OnInit,OnDestroy {
  showSpinner!:boolean;
  searchInput:FormControl=new FormControl();
  showContent:boolean=false;
  showError!:boolean;
  constructor(private _getContry:GetCountryNameService) { }
  countryDetails!:Array<IcountryDetails>;
  ngOnInit(): void {
    if(this._getContry.childData!=undefined&& this._getContry.childData!=""){
      this.searchInput.patchValue(this._getContry.childData);
      this.getFormattedCountryDetails();
    }
  }
  search(){
    this.getFormattedCountryDetails();
  }

  getFormattedCountryDetails(){
    this.showSpinner=true;
    let url="https://restcountries.com/v3.1/name/"+this.searchInput.value;
    this._getContry.getCountryDetails(url).subscribe(
      {
        next:(value)=>{
          this.showSpinner=false;
          this.countryDetails=value;
          this.showContent=true;
          const nativeName = this.countryDetails[0].languages;
          const regionalName = this.countryDetails[0].name.nativeName[Object.keys(nativeName)[0] as keyof typeof nativeName];
          this.countryDetails[0].regionalName = regionalName["official" as keyof typeof regionalName];
          const currency = this.countryDetails[0].currencies;
          this.countryDetails[0].currency = Object.values(currency)[0];
          this.countryDetails[0].language = Object.values(this.countryDetails[0].languages).join(",");
          this.countryDetails[0].giniString = (this.countryDetails[0].gini!=null)?Object.values(this.countryDetails[0].gini).join(","):"";
          console.log(this.countryDetails[0]);
        },
        error:(err)=>{
          this.showSpinner=false;
          this.showError=true;
          console.log(err.message);
        }
      }
    )
  }
  ngOnDestroy(): void {
    this._getContry.childData="";
  }

}
