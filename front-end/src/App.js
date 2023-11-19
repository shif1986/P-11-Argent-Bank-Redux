import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import User from "./pages/User/User";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './assets/css/main.css';
import configureStore from "./redux/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";


const {store, persistor} = configureStore();

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Header/>
                    <main>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/user' element={<User/>}/>
                        </Routes>
                    </main>
                    <Footer/>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
