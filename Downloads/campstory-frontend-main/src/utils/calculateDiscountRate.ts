const calculateDiscountRate = (hprice: string, lprice: string) => {
  const highPrice = Number(hprice);
  const lowPrice = Number(lprice);
  const discountRate = ((highPrice - lowPrice) / highPrice) * 100;
  return discountRate.toFixed(0) + "%";
};

export default calculateDiscountRate;
