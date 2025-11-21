class Animal {
  //   name:string;
  //   species:string
  //   sound:string

  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {
    (this.name = name),
     (this.species = species), (this.sound = sound);
  }
  makesound() {
    console.log(this.sound);
  }
}
const animal1 = new Animal("cat", "mammal", "meow");
console.log(animal1.name);
