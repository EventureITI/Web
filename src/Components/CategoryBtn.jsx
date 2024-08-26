import React from 'react'

export default function CategoryBtn({category,bg,hoverBg}) {
  return (
    <button type="button" style={{height:"30px",minWidth:"80px"}} className={`flex justify-center items-center text-white ${bg} hover:${hoverBg} focus:outline-none font-medium rounded-full text-sm px-8 py-2.5 text-center mb-2 `}>{category}</button>
  )
}
