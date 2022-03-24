export class UserEntityDTO {
  firstName: string;

  lastName: string;

  email: string;

  password?: string;

  created_at: Date;

  updated_at: Date | null;

  deleted_at: Date | null;
}
