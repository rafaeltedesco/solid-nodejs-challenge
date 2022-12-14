import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      const adminUser = this.turnUserAdminUseCase.execute({ user_id });
      return response.json(adminUser);
    } catch (err) {
      return response.status(404).json({
        error: (err as Error).message,
      });
    }
  }
}

export { TurnUserAdminController };
