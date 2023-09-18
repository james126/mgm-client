export class Contact{
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
	address_line1: string;
	address_line2: string;
	message: string;

	constructor(
		first_name: string,
		last_name: string,
		email: string,
		phone: string,
		address_line1: string,
		address_line2: string,
		message: string
	){
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.phone = phone;
		this.address_line1 = address_line1;
		this.address_line2 = address_line2;
		this.message = message;
	}
}
