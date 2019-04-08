import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Forms from './pages/Forms';
import Markdown from './pages/Markdown';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/forms">Forms</Link>
          </li>
          <li>
            <Link to="/markdown">Markdown</Link>
          </li>
        </ul>
      </nav>
      <Route path="/forms" component={Forms} />
      <Route path="/markdown" component={Markdown} />
    </div>
  </Router>
)

export default App;