import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import emojiList from "../emojiList.json";
import App from "../App";

// Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edildiğini kontrol edecek olan test kodunu yazın.
test("emoji list control", () => {
  // Arrange
  render(<App />);
  // Act
  const emoji = emojiList.slice(0, 19);
  // Assert
  emoji.forEach((item) => {
    expect(screen.getByText(item.title)).toBeInTheDocument();
  });
});
// Bir filtreleme işlemi yapıldığında, emoji listesinin bu filtreye uygun şekilde yeniden render edildiğini kontrol edecek olan test kodunu yazın.
test("emoji list re-rendered appropriately, when filtering is performed.", () => {
  // Arrange
  render(<App />);
  // Act
  const input = screen.getByRole("textbox");
  const filter = "smile cat";
  emojiList.filter(({ keywords, title }) =>
    [keywords, title].some((text) =>
      text.toLowerCase().includes(filter.toLowerCase())
    )
  );
  // Assert
  fireEvent.change(input, { target: { value: filter } });
  expect(screen.queryAllByText(/cat/i)).toHaveLength(2);
});
// Liste üzerinden herhangi emojiye tıklandığında, ilgili emojinin kopyalandığını kontrol edecek olan test kodunu yazın.
it("proof that after click emoji, true one copied", async () => {
  render(<App />);

  const emojiButton = screen.getByText("100");
  fireEvent.click(emojiButton);

  const clipboardText = emojiButton.parentElement.getAttribute(
    "data-clipboard-text"
  );

  expect(clipboardText).toBeTruthy(); // Assert that clipboard text is not empty
  expect(clipboardText).toMatch("💯"); // Assert that clipboard text contains the expected emoji
});
