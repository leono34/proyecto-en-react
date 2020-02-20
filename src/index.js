import React from 'react';
import ReactDOM from 'react-dom';

// import {
//     HashRouter as Router,
//     Switch,
//     Route,
//     Link,
//     Redirect,
//     useParams,
//     useRouteMatch
// } from "react-router-dom";

// function About() {
//     return (
//         <div>About</div>
//     )
// }

// function Login() {
//     return (
//         <div>Login</div>
//     )
// }

// function Admin() {
//     return (
//         <div>Admin</div>
//     )
// }

// function Home() {
//     console.log("home")
//     return (
//         <div>Home</div>
//     )
// }

// function UserDetail(props) {
//     // console.log("UserDetail", props)
//     console.log("useParams();", useParams())

//     return (
//         <div>UserDetail {useParams().id}</div>
//     )
// }

// function UserCreate() {
//     return (
//         <div>User Create</div>
//     )
// }

// function UserEdit() {
//     return (
//         <div>User Edit</div>
//     )
// }


// function Users() {
//     console.log("users")
//     let { path, url } = useRouteMatch();
//     console.log("path", path, "url", url)
//     return (
//         // <div>
//         //     <Link to="/users/1">User 1</Link><br />
//         //     <Link to="/users/2">User 2</Link><br />
//         //     <Link to="/users/3">User 3</Link><br />
//         //     <Link to="/users/4">User 4</Link><br />
//         // </div>
//         <>
//             <Link to={`${path}`}>Users</Link> <br />
//             <Link to={`${path}/edit`}>User 1</Link> <br />
//             <Link to={`${path}/create`}>User 1</Link> <br />

//             <Switch>
//                 <Route exact path={`${path}`}>
//                     <h3>user!!!</h3>
//                 </Route>
//                 <Route path={`${path}/edit`}>
//                     <UserEdit />
//                 </Route>
//                 <Route path={`${path}/create`}>
//                     <UserCreate />
//                 </Route>
//                 <Route path={`${path}/detail/:id`}>
//                     <UserDetail />
//                 </Route>
//             </Switch>
//         </>
//     )
// }

// function App() {
//     return (
//         <Router>
//             <nav>
//                 <ul>
//                     <li>
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/login">Login</Link>
//                     </li>
//                     <li>
//                         <Link to="/admin">Admin</Link>
//                     </li>
//                     <li>
//                         <Link to="/users">Usuarios</Link>
//                     </li>
//                 </ul>
//             </nav>
//             <Switch>
//                 <Route exact path="/">
//                     <Home />
//                 </Route>
//                 <Route path="/login">
//                     <Login />
//                 </Route>
//                 <Route path="/admin">
//                     <Admin />
//                 </Route>
//                 <Route exact path="/users">
//                     <Users />
//                 </Route>
//             </Switch>
//         </Router>
//     )
// }
import { App } from "./App";

ReactDOM.render(<App />, document.getElementById('root'));

