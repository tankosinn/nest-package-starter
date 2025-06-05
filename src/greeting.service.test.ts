import { beforeEach, describe, expect, it } from 'vitest'
import { GreetingService } from './greeting.service'

describe('greeting service', () => {
  let greetingService: GreetingService

  beforeEach(() => {
    greetingService = new GreetingService()
  })

  it('should return "Hello, World!" when no name is provided', () => {
    expect(greetingService.greet()).toBe('Hello, World!')
  })

  it('should return "Hello, User!" when "User" is provided as name', () => {
    expect(greetingService.greet('User')).toBe('Hello, User!')
  })
})
