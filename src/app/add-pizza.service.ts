import { Injectable } from '@angular/core';
import { CurrentOrder } from './CurrentOrder';
import { Pizza } from './pizza';

@Injectable({
  providedIn: 'root'
})
export class AddPizzaService {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  current_order= new CurrentOrder();

  constructor() { }

  addToOrder(pizza: Pizza) {
    this.current_order.pizzas.push(pizza);
  }
  getPizzas() {
    return this.current_order.pizzas;
  }
  clearPizza(index){
    this.current_order.pizzas.splice(index,1);
  }
  clearCurrentOrder() {
    this.current_order.pizzas = [];
    return this.current_order.pizzas;
  }
}
