export class CreateAnswerDto {
  id: number;
  region: string;
  province: string;
  district: string;
  gender?: string;
  kindBusiness?: string;
  explain?: string;
  date?: string;

  constructor(data: Partial<CreateAnswerDto>) {
    Object.assign(this, data);
  }
}
