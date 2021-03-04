// Import pacakges
import { GetServerSideProps } from 'next'
import axios from 'axios'

// Import commons
import { Container } from 'components/common'

interface Props {
  launch: {
    mission: string
    site: string
    timestamp: string
    rocket: string
    details: string
  }
}

const Home: React.FC<Props> = ({ launch: { mission, site, timestamp, rocket, details } }) => {
  const date = new Date(timestamp)

  return (
    <div className="wrapper">
      <Container>
        <h1>Mission: {mission}</h1>
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

        h1 {
          font-size: 5rem;
        }

        p {
          font-size: 2rem;
          padding: 1rem 0;
        }
      `}</style>
    </div>
  )
}

// Fetch next launch from SpaceX API
export const getServerSideProps: GetServerSideProps = async () => {
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

export default Home
