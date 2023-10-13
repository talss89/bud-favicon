import {Extension} from '@roots/bud-framework/extension'
import type {WebpackPluginInstance} from '@roots/bud-framework/config'

import {bind, label, expose} from '@roots/bud-framework/extension/decorators'

import FaviconsWebpackPlugin from 'favicons-webpack-plugin'

interface Options {}

@label(`bud-favicon`)
@expose(`favicon`)
export default class BudFavicon extends Extension<
  Options,
  WebpackPluginInstance
> { 
  
  #faviconOptions = {};

  @bind
  public override async make() {
    //@ts-ignore
    return new FaviconsWebpackPlugin(this.#faviconOptions)
  }

  @bind public setup(options) {
    this.#faviconOptions = options;
  }

}
