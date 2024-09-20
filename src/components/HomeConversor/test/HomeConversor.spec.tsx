import { render } from '@testing-library/react'
import { HomeConversor } from '../index'

describe('Jest test config', () => {
    it ('should be correct', ()=> {
        render(<HomeConversor />)
        expect(1).toBe(1);
    })
})