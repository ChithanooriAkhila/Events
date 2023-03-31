// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, whenClicked} = props
  const {id, imageUrl, name, location} = eventDetails
  const checkRegistration = () => {
    whenClicked(id)
  }
  return (
    <li>
      <img
        src={imageUrl}
        alt="event"
        className="event-img"
        onClick={checkRegistration}
      />
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
