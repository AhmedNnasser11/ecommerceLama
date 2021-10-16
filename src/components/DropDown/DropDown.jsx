import React from 'react'
import { CustomLinkDropDown,  ListItem } from './DropDownStyle'

const DropDown = ({LinkName, NavigateTo}) => {
    return (
       <>
          <ListItem>
            <CustomLinkDropDown to={NavigateTo}>
              {LinkName}
            </CustomLinkDropDown>
          </ListItem>
        </>
    )
}

export default DropDown
