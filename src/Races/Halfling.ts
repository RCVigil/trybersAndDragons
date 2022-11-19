import Race from './Race';

class Halfling extends Race {
  private _maxLifeHalfling: number;
  private static instancesCount = 0;
  
  constructor(name: string, dexterity: number, maxLife = 60) {
    super(name, dexterity);
    this._maxLifeHalfling = maxLife;
    Halfling.instancesCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifeHalfling;
  }

  static createdRacesInstances(): number {
    return this.instancesCount;
  }
}

export default Halfling;