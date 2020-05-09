import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo';
@Pipe({
  name: 'titlepipe'
})
export class TitlepipePipe implements PipeTransform {

  transform(items: Array<Todo>, filter: string): Array<Todo> {
    if (!items || !filter) {
        return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(todo => todo.Title.toLowerCase().includes(filter.toLowerCase()));
}
}
