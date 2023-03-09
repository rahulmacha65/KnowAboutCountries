export interface IcountryDetails{
    name:CountryNames;
    languages:Object;//get values and flat to string
    regionalName:string;
    cca2:string;//contry code
    currencies:Object;
    currency:Currency;
    idd:TelephoneCode;
    capital:Array<string>;// flat to string 
    startOfWeek:string;
    coatOfArms:{png:string};
    region:string;
    subregion:string;
    continents:Array<string>;//flat to string
    borders:Array<string>;
    area:number;//sq.km
    timezones:Array<string>;//flat to string;
    car:{side:string};
    population:number;//in million
    gini:Object;
    flags:{svg:string};
    latlng:Array<number>;
    language:string;
    giniString:string;
}

export class CountryNames{
    official!:string;
    nativeName!:Object;
    common!:string;
}
export class Currency{
    name!:string;
    symbol!:string
}
export class TelephoneCode{
    root!:string;
    suffixes!:Array<string>;
}
