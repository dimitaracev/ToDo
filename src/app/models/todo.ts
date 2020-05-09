export class Todo {
  public Group : string;
  public Id: number;
  public Title: string;
  public Description: string;
  public State: boolean;
  constructor(Id: number, Title: string, Description: string, State: boolean, Group : string) {
    this.Id = Id;
    this.Title = Title;
    this.Description = Description;
    this.State = State;
    this.Group = Group;
  }
}
