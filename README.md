# Security Dashboard

## Overview
This project provides a real-time dashboard for monitoring security logs, visualizing attack trends, and tracking live hacking attempts. It consists of two main components:

- **Dashboard**: Displays security logs in a table and attack trends in a line chart.
- **Hacker Bot**: Simulates real-time hacker and bot activity, showing live attack attempts and trends.
- **API Integration**: Fetches security logs from a backend API for real-time monitoring.

## Features
- Displays security logs with attack details (type, source, action, timestamp).
- Visualizes attack trends using `recharts`.
- Simulates real-time hacker and bot activities.
- Refresh and clear logs functionality.
- Responsive UI with Tailwind CSS.
- Fetches real security data from an API endpoint.

## Tech Stack
- **Framework**: React
- **UI Styling**: Tailwind CSS
- **Data Visualization**: Recharts
- **State Management**: React Hooks (useState, useEffect)
- **API**: Express.js (Backend for security logs)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Rishi-kaul/honeypot-data-anaylsis.git
   cd honeypot-data-anaylsis
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
honeypot-data-anaylsis/
│── app/
│   ├── dashboard/page.js  # Security logs dashboard
│   ├── hacker-bot/page.js # Real-time hacker/bot simulation
│── components/
│── public/
│── styles/
│── api/
│   ├── logs.js  # API route for fetching security logs
│── package.json
│── README.md
```

## API Usage
The project includes an API route to fetch security logs.
- **GET `/api/logs`**: Returns the latest security attack logs.
- **POST `/api/clear`**: Clears the logs.

## Usage
- **Dashboard Page (`/dashboard`)**:
  - Displays security logs in a structured table.
  - Visualizes attack trends with a line chart.
  - Fetches live data from the API.
  - Refresh button to reload logs.

- **Hacker Bot Page (`/hacker-bot`)**:
  - Generates random hacker/bot activities in real-time.
  - Displays the latest hacking attempts.
  - Provides an attack trend graph.
  - Clear logs button to reset activities.

## Contributing
Feel free to submit issues and pull requests.

## License
This project is licensed under the MIT License.

