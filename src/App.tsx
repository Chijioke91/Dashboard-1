import { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Accounts from './pages/Accounts';
import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';
import Settings from './pages/Settings';
import Summary from './pages/Summary';
import Wallets from './pages/Wallets';

const App = () => {
  const history = useHistory();

  useEffect(() => {
    alert(
      'Please note that the actual design was done for a mac-book pro. please switch your browser to a 1440 x 900. Also the original design can be found here: https://www.figma.com/community/file/977500202909795677'
    );
    history.push('/expenses');
  }, [history]);

  return (
    <div className="bg-[#101010] text-white font-body">
      <Switch>
        {/* <Redirect exact from="/" to="/expenses" /> */}
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/expenses" component={Expenses} />
        <Route exact path="/accounts" component={Accounts} />
        <Route exact path="/summary" component={Summary} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/wallets" component={Wallets} />
      </Switch>
    </div>
  );
};

export default App;
