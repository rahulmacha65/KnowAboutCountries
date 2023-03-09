import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { count, Observable } from 'rxjs';
import { IcountryDetails } from '../Model/ICountryDetails';
import { CountryInfoComponent } from '../Component/Country/country-info/country-info.component';

@Injectable({
  providedIn: 'root'
})
export class GetCountryNameService {

  constructor(private _http:HttpClient) { }

  childData!:string;
  getCountryDetails(url:string):Observable<Array<IcountryDetails>>{
    return this._http.get<Array<IcountryDetails>>(url);
  }
  getCountryCodes(url:string){
    return this._http.get(url);
  }
}
