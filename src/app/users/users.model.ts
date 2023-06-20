import { BaseAtribute } from '../base.model'

export enum ROLES {
	ADMIN = "admin",
	SELLER = "seller",
	CUSTOMER = "customer",
}

export interface User extends BaseAtribute {
	username: string | number;
	role: ROLES;
  permiso: permiso;
}
