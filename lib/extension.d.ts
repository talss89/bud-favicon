/// <reference types="webpack" />
import { Extension } from '@roots/bud-framework/extension';
import type { WebpackPluginInstance } from '@roots/bud-framework/config';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
interface Options {
}
export default class BudFavicon extends Extension<Options, WebpackPluginInstance> {
    #private;
    make(): Promise<FaviconsWebpackPlugin>;
    setup(options: any): void;
}
export {};
