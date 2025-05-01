import { cleanup } from '@testing-library/react'
import { beforeEach, afterEach, vi } from 'vitest'

beforeEach(() => {
    cleanup()
    vi.resetAllMocks()
})

afterEach(() => {
    vi.resetAllMocks()
})