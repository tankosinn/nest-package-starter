import type { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { GreetingModule, GreetingService } from 'src'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

describe('greeting', () => {
  let app: INestApplication
  let greetingService: GreetingService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [GreetingModule],
    }).compile()

    app = moduleRef.createNestApplication()
    await app.init()

    greetingService = moduleRef.get<GreetingService>(GreetingService)
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be defined', () => {
    expect(greetingService).toBeDefined()
  })

  it('should return "Hello, World!" when no name is provided', () => {
    expect(greetingService.greet()).toBe('Hello, World!')
  })

  it('should return "Hello, NestJS!" when "NestJS" is provided as name', () => {
    expect(greetingService.greet('NestJS')).toBe('Hello, NestJS!')
  })
})
