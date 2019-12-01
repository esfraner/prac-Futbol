export class Posicion {
  private id: string;
  private description: string;
  constructor(id: string, description: string) {
    this.id = id;
    this.description = description;
  }
  get Id(): string {
    return this.id;
  }
  set Id(id: string) {
    this.id = id;
  }
  get Description(): string {
    return this.description;
  }
  set Description(description: string) {
    this.description = description;
  }
}
