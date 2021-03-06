/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule DrawCardMutation.graphql
 * @generated SignedSource<<04beab5be141552f0b95dfa6ed971dd7>>
 * @relayHash a14052ed3bc677871cf70126dbb7c80d
 * @flow
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type DrawCardInput = {
  gameId?: ?string;
  player?: ?number;
};

export type DrawCardMutationResponse = {
  cardEdge?: ?DrawCardMutationResponse_cardEdge;
  viewer?: ?DrawCardMutationResponse_viewer;
};

export type DrawCardMutationResponse_cardEdge_node = {
  id: string;
  color: "PINK" | "WHITE" | "BLUE" | "YELLOW" | "ORANGE" | "BLACK" | "RED" | "GREEN" | "WILD";
  position: number;
};

export type DrawCardMutationResponse_cardEdge = {
  __typename: string;
  cursor: string;
  node?: ?DrawCardMutationResponse_cardEdge_node;
};

export type DrawCardMutationResponse_viewer = {
  gameId: string;
};
*/


/*
mutation DrawCardMutation(
  $input: DrawCardInput!
) {
  drawCard(input: $input) {
    cardEdge {
      __typename
      cursor
      node {
        id
        color
        position
      }
    }
    viewer {
      gameId
      ...Hand_viewer
      ...PlayerList_viewer
      id
    }
  }
}

fragment Hand_viewer on Game {
  player {
    position
    hand(first: 100) {
      edges {
        position
        node {
          id
          color
          ...Card_card
          __typename
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
}

fragment PlayerList_viewer on Game {
  players {
    edges {
      node {
        ...Player_player
        id
      }
    }
  }
  player {
    position
  }
}

fragment Player_player on Player {
  position
  name
  handSize
}

fragment Card_card on Card {
  id
  color
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "DrawCardInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "DrawCardMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "DrawCardInput!"
          }
        ],
        "concreteType": "DrawCardPayload",
        "name": "drawCard",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "CardEdge",
            "name": "cardEdge",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Card",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "color",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "position",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Game",
            "name": "viewer",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "gameId",
                "storageKey": null
              },
              {
                "kind": "FragmentSpread",
                "name": "Hand_viewer",
                "args": null
              },
              {
                "kind": "FragmentSpread",
                "name": "PlayerList_viewer",
                "args": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "DrawCardMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "DrawCardInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "DrawCardMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "DrawCardInput!"
          }
        ],
        "concreteType": "DrawCardPayload",
        "name": "drawCard",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "CardEdge",
            "name": "cardEdge",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Card",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "color",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "position",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Game",
            "name": "viewer",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "gameId",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "PlayerView",
                "name": "player",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "position",
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "first",
                        "value": 100,
                        "type": "Int"
                      }
                    ],
                    "concreteType": "CardPositionConnection",
                    "name": "hand",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "CardPositionEdge",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "position",
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "Card",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "id",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "color",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "__typename",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "cursor",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "PageInfo",
                        "name": "pageInfo",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "endCursor",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "hasNextPage",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "hasPreviousPage",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "startCursor",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "hand{\"first\":100}"
                  },
                  {
                    "kind": "LinkedHandle",
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "first",
                        "value": 100,
                        "type": "Int"
                      }
                    ],
                    "handle": "connection",
                    "name": "hand",
                    "key": "Hand_hand",
                    "filters": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "PlayerConnection",
                "name": "players",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "PlayerEdge",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Player",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "position",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "name",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "handSize",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "id",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation DrawCardMutation(\n  $input: DrawCardInput!\n) {\n  drawCard(input: $input) {\n    cardEdge {\n      __typename\n      cursor\n      node {\n        id\n        color\n        position\n      }\n    }\n    viewer {\n      gameId\n      ...Hand_viewer\n      ...PlayerList_viewer\n      id\n    }\n  }\n}\n\nfragment Hand_viewer on Game {\n  player {\n    position\n    hand(first: 100) {\n      edges {\n        position\n        node {\n          id\n          color\n          ...Card_card\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n}\n\nfragment PlayerList_viewer on Game {\n  players {\n    edges {\n      node {\n        ...Player_player\n        id\n      }\n    }\n  }\n  player {\n    position\n  }\n}\n\nfragment Player_player on Player {\n  position\n  name\n  handSize\n}\n\nfragment Card_card on Card {\n  id\n  color\n}\n"
};

module.exports = batch;
