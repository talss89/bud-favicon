import type BudFavicon from './extension.js';
declare module '@roots/bud-framework' {
    interface Modules {
        'bud-favicon': BudFavicon;
    }
    interface Bud {
        favicon: BudFavicon;
    }
}
