export interface User {
  id: string;
  name: string;
}

const users: User[] = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' }
];

export const UserRepository = {
  getAll: async (): Promise<User[]> => users,
  getById: async (id: string): Promise<User | undefined> => users.find(u => u.id === id),
};