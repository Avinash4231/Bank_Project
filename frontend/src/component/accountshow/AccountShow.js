import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "../menu/Menu";
const AccountShow = () => {
    const[accountdata,setAccountData] = useState([]) 
    useEffect(() => {
      const fetchData = async () => {
          const response = await axios.get("http://localhost:5280/api/Accounts");
          setAccountData(response.data)
      };
      fetchData()
  },[])

  return(
    <div>
      <Menu/>

         <table border="3" align="center">
      <tr>
        <th>Account No</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>City</th>
        <th>State</th>
        <th>Amount</th>
        <th>CheqFacil</th>
      </tr>
      {accountdata.map((item) => 
        <tr>
          <td>{item.accountNo}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.city}</td>
          <td>{item.state}</td>
          <td>{item.amount}</td>
          <td>{item.cheqFacil}</td>

        </tr>
      )}
    </table>
    </div>
);
  
  }

  export default AccountShow;