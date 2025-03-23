import React, { createContext, useState} from 'react'
let menus = createContext()
const Menudata = ({children}) => {
let [menulist, setmenulist] = useState(['Home', 'Shop', 'About', 'Contact'])
  return (
    <menus.Provider value={menulist}>{children}</menus.Provider>
  )
}

export {Menudata, menus}
