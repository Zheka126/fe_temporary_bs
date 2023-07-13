export interface LoginRequest {
  username: string;
  password: string;
}

export interface UserRegistrationData {
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

export interface UserData {
  userName: string;
  role: string;
  userId: string;
}