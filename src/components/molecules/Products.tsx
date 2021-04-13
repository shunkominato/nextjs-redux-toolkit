import React, { FC } from 'react'
import styled from 'styled-components';
import { Product } from '../../types/products/parentProductTypes'
import productStyle from '../../styles/products/product.module.scss'

type Props = {
  radioName: string
  products: Product[],
  onChange: (id: string) => void
}

const SImgContainer = styled.div`
  width: 100px;
  height: 150px;
  margin: 16px auto;
  background-color: #aaa;
`;

const Products: FC<Props> = React.memo(({ radioName, products, onChange }) => {
  console.log('product')
  return (
    <div className={productStyle.productFlexContainer}>
      {products.map((product) => (
        <div key={product.id}>
          <div className={productStyle.productContainer}>
            <input
              type="radio"
              name={radioName}
              value={product.id}
              onChange={() => onChange(product.id)}
              id={product.id}
            />
            <label htmlFor={product.id}>
              {product.name}
              <SImgContainer/>
            </label>  
          </div>
          
        </div>
      ))}
      
    </div>
  )
})

export default Products
