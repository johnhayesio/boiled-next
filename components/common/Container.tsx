// Import packages
import { NextPage } from 'next'

export const Container: NextPage = ({ children }) => (
  <>
    <div className="container">
      {children}

      <style jsx>
        {`
          .container {
            max-width: 128rem;
            margin: 0 auto;
            padding: 3rem;
            overflow: auto;
          }
        `}
      </style>
    </div>
  </>
)
