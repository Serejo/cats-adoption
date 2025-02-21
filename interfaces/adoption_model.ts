export interface AdoptionModel {
  id?: number;
  name: string;
  phone: string;
  email: string;
  reason?: string;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
}
