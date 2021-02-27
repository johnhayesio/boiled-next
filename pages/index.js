// Import pacakges
import tw, { css, theme } from 'twin.macro' // eslint-disable-line
import axios from 'axios'
import PropTypes from 'prop-types'

// Import elements
import { Container } from 'common'

const Home = ({ launch: { mission, site, timestamp, rocket, details } }) => {
  const date = new Date(timestamp)

  return (
    <div tw="flex flex-col justify-center items-center h-screen">
      <Container>
        <h1 tw="text-7xl py-3">Mission: {mission}</h1>
        <p tw="text-4xl py-3">{details}</p>
        <p tw="text-4xl py-3">
          {rocket} will take off from {site}
        </p>
        <p tw="text-4xl py-3">
          This launch is scheduled for {date.toDateString()} at {date.toTimeString()}
        </p>
      </Container>
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
