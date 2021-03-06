// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  Token
} from '@phosphor/coreutils';

/**
 * A runtime interface token for a widget registry.
 */
export
const IJupyterWidgetRegistry = new Token<IJupyterWidgetRegistry>('jupyter.extensions.jupyterWidgetRegistry');

/**
 * A registry of Jupyter Widgets.
 *
 * This is used by widget managers that support an external registry.
 */
export
interface IJupyterWidgetRegistry {
  /**
   * Register a widget module.
   */
  registerWidget(data: IWidgetRegistryData): void;
}

export
interface IWidgetRegistryData {
  /**
   * The widget module name.
   */
  name: string;

  /**
   * The widget module version.
   */
  version: string;

  /**
   * A map of object names to widget classes provided by the module.
   */
  exports: any;
}
