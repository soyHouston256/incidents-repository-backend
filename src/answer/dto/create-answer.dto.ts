export class CreateAnswerDto {
  id: number;
  region: string;
  province: string;
  district: string;
  gender?: string;
  kindBussines?: string;
  explain?: string;
  date?: string;
  report?: string;

  constructor(data: Partial<CreateAnswerDto>) {
    Object.assign(this, data);
  }
}
