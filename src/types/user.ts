export interface SignupResponse {
    message: string;
    user_id: string;
}

export interface LoginResponse {
    message: string;
    access_token: string;
}

export interface User {
    id: string;
    email: string;
}

export interface UserListResponse {
  users: User[];
}

export interface UserDetailResponse {
  data: User;
}