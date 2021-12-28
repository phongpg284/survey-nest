interface IAnswers {
  selected: number[];
  point: number;
}

export class GetResultDto {
  answers: IAnswers[];
}
