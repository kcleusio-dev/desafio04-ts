import { UserController } from "./UserController";
import { UserService } from "../services/UserService";
import { Request } from "express";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { makeMockRequest } from "../__mocks__/mockRequest.mock";

describe("UserController", () => {
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn(),
    deleteUser: jest.fn(),
    getAllUsers: jest.fn(),
  };

  const userController = new UserController(mockUserService as UserService);

  it("Deve adicionar um novo usuário", () => {
    const mockRequest = {
      body: {
        name: "helder",
        email: "helder.daniel7@outlook.pt",
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({
      message: "Usuário criado com sucesso!",
    });
  });

  it("Deve eliminar o usuário numa posição x", () => {
    const mockRequest = {
      body: {
        name: "helder",
        email: "helder.daniel7@outlook.pt",
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.deleteUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(200);
  });

  it("Deve chamar a função getAllUsers", () => {
    const mockRequest = {
      body: {
        name: "helder",
        email: "helder.daniel7@outlook.pt",
      },
    } as Request;

    const mockResponse = makeMockResponse();
    userController.getAllUsers(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(200);
  });
});
