import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const requester = this.usersRepository.findById(user_id);
    if (!requester)
      throw new Error("Your User was Not Found to make this request!");
    if (!requester.admin)
      throw new Error("To list all users you must be an admin");
    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
