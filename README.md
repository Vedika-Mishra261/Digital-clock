# Digital Clock

A simple and responsive Digital Clock built using HTML5, CSS3, and Vanilla JavaScript. It displays the current local time in hours, minutes, and seconds and automatically updates every second.

## 📌 Project Overview

The Digital Clock is a beginner-friendly frontend web development project created to practice JavaScript Date objects, timers, DOM selection, and DOM manipulation.

The clock displays the current system time in `HH:MM:SS` format without requiring the user to refresh the webpage.

## 🎯 Objective

- Display the current hours, minutes, and seconds.
- Update the time automatically every second.
- Practice JavaScript Date objects.
- Understand the use of `setInterval()`.
- Learn DOM selection and DOM updates.
- Create a simple and responsive user interface.

## 🛠️ Technologies Used

- **HTML5** – To create the webpage structure.
- **CSS3** – To design and style the digital clock.
- **JavaScript** – To get and update the current time.

## 📂 Project Structure

```text
Digital-Clock/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ✨ Features

- Displays real-time local system time.
- Shows hours, minutes, and seconds.
- Automatically updates every second.
- Uses leading zeros for single-digit numbers.
- Simple and clean user interface.
- Responsive design for desktop, tablet, and mobile devices.
- No external libraries or frameworks required.

## ⚙️ How It Works

1. JavaScript uses the `Date()` object to get the current system time.
2. The `getHours()` method gets the current hours.
3. The `getMinutes()` method gets the current minutes.
4. The `getSeconds()` method gets the current seconds.
5. Leading zeros are added when the values contain only one digit.
6. The time is displayed on the webpage using DOM manipulation.
7. The `setInterval()` method updates the clock every 1000 milliseconds (1 second).

## 🚀 How to Run the Project

Follow these simple steps:

1. Download or clone this project to your computer.
2. Open the project folder in Visual Studio Code or any code editor.
3. Make sure all three files (`index.html`, `style.css`, and `script.js`) are in the same folder.
4. Open the `index.html` file in your web browser.
5. The digital clock will start displaying the current time automatically.

### Run Using VS Code

You can also use the Live Server extension in Visual Studio Code:

1. Open the project folder in VS Code.
2. Install the Live Server extension if it is not already installed.
3. Right-click on `index.html`.
4. Select **Open with Live Server**.

## 📖 Concepts Learned

- HTML page structure.
- CSS styling and responsive design.
- JavaScript Date objects.
- JavaScript functions.
- `setInterval()` method.
- DOM selection using `getElementById()`.
- DOM manipulation using `textContent`.
- String formatting and leading zeros.

## 🔮 Future Improvements

The project can be extended with the following features if required:

- 12-hour and 24-hour time formats.
- AM/PM display.
- Date and day display.
- Dark and light themes.

## 👨‍💻 Author

**Vedika**

Frontend Web Development Intern

## 📄 License

This project is created for learning and educational purposes.
