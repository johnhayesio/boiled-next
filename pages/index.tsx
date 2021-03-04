// Import pacakges
import { GetServerSideProps } from 'next'
import axios from 'axios'

// Import elements
import { Container } from 'components/common'

interface Props {
  launch: {
    mission: string
    details: string
    timestamp: string
    rocket: string
    site: string
  }
}

const Home: React.FC<Props> = ({ launch: { mission, details, timestamp, rocket, site } }) => {
  const date = new Date(timestamp)

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Container>
        <h1 className="text-7xl py-3">Mission: {mission}</h1>
        <p className="text-4xl py-3">{details}</p>
        <p className="text-4xl py-3">
          {rocket} will take off from {site}
        </p>
        <p className="text-4xl py-3">
          This launch is scheduled for {date.toDateString()} at {date.toTimeString()}
        </p>
      </Container>
    </div>
  )
}

// Fetch next launch from SpaceX API
export const getServerSideProps: GetServerSideProps<Props> = async () => {
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
