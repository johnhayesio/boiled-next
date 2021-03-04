export const Container: React.FC = ({ children }) => (
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
