export interface PhoneNumber {
    number: string;
    type: string;
}
export interface Address {
    street: string;
    city: string;
    zipcode: string;
}
export interface Customer {
    givenName: string;
    surname: string;
    email: string;
    afm: string;
    phoneNumbers: PhoneNumber[];
    address: Address;
}