// Import pacakges
import { GetServerSideProps, NextPage } from 'next'
import { Flex, Container, Heading, Text } from '@chakra-ui/react'
import axios from 'axios'

interface Props {
  launch: {
    mission: string
    site: string
    timestamp: string
    rocket: string
    details: string
  }
}

const Home: NextPage<Props> = ({ launch: { mission, site, timestamp, rocket, details } }) => {
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
