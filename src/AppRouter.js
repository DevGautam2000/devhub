import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Error from "./screens/Error";
import ChatScreen from "./screens/ChatScreen";
import Rooms from "./screens/Rooms";
import Settings from "./screens/Settings";
import { auth } from "./firebase/firebase";
import Modal from "./components/Modal";
import { useAppContext } from "./context/Context";
import Developers from "./components/Developers";

function App() {
  const { alert } = useAppContext();
  const { isVisible, msg } = alert;
  return (
    <div className="App">
      {isVisible ? <Modal msg={msg} /> : null}
      {auth.currentUser ? null : <Redirect to="/login" />}

      <Developers />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/chats" component={ChatScreen} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/settings" component={Settings} />
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
