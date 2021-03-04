// Import elements
import { NextPage } from 'next'
import { Container } from 'components/common'

// Import consts
import { medium } from 'consts'

const Header: NextPage = () => {
  return (
    <div className="header">
      <Container>
        <h1>Next SpaceX Launch</h1>
      </Container>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: ${medium};
        }
      `}</style>
    </div>
  )
}

export default Header
