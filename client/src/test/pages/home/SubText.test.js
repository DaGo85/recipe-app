//Basic test for a text component

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SubText from "../../../pages/home/components/SubText";

test("Displays the text given to the component", () => {
  render(<SubText text="test text" />);

  const subText = screen.getByTestId("subtext");

  expect(subText).toHaveTextContent("test text");
});
