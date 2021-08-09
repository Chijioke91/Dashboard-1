import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';

const App = () => {
  return (
    <div className="bg-[#101010] text-white font-body p-5">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/expenses" component={Expenses} />
      </Switch>
    </div>
  );
};

export default App;
