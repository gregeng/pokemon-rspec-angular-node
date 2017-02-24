import { DatePipe } from '@angular/common';
const datePipe = new DatePipe("MST");

export class Pokemon {
  constructor(
    public id: number,
    public name: string,
    public elementType: string,
    public age,
    public sex: string
  ) { }

  get presentedAge() {
    return datePipe.transform(this.age, "MM/dd/yyyy");
  }

  get presentedAgeWithoutPipe() {
    const date = new Date(parseInt(this.age));

    return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
  }
}
