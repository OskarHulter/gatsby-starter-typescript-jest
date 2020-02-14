import * as React from 'react'
import { useOnClickOutside } from '../Hamburger/hooks'
import EventButton from './EventButton'

const MenuContainer: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const node = React.useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <div ref={node}>
      <EventButton open={open} setOpen={setOpen} />
    </div>
  )
}

export default MenuContainer
