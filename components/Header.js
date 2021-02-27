// Import consts
import { medium } from 'consts'

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h1>Next SpaceX Launch</h1>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: ${medium};
        }

        .container {
          max-width: 120rem;
          margin: 0 auto;
          padding: 1.5rem 3rem;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default Header
