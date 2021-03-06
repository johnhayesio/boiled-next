// Import packages
import PropTypes from 'prop-types'

export const Container = ({ children }) => (
  <>
    <div className="container">
      {children}

      <style jsx>
        {`
          .container {
            max-width: 128rem;
            margin: 0 auto;
            padding: 1rem;
            overflow: auto;
          }
        `}
      </style>
    </div>
  </>
)

// Declare prop type validation
Container.propTypes = {
  children: PropTypes.node.isRequired,
}
