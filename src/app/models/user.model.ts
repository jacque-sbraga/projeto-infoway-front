export class Users {
  id?: number;
  name: string;
  surname: string;
  cpf: number;
  ddd: number;
  phone: number;
  login: string;
  password: string; //virtual
  password_hash: string;
  provider: boolean;
  active: boolean;
}
