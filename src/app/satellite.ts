export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    constructor(name: string, type: string, orbitType: string, launchDate: string, operational: boolean){
        this.name = name
        this.type = type
        this.orbitType = orbitType
        this.launchDate = launchDate
        this.operational = operational


    }
    shouldShowWarning = () => {
    if (this.type.toLowerCase() === 'Space Debris'.toLowerCase()) {
        return true;
  
      } 
      else {
        return false;
      }
    }
}

