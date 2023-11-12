import { ReactElement } from 'react'
import './Aside.scss'
import Group from './Group/Group'
import planetIcon from '../../assets/images/planet-icon.svg'
import briefcaseIcon from '../../assets/images/briefcase-icon.svg'

function Aside(): ReactElement {
  return (
    <aside className="aside">
      <div className="aside__wrapper wrapper">
        <a className="aside__logo" href="#">
          Athena
        </a>
        <div className="">
          <Group title="All spaces" image="" />
          <Group title="Space 1" image={planetIcon} />
          <Group title="Space 2" image={briefcaseIcon} />
        </div>
      </div>
    </aside>
  )
}

export default Aside
