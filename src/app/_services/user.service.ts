import { User } from '../_models/user';

export class UserService {
    data: User[];

    constructor() {
        this.data = [
            { id: 1, firstName: 'gehad', lastName: 'sherif', phoneNumber: '012345678910', email: 'gehad.sherifali@gmail.com', password: 'Gehad1234' },
            { id: 2, firstName: 'asmaa', lastName: 'taha', phoneNumber: '012345678910', email: 'asmaaatahaa@gmail.com', password: 'Asmaa1234' },
            { id: 3, firstName: 'jihad', lastName: 'hassan', phoneNumber: '012345678910', email: 'gehad.sherifali@gmail.com', password: 'Gehad1234' }
        ];
    }

    getAll(): User[] {
        return this.data
    }

    getById(id: number): User {
        return this.data.find(u => u.id === id)
    }

    getByEmailAndPassword(email: String, password: String): Boolean {
        let exist: Boolean;
        let user = this.data.find(u => u.email === email && u.password == password);
        if (user !== null) {
            exist = true;
        }
        else {
            exist = false;
        }
        return exist;
    }

    add(user: User) {
        console.log(this.data.length);
        // user.id = this.data.length + 1;
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