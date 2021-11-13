import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Error from "./screens/Error";
import ChatScreen from "./screens/ChatScreen";
import Users from "./screens/Users";
import Settings from "./screens/Settings";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/chats" component={ChatScreen} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/settings" component={Settings} />
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
