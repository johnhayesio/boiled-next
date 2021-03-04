// Import pacakges
import { GetServerSideProps } from 'next'
import tw, { css, theme } from 'twin.macro' // eslint-disable-line
import axios from 'axios'

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
    <div tw="flex flex-col justify-center items-center h-screen">
      <div css={css(theme`container`)}>
        <h1 tw="text-7xl py-3">Mission: {mission}</h1>
        <p tw="text-4xl py-3">{details}</p>
        <p tw="text-4xl py-3">
          {rocket} will take off from {site}
        </p>
        <p tw="text-4xl py-3">
          This launch is scheduled for {date.toDateString()} at {date.toTimeString()}
        </p>
      </div>
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
