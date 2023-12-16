import {CartIcon} from '../icons'
import { useSelector } from 'react-redux'

const NavBar = () => {
  return (
    <nav>
        <div className="nav-center">
            <h3>redus toolkit</h3>
            <div className="nav-container">
                <CartIcon/>
        <div className="amount-container">
            <p className='total-amount'></p>
        </div>

            </div>
        </div>
    </nav>
  )
}

export default NavBar

