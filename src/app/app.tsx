// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import{ Routes,Route,Link} from "react-router-dom"
import Cart from "../../cart/src/lib/cart"
// import NxWelcome from './nx-welcome';

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  );
}

export default App;

function Shop() {
  return (
    <div className={styles["container"]}>
      <Link to={"/cart"}>View Cart</Link>
    </div>
  )
}

