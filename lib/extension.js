import { __decorate } from "tslib";
import { Extension } from '@roots/bud-framework/extension';
import { bind, label, expose } from '@roots/bud-framework/extension/decorators';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
let BudFavicon = class BudFavicon extends Extension {
    #faviconOptions = {};
    async make() {
        //@ts-ignore
        return new FaviconsWebpackPlugin(this.#faviconOptions);
    }
    setup(options) {
        this.#faviconOptions = options;
    }
};
__decorate([
    bind
], BudFavicon.prototype, "make", null);
__decorate([
    bind
], BudFavicon.prototype, "setup", null);
BudFavicon = __decorate([
    label(`bud-favicon`),
    expose(`favicon`)
], BudFavicon);
export default BudFavicon;
