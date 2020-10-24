import { error, ok, sendJSON } from './helpers';
import { Good } from '../core/models/goods.interface';

import { goods } from './data/goods';

export function getGoods() {
    return ok<Good[]>(goods);
}