import { render } from '@testing-library/react'
import Account from '../src/pages/account'

it('renders Account unchanged', () => {
  const { container } = render(<Account />)
  expect(container).toMatchSnapshot()
})
