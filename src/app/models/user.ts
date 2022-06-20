export interface UserRegister {
  id: number;
  email : string;
  password : string;
}

export interface UserLogin {
  id: number;
  email : string;
}

export default interface User{
  id?: number;
  email? : string;
  token? : string;
}
