// Copyright 2017-2024 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Not used/included in index.ts as of https://github.com/Uomi-network/uomi-substrate-explorer/pull/9243

import type { OverrideBundleDefinition } from '@polkadot/types/types';

import { options } from '@fragnova/api-augment';

export default {
  ...options,
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types: options.types
    }
  ]
} as OverrideBundleDefinition;
