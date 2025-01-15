interface User {
  email: string;
  name: string;
  password: string;
  role: string;
}

export const users: User[] = [
  {
    email: "user1@example.com",
    name: "User One",
    password: "password1",
    role: "user",
  },
  {
    email: "user2@example.com",
    name: "User Two",
    password: "password2",
    role: "corretor",
  },
  {
    email: "user3@example.com",
    name: "User Three",
    password: "password3",
    role: "proprietario",
  },
  {
    email: "thiago@appletrip.com.br",
    name: "thiago morgado",
    password: "123456",
    role: "super_admin",
  },
];
