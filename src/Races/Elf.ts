import Race from './Race';

class Elf extends Race {
  private _maxLifeElf: number;
  private static instancesCount = 0;
  
  constructor(name: string, dexterity: number, maxLife = 99) {
    super(name, dexterity);
    this._maxLifeElf = maxLife;
    Elf.instancesCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifeElf;
  }

  static createdRacesInstances(): number {
    return this.instancesCount;
  }
}

export default Elf;