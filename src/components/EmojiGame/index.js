/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import './index.css'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  render() {
    const {emojisList} = this.props

    return (
      <div className="bg-con">
        <NavBar />
        <ul className="emojisCon">
          {emojisList.map(eachList => (
            <EmojiCard key={eachList.id} emojisFace={eachList} />
          ))}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
