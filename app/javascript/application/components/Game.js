import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'

import environment from '../environment'

class Game extends React.Component {
  render() {
    return (
      <div className="app">
        <QueryRenderer
          environment={environment}

          query={graphql`
            query GameUIQuery($gameId: ID!) {
              game(id: $gameId) {
                players {
                  edges {
                    node {
                      position
                      cards {
                        edges {
                          node {
                            color
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          `}

          variables={{gameId: this.props.id}}

          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              console.log(props)
              return <div>Loaded</div>
            } else {
              return <div>Loading</div>
            }
          }}
        />
      </div>
    )
  }
}

export default Game
