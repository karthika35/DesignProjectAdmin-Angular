export class Ads {

  constructor(
    public id: number,
    public name: string,
    public address: string,
    public start_date: string,
    // public closing_date: Date,
    // public add_image: File,
    public payment_accept: Boolean,
  ) {  }

}
