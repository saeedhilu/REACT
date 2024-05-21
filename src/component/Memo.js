import React from 'react'

function Memo() {
    console.log('Hey iam server');
  return (
    <div>
      <p>Heyy iam Memo</p>
    </div>
  )
}

export default React.memo( Memo)








