export interface AdoptionModel {
  id?: number;
  name: string;
  cpf: string;
  contact: string;
  visitDate: Date;
  catId: number;
  catName: string;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
}
