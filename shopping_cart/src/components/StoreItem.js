import React from 'react'
import { Button, Card } from 'react-bootstrap'
import formatCurrency from './formatCurrency'
import { useShoppingCard } from '../context/ShoppingCardContext'

const StoreItem = ({id , price , name , imgUrl}) => {
  const {getItemsQuantity , increaseCardQuantity , decreaseCardQuantity , removeItemFromCard }  = useShoppingCard() 
  const quantity = getItemsQuantity(id)
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
          <Button className='w-100' onClick={() => increaseCardQuantity(id)} >Add To Card</Button>
        ):(
          <div className='d-flex align-items-center flex-column' style={{gap:"0.5rem"}} >
            <div className='d-flex align-items-center justify-content-center' style={{gap:"0.5rem"}} >
              <Button onClick={() => decreaseCardQuantity(id)} >-</Button>
              <span className='fs-3' >{quantity} in Card</span>
              <Button onClick={() => increaseCardQuantity(id)} >+</Button>
            </div>
            <Button variant='danger' size='sm' onClick={() => removeItemFromCard(id)} >Remove</Button>
          </div>
        )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default StoreItem