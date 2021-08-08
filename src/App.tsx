import { Route, Switch } from 'react-router-dom';
import Expenses from './pages/Expenses';

const App = () => {
  return (
    <div className="bg-dashBg min-h-screen p-5 text-white overflow-hidden">
      <Switch>
        <Route exact path="/" component={Expenses} />
      </Switch>
    </div>
  );
};

export default App;
