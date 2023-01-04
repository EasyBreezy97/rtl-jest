import { render, screen } from '@testing-library/react'
import { Application } from './Application'

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />)

    /*
    Priority orders for RTL queries
    1. getByRole
    2. getByLabelText
    3. getByPlaceholderText
    4. getByText
    5. getByDisplayValue
    6. getByAltText
    7. getByTitle
    8. getByTestId
    */

    //getByRole
    const pageHeading = screen.getByRole('heading', {
      level: 1,
    })

    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', {
      level: 2,
    })
    expect(sectionHeading).toBeInTheDocument()

    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    })
    expect(nameElement).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    const submitButtonElement = screen.getByRole('button')
    expect(submitButtonElement).toBeInTheDocument()

    //getByLabelText
    const termsElement2 = screen.getByLabelText(
      'I agree to the terms and conditions'
    )
    expect(termsElement2).toBeInTheDocument()

    const nameElement2 = screen.getByLabelText('Name', { selector: 'input' })
    expect(nameElement2).toBeInTheDocument()

    //getByPlaceholderText
    const nameElement3 = screen.getByPlaceholderText('Fullname')
    expect(nameElement3).toBeInTheDocument()

    //getByText
    const paragraphElement = screen.getByText('All fields are mandatory')
    // const paragraphElement = screen.getByText(content => content.startsWith("All fields are"));
    // const paragraphElement = screen.getByText(/^all fields are mandatory$/i);
    // const paragraphElement = screen.getByText(/mandatory$/);
    expect(paragraphElement).toBeInTheDocument()

    //getByDisplayValue
    const nameElement4 = screen.getByDisplayValue('John Doe')
    expect(nameElement4).toBeInTheDocument()

    //getByAltText
    const imageElement = screen.getByAltText('a person with a laptop')
    expect(imageElement).toBeInTheDocument()

    // getByTitle
    const closeElement = screen.getByTitle('close')
    expect(closeElement).toBeInTheDocument()

    //getByTestId (data-id)
    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()
    expect(submitButtonElement).toBeDisabled()
  })
})
