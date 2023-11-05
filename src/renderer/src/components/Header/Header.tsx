import { ReactElement } from 'react'
import './Header.scss'

function Header(): ReactElement {
  return (
    <header className="header">
      <div className="header__wrapper wrapper">
        <h1 className="header__title">Athena</h1>
        <p className="header__subtitle">To-Do&apos;s app</p>
      </div>
    </header>
  )
}

export default Header
