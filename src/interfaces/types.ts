export type TProducts = {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
};

export type TPessoa = {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
};

export type TOrder = { 
  id?: number,
  userId: number,
  productsIds: number[],
};