import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {  Router } from '@angular/router';
import { IcountryDetails } from 'src/app/Model/ICountryDetails';
import {GetCountryNameService} from 'src/app/Service/get-country-name.service'

@Component({
  selector: 'app-countries-codes',
  templateUrl: './countries-codes.component.html',
  styleUrls: ['./countries-codes.component.css']
})
export class CountriesCodesComponent implements OnInit {

  constructor(private _getCodes:GetCountryNameService,private _route:Router) { }
  countryCodes!:Array<IcountryDetails>;
  filteredCountryCodes:Array<IcountryDetails>=[];
  countryName:FormControl =new FormControl();
  showSpinner:boolean=true;
  showError!:boolean;

  ngOnInit(): void {
    const url:string="https://restcountries.com/v3.1/all"
    this.setCountryCodes(url);
  }

  filterCountryCodes(){
    this.filteredCountryCodes.splice(0);
    if(this.countryName.value!=""){
      this.countryCodes.filter(x =>{
        if(x.name.official.toUpperCase().includes(this.countryName.value.toUpperCase())){
          this.filteredCountryCodes.push(x);
        }
      })
    }
  }

  countrySelected(countryName:string){
    this._getCodes.childData = countryName;
    console.log(this._getCodes.childData);
    this._route.navigate(["/country"]);
    
  }

  setCountryCodes(url:string){
    this._getCodes.getCountryCodes(url).subscribe({
      next:(value)=>{
        this.showSpinner=false;
        const tempArray:any = value;
        this.countryCodes = tempArray;

      },
      error:(err)=>{
        this.showSpinner=false;
        this.showError=true;
        console.log(err);
      },
    })
  }
}


