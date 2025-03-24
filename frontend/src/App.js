import logo from './logo.svg';
import './App.css';
import CreateAccount from './component/createaccount/CreateAccount';
import AccountShow from './component/accountshow/AccountShow';
import AccountSearch from './component/accountsearch/AccountSearch';
import Menu from './component/menu/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DepositAccount from './component/depositaccount/DepositAccount';
import Login from './component/login/login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/menu" element={<Menu />} /> */}

      <Route path="/showaccount" element={<AccountShow />} />
      <Route path="/accountsearch" element={<AccountSearch />} />
      <Route path="/addaccount" element={<CreateAccount />} />
      <Route path="depositaccount" element={<DepositAccount />} />


      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
