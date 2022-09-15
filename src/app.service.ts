import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloWorld(): string {
    return 'Hello World!';
  }
  getNumber(): number {
    return 42;
  }
}
