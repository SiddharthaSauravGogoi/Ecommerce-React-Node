import React                from 'react';
import ErrorBoundary        from "./components/ErrorBoundaries/GenericError"


const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="App">
        Ecommerce App
      </div>
    </ErrorBoundary>
  );
}

export default App;
