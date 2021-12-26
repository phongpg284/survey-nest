export class CreateQuestionDto {
  title!: string;
  options!: [string];
  answer!: [number];
  type?: string;
  point!: number;
}
