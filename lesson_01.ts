// интерфейс пользователя (описание поведения для класса)
interface IUser {
  name: string;
  age: number;
  sayHello(): void;
}

/**
 * Обрати внимание на то что интерфейс реализуется в классе (прикрепляется к классу)
 * с помощью ключевого слова implements;
 * При реализации интерфейса мы должны создать все поля и методы которые описали в нем;
 * 
 * Также посмотри на то что тут мы реализовали пример ИНКАПСУЛЯЦИИ
 * это когда мы можем читать(видеть) нашу переменную снаружи (т.е. за пределами класса),
 * но не можем редактировать ее;
 */
// класс пользователя
class User implements IUser {
  // приватное поле(переменна) для имени
  private _name: string;
  // приватное поле(переменна) для возраста
  private _age: number;

  /**
   * геттер - это функция возвращающая значение,
   * которое мы не можем поменять.
   */
  // геттер для имени
  get name() {
    return this._name;
  }
  // геттер для возраста
  get age() {
    return this._age;
  }

  // конструктор(фабрика) для создания класса
  constructor(userName: string, userAge:number) {
    // назначаем данные для переменных из входных параметров
    this._name = userName;
    this._age = userAge;
  }

  // функция которая выведет информацию о пользователе
  sayHello(): void {
    console.log(`[User] name: ${this.name}, age: ${this.age}`);
  }
}

// создаем пользователя
const user1 = new User('Anna', 22);
// выводим информацию о пользователе в консоль
user1.sayHello()
