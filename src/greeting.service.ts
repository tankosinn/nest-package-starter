import { Injectable } from '@nestjs/common'

@Injectable()
export class GreetingService {
  greet(name = 'World'): string {
    return `Hello, ${name}!`
  }
}
