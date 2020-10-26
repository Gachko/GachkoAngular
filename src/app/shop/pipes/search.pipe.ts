import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(users, value) {
        return users.filter( user => {
            value = value.toLowerCase();
            user.author = user.author.toLowerCase();
            return user.author.includes(value)
        } )
    }
}