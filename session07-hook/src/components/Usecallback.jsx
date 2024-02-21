import React, { memo } from 'react'

function Usecallback() {
  console.log('UseCallback duoc goi !!');
//   memo: chuc nang la no se di ktr xem co prop nao thay doi thi component moi
  return (
    <div>Usecallback</div>
  )
}

export default memo(Usecallback)
