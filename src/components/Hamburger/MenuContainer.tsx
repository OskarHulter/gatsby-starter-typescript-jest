import * as React from 'react'
import HamburgerButton from './HamburgerButton'
import SidebarMenu from './SidebarMenu'
import { useOnClickOutside } from './hooks'

const MenuContainer = () => {
  const [open, setOpen] = React.useState(false)
  const node = React.useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <div ref={node}>
      <HamburgerButton open={open} setOpen={setOpen} />
      <SidebarMenu open={open} />
    </div>
  )
}

export default MenuContainer
