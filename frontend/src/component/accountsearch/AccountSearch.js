import { useEffect, useState } from "react"
import axios from "axios";
import Menu from "../menu/Menu";
const AccountSearch = () => {
  const[accountResult, SetAccountResult] = useState({})
    const[accountno,SetAccountno] = useState(0) 
    const handleChange = event => {
        SetAccountno(event.target.value)
        // alert(accountno);
    }
    const show = () => {
      // alert(userId)
      let AccountId = parseInt(accountno);
      axios.get("http://localhost:5280/api/Accounts/"+AccountId).then(
          (response) => {
              SetAccountResult(response.data)
          }  
        )
    
  }

  return(
    <div>
      <Menu/>

        <label>
            Account No : </label>
        <input type="number" name="accountno" 
            value={accountno} onChange={handleChange} /> <br/>
        <input type="button" value="Show" onClick={show} />
        <hr/>
        Employ No : <b>{accountResult.accountNo}</b> <br/>
        Firstname : <b>{accountResult.firstName}</b> <br/>
        LastName : <b>{accountResult.lastName}</b> <br/>
        City : <b>{accountResult.city}</b> <br/> 
        State : <b>{accountResult.state}</b> <br/>
        Amount : <b>{accountResult.amount}</b> <br/>
        ChequeFail : <b>{accountResult.cheqFacil}</b> <br/> <br/>
       
    </div>
)

 }

 export default AccountSearch;