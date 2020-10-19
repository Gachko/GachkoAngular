import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'currencyBYN'
})
export class CostPipe implements PipeTransform {
    transform(cost: number, currency: string = "BYN" ) {
        return cost + currency;
    }
}