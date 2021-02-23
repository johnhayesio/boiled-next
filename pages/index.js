// Import pacakges
import axios from 'axios'
import PropTypes from 'prop-types'

const Home = ({ launch: { mission, site, timestamp, rocket, details } }) => {
  const date = new Date(timestamp)

  return (
    <div className="container">
      <div className="launch-data">
        <h1>Next SpaceX Launch: {mission}</h1>
        <p>{details}</p>
        <p>
          {rocket} will take off from {site}
        </p>
        <p>
          This launch is scheduled for {date.toDateString()} at {date.toTimeString()}
        </p>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .launch-data {
          max-width: 1100px;
        }
      `}</style>
    </div>
  )
}

// Fetch next launch from SpaceX API
export const getServerSideProps = async () => {
  const nextLaunch = await axios
    .get('https://api.spacexdata.com/v3/launches/next')
    .then(res => res.data)

  return {
    props: {
      launch: {
        mission: nextLaunch.mission_name,
        details: nextLaunch.details,
        timestamp: nextLaunch.launch_date_local,
        rocket: nextLaunch.rocket.rocket_name,
        site: nextLaunch.launch_site.site_name_long,
      },
    },
  }
}

// Declare prop type validation
Home.propTypes = {
  launch: PropTypes.object.isRequired,
}

// Component Styling
export default Home
