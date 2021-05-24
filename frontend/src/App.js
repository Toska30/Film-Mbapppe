import './App.css';
import UserContextProvider from './contexts/userContext';

function App() {
  return (
    <div className="App">
  <UserContextProvider>
    <h1>Mbappe</h1>
  </UserContextProvider>
    </div>
  );
}

export default App;