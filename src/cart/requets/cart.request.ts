export interface CartRequest {
  user_id: number;
  status: number;
  total_price: number;
  total_discount: number;
  total_vat: number;
  payment_menthod: string;
  payment_status: string;
}
