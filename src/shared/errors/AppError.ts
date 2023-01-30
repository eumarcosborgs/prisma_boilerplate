class AppError {
  public readonly id: string;

  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode = 400, id = 'error') {
    this.id = id;
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
