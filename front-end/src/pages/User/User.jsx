import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {editUser} from "../../services/userService";
import {setUser} from "../../redux/actions/userActions";

const User = () => {
    const user = useSelector((state) => state.user);
    const [username, setUsername] = useState();
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await editUser(username, user.token)
            if (response.status === 200) {
                dispatch(setUser(response.body));
                setOpen(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="header">
                <h1>
                    Welcome back
                    <br/>
                    {user.data?.firstName} {user.data?.lastName}
                </h1>
                {/* Formulaire */}
                {open && user.data && user.token &&
                    <form onSubmit={handleSubmit}>

                        <label>Username:</label>
                        <input type="text"
                               defaultValue={user.data?.userName}
                               onChange={(e) => setUsername(e.target.value)}
                        />

                        <label>First Name:</label>
                        <input type="text"
                               defaultValue={user.data?.firstName}
                               disabled
                        />

                        <label>Last Name:</label>
                        <input type="text"
                               defaultValue={user.data?.lastName}
                               disabled
                        />
                        <button type={"submit"}>Save</button>
                    </form>
                }
                {user.data && user.token &&
                    <button onClick={() => setOpen(!open)} className="edit-button">Edit Name</button>
                }
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
