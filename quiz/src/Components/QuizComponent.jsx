import React, { Component } from 'react'
import './QuizStyle.css'

export default class QuizComponent extends Component {
  render() {
    return (
      <div>
        <div className="playArea">
            <h1 className='head'>Question</h1>
            <h4>1 of 15</h4>
            <h3 className='question'>Which is only mammal that can jump?</h3>
            <div className='options'>
                <button className="option">Dog</button>
                <button className="option">Elephant</button>
                <button className="option">Goat</button>
                <button className="option">Lion</button>
            </div>
            <div className='buttons'>
                <button className='previous'>Previous</button>
                <button className='next'>Next</button>
                <button className='quit'>Quit</button>
            </div>
        </div>
      </div>
    )
  }
}
