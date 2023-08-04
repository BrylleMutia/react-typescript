import React from 'react'

type RandomNumberType = {
   value: number;
}

type PositiveNumber = RandomNumberType & {
   isPositive: boolean;
   isNegative?: never;
   isZero?: never;
}

type NegativeNumber = RandomNumberType & {
   isNegative: boolean;
   isPositive?: never;
   isZero?: never;
}

type Zero = RandomNumberType & {
   isZero: boolean;
   isPositive?: never;
   isNegative?: never;
}

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

const RandomNumber = ({ value, isNegative, isPositive, isZero }: RandomNumberProps) => {
  return (
    <div>{value} {isPositive && 'positive'} {isNegative && 'negative'} {isZero && 'isZero'}</div>
  )
}

export default RandomNumber