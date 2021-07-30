import React, {useState, useEffect} from 'react';
import useEventListener from '../hooks/useEventListener'
const NEXT = [13, 32, 39];
const PREV = 37;

export const RevealList = ({children}) => {
    const [active, setActive] = useState(0);
useEffect(() => {
    const handler = (e) => {
      if (NEXT.includes(e.keyCode) && active < children.length-1) {
          e.preventDefault();
          e.stopPropagation();
          setActive(active + 1 >= children.length-1 ? children.length-1 : active+1);
          return;
      }
      if (e.keyCode === PREV && active > 0) {
          e.preventDefault();
          e.stopPropagation();
          setActive(active - 1 <= 0 ? 0 : active-1);
          return;
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler);
}, []) 


        console.log(children.length, active)
    return (<ul className="reveal-list">
        {
        React.Children.map(children, (Child, i) => (
                i <= active ? Child : null
            ))}
    </ul>)
}

export default RevealList;