export class Employee {
  public id?: any;
  public name?: string;
  public age?: number;
  public description?: string;
  public iconUrl?: string;
  public gender?: string;
  public role?: string;
  public isActive?: boolean;
  public rank?: string;

  constructor(
    id?: any,
    name?: string,
    age?: number,
    description?: string,
    iconUrl?: string,
    gender?: string,
    role?: string,
    isActive?: boolean,
    rank?: string
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.description = description;
    this.iconUrl = iconUrl;
    this.gender = gender;
    this.role = role;
    this.isActive = isActive;
    this.rank = rank;
  }
}
