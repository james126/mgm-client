import { InjectionToken } from '@angular/core';

export interface Login {
	username: string;
	password: string;
}

export const defaultLogin: Login = {
	username: "",
	password: ""
};

export const DEFAULT_LOGIN = new InjectionToken<Login>('login');
