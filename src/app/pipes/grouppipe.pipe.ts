import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo';
@Pipe({
  name: 'grouppipe'
})
export class GrouppipePipe implements PipeTransform {

  transform(items: Array<Todo>, filter: string): Array<Todo> {
    if (!items || !filter) {
        return items;
    }
    if(filter == '')
      return items;
      
    return items.filter(todo => {
      return (todo.Group == filter);
    });
}
}
