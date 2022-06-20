export interface UserRegister {
  email : string;
  password : string;
}

export interface UserLogin {
  id: number;
  email : string;
}

export interface UserDatabase {
  id: number;
  email : string;
  password : string;
}

export default interface User{
  id?: number;
  email? : string;
  isAuthenticated : boolean;
}
