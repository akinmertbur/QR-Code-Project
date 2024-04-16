# QR Code Generator

This simple Node.js application allows users to generate QR codes from URLs.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the necessary dependencies.

## Usage

1. Run the application by executing `node index.js` in your terminal.
2. Follow the prompts to enter the URL you want to convert into a QR code.
3. After entering the URL, the application will generate a QR code image and save it to the project directory.
4. The application will also create a text file containing the user input for future reference.

## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer): Used to prompt the user for input.
- [qr-image](https://www.npmjs.com/package/qr-image): Used to generate QR code images.
- [fs](https://nodejs.org/api/fs.html): Native Node.js module used to interact with the file system.

## Contributing

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
