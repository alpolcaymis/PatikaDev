import Header from "../Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Başlık kısmının başarılı bir şekilde render edildiğini kontrol edecek olan test kodunu yazın.
test("header component render test", () => {
  // Arrange
  render(<Header />);

  // Act
  const images = screen.getAllByRole("img");
  const header = screen.getByText(/Emoji Search/i);

  // Assert
  expect(header).toBeInTheDocument();
  expect(images[0]); //1.ci resim
  expect(images[1]); // 2.ci resim
});
