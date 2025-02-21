export interface AdoptionModel {
  id?: number;
  name: string;
  cpf: string;
  contact: string;
  visitDate: Date;
  catId: number;
  status: string; // "Pending", "Approved", "Rejected"
  createdAt?: Date;
  updatedAt?: Date;
}
