export interface LoginDTO {
  username: string;
  password: string;
}

export interface UserRegistrationDTO {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPass: string;
}

export interface UserTokenData {
  unique_name: string;
  role: string;
  nameId: string;
}
 