import { User } from '../_models/user';

export class UserService {
    data: User[];

    constructor() { }

    getAll(): User[] {
        return this.data
    }

    getById(id: number): User {
        return this.data.find(u => u.id === id)
    }

    add(user: User) {
        user.id = this.data.length + 1;
        this.data.push(user);
    }

    update(user: User) {
        const i = this.data.findIndex(u => u.id === user.id);
        this.data[i] = user;
    }

    delete(id: number) {
        const i = this.data.findIndex(u => u.id === id);
        this.data.splice(i, 1);
    }
}