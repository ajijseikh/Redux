import { useAddAccountMutation, useDeleteAccountMutation, useGetAccountsQuery, useUpdateAccountMutation } from "../RTKAPI/adminSlice";

function Admin() {
  
  const {data,error,isLoading} = useGetAccountsQuery()
    const [addAccount, response] =useAddAccountMutation()
    const [deleteAccount, res] = useDeleteAccountMutation()
        const [updateAccount]=useUpdateAccountMutation()
  return (
    <div className="card">
      <div className="container">
        <h4>
            <b>Admin Component</b>
        </h4>
        {
          data && data.map(account=><p>{account.id} :{account.amount}
           <button onClick={()=>deleteAccount(account.id)}> delete Account</button>
           <button onClick={()=>updateAccount({id:account.id,amount:888})}> update Account</button>
          </p>)
        }
        <button onClick={()=>addAccount(500,5)}> Add Account</button>
      </div>
    </div>
  );
}

export default Admin;