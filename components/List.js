import React from 'react'
import Info from "./Info";
const List = (props) => {
    const {service}=props
    return (
        <div>
            {(service).map((value) => {
              return (
                <>
                  <Info className="mark exclamation-point end" value={value} />
                </>
              );
            })}
        </div>
    )
}

export default List
