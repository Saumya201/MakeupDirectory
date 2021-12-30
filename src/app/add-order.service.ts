import { Injectable } from '@angular/core';
import { CurrentOrder } from './CurrentOrder';
import { OrderList } from './order-list';
import {Global} from './global';
@Injectable({
  providedIn: 'root'
})
export class AddOrderService {
  constructor() { }

  addToOrderList(order: CurrentOrder) {
    Global.order_history.orders.push(order);
  }
  getOrders() {
    return Global.order_history.orders;
  }
  clearCurrentOrder() {
    Global.order_history.orders = [];
    return Global.order_history.orders;
  }
}
