import { Meta } from '../models/meta';
import { Link } from '../models/link';
import { Currency } from '../models/currency';

export class CurrencyWithMeta {
    data: Currency[];
    links: Link;
    meta: Meta;
}