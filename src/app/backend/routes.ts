import { error, ok, sendJSON } from './helpers';
import { Goods } from '../core/models/goods.interface';

import { goods } from './data/goods';

export function getGoods() {
    return ok<Goods[]>(goods);
}