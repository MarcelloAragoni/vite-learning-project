import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe("<Button />", () => {
  it("renders the simple Button component", () => {
    const label = "My Button";
    render(<Button color="primary">{label}</Button>);
    const buttonEl = screen.getByText(label);

    expect(buttonEl).toBeInTheDocument();
  });

  it("is disabled, when disabled is true", () => {
    render(
      <Button color="primary" disabled>
        My Button
      </Button>
    );

    const buttonEl = screen.getByText("My Button");
    expect(buttonEl).toBeDisabled();
    expect(buttonEl).not.toBeEnabled();
  });

  it("calls onClick function when clicked", async () => {
    const onClickMock = vi.fn();
    render(
      <Button color="primary" onClick={onClickMock}>
        My Button
      </Button>
    );

    await userEvent.click(screen.getByText("My Button"));

    expect(onClickMock).toHaveBeenCalled();
  });
});
