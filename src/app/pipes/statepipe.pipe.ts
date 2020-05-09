import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo';
@Pipe({
  name: 'statepipe'
})
export class StatepipePipe implements PipeTransform {

  transform(items: Array<Todo>, filter: string): Array<Todo> {
    if (!items || !filter) {
        return items;
    }
      if(filter == '-1')
        return items;
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(todo => todo.State == ((filter == '1') ? true : false));
}
}
