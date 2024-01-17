import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  render() {
    const {emojisFace} = this.props
    const {id, emojiName, emojiUrl} = emojisFace
    return (
      <li key={id}>
        <button type="button" className="button">
          <img src={emojiUrl} alt={emojiName} />
        </button>
      </li>
    )
  }
}

export default EmojiCard
