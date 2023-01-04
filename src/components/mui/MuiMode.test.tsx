import { render, screen } from '../../TestUtils' //for providers
import { MuiMode } from './MuiMode'

describe('Mui mode', () => {
  test('renders text correctly', () => {
    render(<MuiMode />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('dark')
  })
})
