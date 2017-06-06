import React from 'react'

export default class Deck extends React.Component {
  render() {
    return (
      <section className="deck ticket-deck">
        <div className="card ticket"><div className="back"/></div>
        <div className="card ticket"><div className="back"/></div>
        <div className="card ticket"><div className="back"/></div>
      </section>
    )
  }
}
