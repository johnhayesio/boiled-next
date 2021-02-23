// Import pacakges
import axios from 'axios'
import PropTypes from 'prop-types'

// Import commons
import { Container } from '../components/common'

const Home = ({ launch: { mission, site, timestamp, rocket, details } }) => {
  const date = new Date(timestamp)

  return (
    <div className="wrapper">
      <Container>
        <h1>Next SpaceX Launch: {mission}</h1>
        <p>{details}</p>
        <p>
          {rocket} will take off from {site}
        </p>
        <p>
          This launch is scheduled for {date.toDateString()} at {date.toTimeString()}
        </p>
      </Container>

      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
      `}</style>
    </div>
  )
}

// Fetch next launch from SpaceX API
export const getServerSideProps = async () => {
  const nextLaunch = await axios
    .get('https://spacelaunchnow.me/api/3.5.0/launch/upcoming/?search=SpaceX')
    .then(res => res.data.results[0])

  return {
    props: {
      launch: {
        mission: nextLaunch.mission.type,
        details: nextLaunch.mission.description,
        timestamp: nextLaunch.net,
        rocket: nextLaunch.rocket.configuration.name,
        site: nextLaunch.pad.location.name,
      },
    },
  }
}

// Declare prop type validation
Home.propTypes = {
  launch: PropTypes.object.isRequired,
}

export default Home
