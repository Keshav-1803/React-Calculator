---

# React Calculator

This is a simple calculator app built using React. It allows users to perform basic arithmetic calculations such as addition, subtraction, multiplication, and division.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/react-calculator.git
   ```

2. Navigate into the project directory:

   ```bash
   cd react-calculator
   ```

3. Install dependencies using npm:

   ```bash
   npm install
   ```

### Running the App

Once you have installed the dependencies, you can run the app locally. In the project directory, you can run:

```bash
npm start
```

This will start the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Features

- Addition
- Subtraction
- Multiplication
- Division
- Clear (C)
- Backspace (⌫)
- Equals (=)

## Usage

1. Enter numbers and perform calculations using the buttons provided.
2. Use the "C" button to clear the input.
3. Use the "⌫" button to delete the last digit.
4. Press "=" to get the result of the calculation.

## Screenshots

Include screenshots of the app here if applicable.

## Technologies Used

- React
- CSS Modules

## Project Structure

- `App.js`: Main component of the application. Handles state and logic for calculations.
- `Display.js`: Component for displaying the input and result.
- `Buttons.js`: Component for rendering the calculator buttons.

## How it Works

- The `App` component maintains the state of the input data.
- When a button is clicked, the `handleClick` function is called.
- Depending on the button clicked (`+`, `-`, `*`, `/`, `C`, `⌫`, `=`), the corresponding action is performed.
- The result is displayed in the `Display` component.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
