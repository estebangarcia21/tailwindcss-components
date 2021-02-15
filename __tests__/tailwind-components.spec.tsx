import { render } from "@testing-library/react"
import React from "react"
import twc from "../src/index"

describe("Tailwind Component", () => {
  it("creates a compeonent with the specified tag", () => {
    const Paragraph = twc.p`text-red-500 font-bold text-4xl`

    const { getByText } = render(<Paragraph>My content!</Paragraph>)

    expect(getByText(/my content!/i, { selector: "p" })).toBeInTheDocument()
  })

  it("applies the specified classnames to the component", () => {
    const Paragraph = twc.p`text-red-500 font-bold text-4xl`

    const { getByText } = render(<Paragraph>My content!</Paragraph>)

    expect(getByText(/my content!/i)).toHaveClass(
      "text-red-500 font-bold text-4xl"
    )
  })
})
