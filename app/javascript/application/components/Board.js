import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import { forOwn, groupBy, toPairs, uniq } from 'lodash'
import classNames from 'classnames'

const ASPECT_RATIO = 3 / 2
const CITY_SIZE = 8
const CAR_LENGTH = 31
const GAP_SIZE = 6

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.width = 1000
    this.height = Math.floor(this.width / ASPECT_RATIO)
  }

  render() {
    const { cities, routes } = this.props.viewer.board
    const { selectedCards } = this.props
    const indexedCities = cities.reduce(
      (h, city) => ({ ...h, [city.key]: city }),
      {}
    )
    const colors = Array.from(selectedCards).map(({ color }) => color)
    const wilds = colors.filter(color => color == 'WILD').length
    const sets = uniq(colors.filter(color => color != 'WILD')).map(color => ({
      length: wilds + colors.filter(c => c == color).length,
      color
    }))
    if (wilds) sets.push({ length: wilds, color: 'WILD' })
    const groupedRoutes = groupBy(Array.from(routes), ({ cities }) => cities)

    return (
      <svg
        className="board"
        viewBox={`0 0 ${this.width} ${this.height}`}
        preserveAspectRatio="xMidYMid"
      >
        {toPairs(groupedRoutes).map(([key, group], i) => {
          let [a, b] = key.split(',').map(city => indexedCities[city])
          let axy = this.coordinates(a.x, a.y)
          let bxy = this.coordinates(b.x, b.y)
          return (
            <BoardRouteGroup
              key={i}
              a={{ city: a, ...axy }}
              b={{ city: b, ...bxy }}
              routes={group}
              sets={sets}
            />
          )
        })}
        {cities.map(({ key, name, x, y }) => (
          <BoardCity
            key={key}
            id={key}
            name={name}
            {...this.coordinates(x, y)}
          />
        ))}
      </svg>
    )
  }

  coordinates(x, y) {
    return {
      x: (x * 0.95 + 0.025) * this.width,
      y: (y * 0.95 + 0.025) * this.height
    }
  }

  shortestRouteLength(routes, cities) {
    return Math.min.apply(
      undefined,
      routes
        .filter(({ length }) => length == 1)
        .map(route => this.routeLength(route, cities))
    )
  }

  routeLength(route, cities) {
    const c = route.cities.map(key =>
      this.coordinates(cities[key].x, cities[key].y))
    const dx = c[1].x - c[0].x
    const dy = c[1].y - c[0].y
    return Math.sqrt(dx * dx + dy * dy)
  }
}

const BoardCity = ({ name, id, x, y }) => (
  <g className="city" data-city-id={id} transform={`translate(${x}, ${y})`}>
    <circle cx={0} cy={0} r={CITY_SIZE} />
    <text textAnchor="middle" x={0} y={CITY_SIZE * -1.5}>{name}</text>
  </g>
)

const rotate = (a, n) => a.slice(n % a.length).concat(a.slice(0, n % a.length))

class BoardRouteGroup extends React.Component {
  render() {
    const { a, b, routes, sets } = this.props
    return (
      <g>
        {routes.map(({ color, length }, i) => {
          const [[x, y], [x2, y2]] = rotate([[a.x, a.y], [b.x, b.y]], i)
          const available = !sets.length ||
            sets.filter(
              set =>
                set.length >= length &&
                ((set.color == color) || (set.color == 'WILD') || (color == 'WILD'))
            ).length

          return (
            <BoardRoute
              key={i}
              available={available}
              {...{ x, y, x2, y2, length }}
              radius={this.curveRadius()}
              color={color.toLowerCase()}
            />
          )
        })}
      </g>
    )
  }

  idealPathLength() {
    const length = this.props.routes[0].length
    return (CAR_LENGTH + GAP_SIZE) * length + GAP_SIZE + CITY_SIZE * 2
  }

  crowDistance() {
    const { a: { x: x1, y: y1 }, b: { x: x2, y: y2 } } = this.props
    const dx = x2 - x1
    const dy = y2 - y1
    return Math.sqrt(dx * dx + dy * dy)
  }

  curveRadius() {
    const ideal = this.idealPathLength()
    const straight = this.crowDistance()

    if (ideal < straight) {
      return 0
    } else {
      let dMin = straight
      let dMax = 100000

      while (true) {
        let d = (dMin + dMax) / 2
        let c = d * Math.sin(ideal / d)
        if (c > straight + 0.001) {
          dMax = d
        } else if (c < straight - 0.001) {
          dMin = d
        } else {
          return d / 2
        }
      }
    }
  }
}

class BoardRoute extends React.Component {
  render() {
    const { x, y, x2, y2, color, length, radius, available } = this.props
    let path

    if (radius) {
      path = `M${x} ${y} A${radius} ${radius} 0 0 1 ${x2} ${y2}`
    } else {
      path = `M${x} ${y} L${x2} ${y2}`
    }

    return (
      <g className={classNames('route', { available })} data-color={color}>
        <path
          d={path}
          className="outline"
          ref={p => p && this.dashPath(p, 1)}
        />
        <path d={path} className="fill" ref={p => p && this.dashPath(p)} />
      </g>
    )
  }

  dashPath(path, offset = 0) {
    const { length } = this.props
    const pathLength = path.getTotalLength(path)
    const endGap = (pathLength -
      CAR_LENGTH * length -
      GAP_SIZE * (length - 1)) /
      2
    const dashArray = `0, ${endGap - offset}, ` +
      `${CAR_LENGTH + offset * 2}, ${GAP_SIZE - offset * 2}, `.repeat(
        length - 1
      ) +
      `${CAR_LENGTH + offset * 2}, ${endGap - offset}`
    path.style.strokeDasharray = dashArray
  }
}

export default createFragmentContainer(Board, {
  viewer: graphql`
    fragment Board_viewer on Game {
      player {
        hand(first: 100) @connection(key: "Board_hand") {
          edges {
            node {
              cardId
              color
            }
          }
        }
      }
      board {
        cities {
          key
          name
          x
          y
        }
        routes {
          cities
          length
          color
        }
      }
    }
  `
})
