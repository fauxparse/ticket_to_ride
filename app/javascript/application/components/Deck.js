import React from 'react'

export default class Deck extends React.Component {
  render() {
    return (
      <section className="deck">
        <div className="card"><div className="back"/></div>
        <div className="card"><div className="back"/></div>
        <div className="card"><div className="back"/></div>
      </section>
    )
  }
}
