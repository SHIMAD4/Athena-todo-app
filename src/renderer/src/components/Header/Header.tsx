import { ReactElement } from 'react'
import './Header.scss'
import arrow from '../../assets/images/arrow-icon.svg'

function Header(): ReactElement {
  return (
    <header className="header">
      <div className="header__wrapper wrapper">
        <input className="header__input" type="text" placeholder="Placeholder" />
        <button className="header__select"><img src={arrow} alt="" /></button>
        <button className="header__add">Add</button>
      </div>
    </header>
  )
}

export default Header
