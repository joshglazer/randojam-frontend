namespace js com.demo

struct User {
  1: required i32 id
  2: optional string firstName
  3: optional string lastName
  4: optional string username
}

exception LoginServiceException {
  1: required string message
}

service LoginService {
  User login(1: string username, 2: string password) throws (1: LoginServiceException exp)
}