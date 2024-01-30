'use client';
import Image from 'next/image';
import { useState } from 'react';
import food0 from '/public/food0.png';
import food1 from '/public/food1.png';
import food2 from '/public/food2.png';

export default function List() {
  // 목록
  let products = ['Tomatoes', 'Pasta', 'Coconut'];
  // 이미지
  const foodImages = [food0, food1, food2];
  // 수량
  let [quantity, setQuantity] = useState([0, 0, 0]);

  // 수량 더하기
  const handleIncrement = (index) => {
    setQuantity((prevQuantity) => {
      const newQuantity = [...prevQuantity];
      newQuantity[index] += 1;
      return newQuantity;
    });
  };

  // 수량 빼기
  const handleDecrement = (index) => {
    setQuantity((prevQuantity) => {
      const newQuantity = [...prevQuantity];
      newQuantity[index] = Math.max(0, newQuantity[index] - 1);
      return newQuantity;
    });
  };

  return (
    <div>
      <h4 className="title">상품 목록</h4>
      {products.map((product, index) => {
        return (
          <div className="food" key={index}>
            <Image src={foodImages[index]} alt="product" className="food-img" />
            <h4>{product} $40</h4>
            <span> {quantity[index]} </span>
            <button onClick={() => handleIncrement(index)}>+</button>
            <button onClick={() => handleDecrement(index)}>-</button>
          </div>
        );
      })}
    </div>
  );
}
