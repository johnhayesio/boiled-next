// Import pacakges
import { Flex, Container, Heading, Text } from '@chakra-ui/react'
import axios from 'axios'
import PropTypes from 'prop-types'

const Home = ({ launch: { mission, site, timestamp, rocket, details } }) => {
  const date = new Date(timestamp)

  return (
    <Flex direction="column" justify="center" align="center" h="100vh">
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" py={2}>
          Mission: {mission}
        </Heading>
        <Text fontSize="xl" py={2}>
          {details}
        </Text>
        <Text fontSize="xl" py={2}>
          {rocket} will take off from {site}
        </Text>
        <Text fontSize="xl" py={2}>
          This launch is scheduled for {date.toDateString()} at {date.toTimeString()}
        </Text>
      </Container>
    </Flex>
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
