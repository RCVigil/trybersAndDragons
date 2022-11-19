import Race from './Race';

class Dwarf extends Race {
  private _maxLifeDwarf: number;
  private static instancesCount = 0;
  
  constructor(name: string, dexterity: number, maxLife = 80) {
    super(name, dexterity);
    this._maxLifeDwarf = maxLife;
    Dwarf.instancesCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifeDwarf;
  }

  static createdRacesInstances(): number {
    return this.instancesCount;
  }
}

export default Dwarf;