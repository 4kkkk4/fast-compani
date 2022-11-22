import React from 'react'
const Bookmark = ({bookmark2, ...rest}) => {

  return (
    <button  {...rest}>
      <i className={"bi bi-bookmark"+(bookmark2 ?"-check-fill":"")}></i>
    </button>
  )
}

export default Bookmark
{/* <i class="bi bi-bookmark-check-fill"></i> */}