// Write your code here
import './index.css'

const registrationStatusConstants = {
  INITIAL: 'INITIAL',
  YET_TO_REGISTER: 'YET_TO_REGISTER',
  REGISTERED: 'REGISTERED',
  REGISTRATIONS_CLOSED: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props

  const initialView = () => (
    <p>Click on an event, to view its registration details</p>
  )

  const yetToRegister = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button">Register Here</button>
    </div>
  )

  const registered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const registrationsClosed = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-img"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  switch (registrationStatus) {
    case registrationStatusConstants.INITIAL:
      return initialView()
    case registrationStatusConstants.YET_TO_REGISTER:
      return yetToRegister()
    case registrationStatusConstants.REGISTERED:
      return registered()
    case registrationStatusConstants.REGISTRATIONS_CLOSED:
      return registrationsClosed()
    default:
      return initialView()
  }
}

export default ActiveEventRegistrationDetails
