// Клас Key
class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature() {
    return this.signature;
  }
}

// Клас Person
class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }
}

// Абстрактний клас House
abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log('Welcome home!');
    } else {
      console.log('The door is closed. You cannot come in.');
    }
  }
}

// Клас MyHouse успадковується від абстрактного класу House
class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('The door is open.');
    } else {
      this.door = false;
      console.log('The key does not match. The door remains closed.');
    }
  }
}

const key = new Key();
const myHouse = new MyHouse(key);
const person = new Person(key);

// Відкриваємо двері за допомогою ключа
myHouse.openDoor(person.getKey());

// Приймаємо людину в будинок
myHouse.comeIn(person);
