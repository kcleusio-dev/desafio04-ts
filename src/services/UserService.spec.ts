import { User, UserService } from "./UserService";

describe('UserService', () => {
    const mockDb: User[] = []
    const userService = new UserService(mockDb);

    it('Deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('helder', 'helder.daniel7@outlook.pt');
        expect(mockConsole).toHaveBeenCalledWith('DB actualizado', mockDb)
    });

    it('Deve eliminar um usuário',()=>{
        let pos = 1;
        const mockConsole = jest.spyOn(global.console,'log')
        userService.deleteUser(pos);
        expect(mockConsole).toHaveBeenCalledWith('DB actualizado',mockDb );

    })
})
