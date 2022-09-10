import { render } from '@testing-library/react'
import Account from '../src/pages/account'
import { wrapper } from '../src/store'

it('renders Account unchanged', () => {
  const { container } = render(wrapper.withRedux(<Account />))
  expect(container).toMatchSnapshot()
})
