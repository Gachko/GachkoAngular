import { error, ok, sendJSON } from './helpers';
import { IGoods } from '../core/models/goods.interface';

import { goods } from './data/goods';

export function getGoods() {
    return ok<IGoods[]>(goods);
}