import { ReactElement } from 'react'
import './Group.scss'

type GroupProps = {
  title: string
  image: string
}
function Group({ title, image }: GroupProps): ReactElement {
  console.log(image)
  return (
    <div className="group">
      <a className="group__wrapper wrapper" href="#">
        <img className="group__icon" src={image} alt="" />
        <p className="group__title">{title}</p>
      </a>
    </div>
  )
}

export default Group
