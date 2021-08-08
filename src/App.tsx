import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';

const App = () => {
  return (
    <div className="bg-dashBg min-h-screen p-5 text-white overflow-hidden font-body">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/expenses" component={Expenses} />
      </Switch>
    </div>
  );
};

export default App;
