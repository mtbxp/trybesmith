export interface Order {
  id: number,
  userId: number,
  productsIds: Array<number | null>
}

export type Orders = Array<Order>;

export type NewOrder = {
  productsIds: Array<number>
};