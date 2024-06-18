import React from 'react'
import { Button, Card } from 'react-bootstrap'
import formatCurrency from './formatCurrency'

const StoreItem = ({id , price , name , imgUrl}) => {
  const quantity = 1
  return (
    <Card className='h-100' >
      <Card.Img
        src={imgUrl}
        variant='top'
        style={{height:"200px" , objectFit:"cover"}}
        />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-baseline' >
            <span className='fs-2' >{name}</span>
            <span className='text-muted me-2' >{formatCurrency(price)}</span>
        </Card.Title>
        <div className='mt-auto' >
        {quantity === 0 ? (
          <Button className='w-100' >Add To Card</Button>
        ):(
          <div className='d-flex align-items-center flex-column' style={{gap:"0.5rem"}} >
            <div className='d-flex align-items-center justify-content-center' style={{gap:"0.5rem"}} >
              <Button>-</Button>
              <span className='fs-3' >1 in Card</span>
              <Button>+</Button>
            </div>
            <Button variant='danger' size='sm' >Remove</Button>
          </div>
        )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default StoreItem