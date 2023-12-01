import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import SuperHerosPage from './components/Superheros.page';
import HomePage from './components/Home.page';
import RQSuperherosPage from './components/RQSuperheros.page';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'



const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heros'>Super Heros</Link>
              </li>
              <li>
                <Link to='/rq-super-heros'>RQ Super Heros</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/super-heros' element={<SuperHerosPage />} />
            <Route path='/rq-super-heros' element={<RQSuperherosPage />} />
            <Route path='/' element={<HomePage />} />
          </Routes>
        </Router>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;
