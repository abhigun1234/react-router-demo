import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import FragmentDemo from './FragmentDemo';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route, Switch} from    'react-router-dom'
import Header from './Header';
import DashBoard from './DashBoard';
import PageNotFound from './PageNotFound';
import ComponentLife from './ComponentLife';
import HttpComm from './HttpComm';
import Posts from './Posts';
import CompLifeA from './CompLifeA';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header></Header>
        <Switch>
        <Route path="/" exact component={Posts}></Route>
        <Route path="/fragment" exact component={FragmentDemo}></Route>
        <Route path="/dash" exact component={DashBoard}></Route>
        <Route path="*" exact component={PageNotFound}></Route>
        </Switch>
        </BrowserRouter>`
    </div>
  );
}

export default App;
