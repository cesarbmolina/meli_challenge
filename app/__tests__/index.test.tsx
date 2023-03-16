import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders a heading', async () => {
    await render(<Home />)

    const checker = screen.getByText(/Get started by editing/i);
    expect(checker).toBeInTheDocument();
  })
})
