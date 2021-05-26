import {BrowserRouter, Route, Switch, Link, NavLink, Redirect} from 'react-router-dom';

function Hello(){
  return(
  <>
  <h1>Hola - Página de inicio</h1>
  <p>Lorem Ipsum</p>
  </>
  )
}

function About(){
  return(
  <>
  <h1>Hola - Página de About</h1>
  <p>Lorem Ipsum</p>
  </>
  )
}

function Perfil(){
  return(
  <>
  <h1>Hola - Página de Perfil</h1>
  <p>Lorem Ipsum</p>
  </>
  )
}

function User(props){
  return <h1>Hello user {props.match.params.username}</h1>
}

function Home(){
  return <h1>Home </h1>
}

function NoMatch(){
  return <h1>Page not found</h1>
}

function Products(props){
  return(
    <>
    <h1>Products</h1>
    <ul>
      <li key={123}><Link to="/products/guitar">Guitar</Link></li>
      <li key={345}><Link to="/products/piano">Piano</Link></li>
    </ul>
    <Route path="/products/:name" component={props.match.params.name}></Route>
    </>
  );
}

function App() {
  return(
  <BrowserRouter>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/products">Products</Link></li>
    </ul>
    <Route exact path="/" component={Hello}></Route>
    <Route path="/products" component={Products}></Route>
  </BrowserRouter>
  )
}

/*function App() {
  return (
    <BrowserRouter>

    <NavLink to="/" title="Home" exact activeStyle={{color: "green"}}>Home</NavLink>
    <Link to="/" title="Home">Home</Link>
    <Link to="/perfil">Perfil</Link>
    <Link to="/:username">Pepe</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/about">About</Link>
    <Switch>
     <Route exact path="/perfil" component={Perfil}></Route>
     <Route exact path="/:username" component={User}></Route>
     <Route exact path="/" component={Hello}></Route>
     <Route exact path="/about" component={About}></Route>
     <Route path="/user/:username" component={User}></Route>
     <Route path="/contact" render={()=> <h1>Contact</h1>}></Route>
     <Route exact strict path="/hola/" render={()=> <h1>Hola</h1>}></Route>
     <Route component={NoMatch}/>
      </Switch>
    </BrowserRouter>
  );
}*/

export default App;
