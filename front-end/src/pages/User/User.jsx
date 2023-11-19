import { useSelector } from "react-redux";
import React, { useState } from "react";

const User = () => {
  const user = useSelector((state) => state.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [open, setOpen] = useState(false);
  const openForm = () => setOpen(true);

  return (
    <>
      <div className="header">
        <h1>
          Welcome back
          <br />
          {user.data.firstName} {user.data.lastName}
        </h1>
        <button onClick={openForm} className="edit-button">Edit Name</button>

        {/* Formulaire */}
        <form open={open}>
          <label>
            First Name:
            <input type="text" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />
            
            Last Name:
            <input type="text" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </form>
        </div>


      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </>
  );
};

export default User;
