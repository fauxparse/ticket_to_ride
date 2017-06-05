/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule FaceUpCards.graphql
 * @generated SignedSource<<ea4acec0daca5d845c3d29535cefb502>>
 * @flow
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type FaceUpCards = {|
  +face_up_cards: $ReadOnlyArray<?{| |}>;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FaceUpCards",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Card",
      "name": "face_up_cards",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Card",
          "args": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Game"
};

module.exports = fragment;
