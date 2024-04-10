export class Books {
  public id?: any;
  public name?: string;
  public author?: string;
  public genre?: string;
  public date?: string;

  constructor(
    id?: any,
    name?: string,
    author?: string,
    genre?: string,
    date?: string
  ) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.date = date;
  }
}
