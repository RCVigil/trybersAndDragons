import Race from './Race';

class Orc extends Race {
  private _maxLifeOrc: number;
  private static instancesCount = 0;
  
  constructor(name: string, dexterity: number, maxLife = 74) {
    super(name, dexterity);
    this._maxLifeOrc = maxLife;
    Orc.instancesCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifeOrc;
  }

  static createdRacesInstances(): number {
    return this.instancesCount;
  }
}

export default Orc;