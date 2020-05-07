export class Todo {
  public Id: number;
  public Title: string;
  public Description: string;
  public State: boolean;
  constructor(Id: number, Title: string, Description: string, State: boolean) {
    this.Id = Id;
    this.Title = Title;
    this.Description = Description;
    this.State = State;
  }
}
