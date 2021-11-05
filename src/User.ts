//File name is User as we are going to export a class
import faker from "faker";
import { Mappable } from "./CustomMap";

//the implements clause helps us tally that the user mathces the Mappable interface 
//when we declare the user class
export class User implements Mappable{
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor(){
    this.name = faker.name.firstName();
    this.location = {
      //parseFloat converts strings to number
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return ` this is ${this.name} the user`
  }
}

//in ts never use default exports