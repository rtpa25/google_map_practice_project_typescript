import faker from "faker";
import { Mappable } from "./CustomMap";


//the implements clause helps us tally that the user mathces the Mappable interface 
//when we declare the user class
export class Company implements Mappable{
  companyName: string;
  catchPhrase: string;
  location: {
    lat:number;
    lng:number;
  };

  constructor(){
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
  markerContent(): string {
    return `this is ${this.companyName} the company`
  }
}