import { InjectionToken } from '@angular/core';

export interface ContactConfig {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  message: string;
}

export const defaultContactConfig: ContactConfig = {
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
	addressLine1: "",
	addressLine2: "",
	message: ""
};

export const CONTACT_CONFIG = new InjectionToken<ContactConfig>('contact.config');
