
import styled from "styled-components";

export const SidebarContainer = styled.div`
  .menuIcon {
    width: 50px;
    display: flex;
    align-items: center;
    column-gap: 4;
    color: rgba(102, 102, 102, 0.85);
    cursor: pointer;
    font-size: 1em;
    transition: 0.3s color ease;
    &:hover {
      color: #000;
      transition: 0.3s color ease;
      background-color: transparent;
    }
  }
`;

export const SideBar = styled.div`
`;

export const ThisListItem = styled.ul`
  background-color: #f7f7ff;
  width: 100%;
  height: 100%;
  list-style: none;
 
    li {
    display: flex;
    align-items: center;
  }
`;