# Evento: Your Gateway to Unforgettable Experiences - A Geo-Aware Event Discovery Platform

## Elevate Your Social Life: Discover, Connect, and Experience

Evento isn't just another event app; it's a dynamic, geo-aware platform designed to connect you with the experiences that matter most. Whether you're a seasoned socialite or an explorer seeking new adventures, Evento empowers you to create, discover, and manage events tailored to your unique interests and location. Dive into a world of vibrant gatherings, personalized recommendations, and real-time updates, all within a secure and intuitive environment.

## Core Features: Where Innovation Meets Experience

*   **Effortless Event Creation:**  Craft and share your own events with ease, specifying details like title, description, date, location, and categories.
*   **Intelligent Event Discovery:**  Explore a curated selection of events happening near you, powered by location-based search and personalized recommendations.
*   **Secure User Profiles:**  Create a personalized profile, manage your preferences, and connect with other event enthusiasts.
*   **Robust Authentication:**  Enjoy secure access with JWT-based authentication, ensuring your data and privacy are protected.
*   **Personalized Recommendations:**  Receive event suggestions based on your location, preferences, and past interactions.
*   **Interactive Reviews and Ratings:**  Share your experiences by reviewing and rating events, helping others make informed decisions.
*   **Favorite Events:**  Save the events you love to your favorites list for easy access and future planning.
*   **Real-time Notifications:**  Stay informed with instant notifications about nearby events, updates, and other important information.
*   **Multilingual Support:**  Experience Evento in your preferred language, thanks to our robust internationalization (i18n) system.
*   **Email Integration:** Receive email notifications for key events, such as new user registration or event updates.
*   **Admin Privileges:** Designated users can manage the platform with elevated privileges.
* **Testing:** The application can be tested.

## Technology Stack: The Foundation of a Seamless Experience

Evento is built on a cutting-edge technology stack, ensuring scalability, security, and a delightful user experience:

*   **Node.js:** The server-side JavaScript runtime environment, providing a non-blocking, event-driven architecture.
*   **Express.js:** A minimalist web framework for Node.js, used to build the RESTful API.
*   **PostgreSQL:** A powerful, open-source relational database management system (RDBMS) with robust geospatial capabilities, used for data storage.
*   **Passport.js:** Authentication middleware for Node.js, used with the JWT strategy for secure user authentication.
*   **JSON Web Tokens (JWT):** An industry-standard method for representing claims securely between two parties, used for authentication.
*   **Express-session:** Middleware for managing user sessions in Express.js applications.
*   **WebSockets:** A communication protocol that provides full-duplex communication channels over a single TCP connection, used for real-time updates.
*   **Nodemailer:** A module for Node.js applications to send emails.
*   **i18next:** An internationalization framework for JavaScript, used to support multiple languages.
*   **i18next-fs-backend:** A backend for i18next that loads translations from the file system.
*   **i18next-http-middleware:** Middleware for i18next that detects the user's language from HTTP headers or query parameters.
* **Jest:** A JavaScript testing framework.
*   **pg:** The PostgreSQL client for Node.js, used to interact with the database.

## System Architecture: A Symphony of Interconnected Services

Evento's architecture is designed for scalability, maintainability, and resilience:

1.  **Presentation Layer (Express.js):** Handles HTTP requests, routing, and response formatting.
2.  **Authentication Layer (Passport.js, JWT):** Manages user authentication and authorization.
3.  **Business Logic Layer (Routes):** Contains the core logic for event management, reviews, favorites, and notifications.
4.  **Data Access Layer (PostgreSQL, pg):** Interacts with the database for data persistence.
5.  **Real-time Communication Layer (WebSockets):** Handles real-time updates and notifications.
6. **Internationalization Layer (i18next):** Handles the internationalization.
7. **Email Layer (Nodemailer):** Handles the email sending.

## Database Schema: The Blueprint of Evento's Data

Evento's data is meticulously organized within a PostgreSQL database, leveraging its geospatial capabilities:

*   **`users` Table:**
    *   `id` (SERIAL PRIMARY KEY): Unique identifier for each user.
    *   `username` (TEXT UNIQUE NOT NULL): User's unique username.
    *   `password` (TEXT NOT NULL): User's password (hashed for security).
    *   `location` (GEOGRAPHY(POINT)): User's location for geo-based recommendations.
    *   `preferences` (JSONB DEFAULT '{}'): User's event preferences (e.g., categories).
    *   `language` (TEXT DEFAULT 'en'): User's preferred language.
    *   `is_admin` (BOOLEAN DEFAULT FALSE): Indicates if the user has admin privileges.
*   **`events` Table:**
    *   `id` (SERIAL PRIMARY KEY): Unique identifier for each event.
    *   `titles` (JSONB NOT NULL): Event titles in multiple languages.
    *   `descriptions` (JSONB NOT NULL): Event descriptions in multiple languages.
    *   `location` (GEOGRAPHY(POINT) NOT NULL): Event's location.
    *   `event_date` (DATE NOT NULL): Date of the event.
    *   `categories` (TEXT[] NOT NULL): Array of event categories.
    *   `created_by` (INTEGER REFERENCES users(id)): ID of the user who created the event.
*   **`reviews` Table:**
    *   `user_id` (INTEGER REFERENCES users(id)): ID of the user who wrote the review.
    *   `event_id` (INTEGER REFERENCES events(id)): ID of the event being reviewed.
    *   `rating` (INTEGER CHECK (rating >= 1 AND rating <= 5)): Rating from 1 to 5.
    *   `review` (TEXT): Text of the review.
    *   `created_at` (TIMESTAMP DEFAULT NOW()): Timestamp of when the review was created.
    *   `PRIMARY KEY (user_id, event_id)`: Ensures a user can only review an event once.
*   **`favorites` Table:**
    *   `user_id` (INTEGER REFERENCES users(id)): ID of the user who favorited the event.
    *   `event_id` (INTEGER REFERENCES events(id)): ID of the favorited event.
    *   `PRIMARY KEY (user_id, event_id)`: Ensures a user can only favorite an event once.
*   **`notifications` Table:**
    *   `id` (SERIAL PRIMARY KEY): Unique identifier for each notification.
    *   `user_id` (INTEGER REFERENCES users(id)): ID of the user who receives the notification.
    *   `event_id` (INTEGER REFERENCES events(id)): ID of the event related to the notification.
    *   `message` (TEXT NOT NULL): Content of the notification.
    *   `is_read` (BOOLEAN DEFAULT FALSE): Indicates if the notification has been read.
    *   `created_at` (TIMESTAMP DEFAULT NOW()): Timestamp of when the notification was created.
*   **`blacklisted_tokens` Table:**
    *   `token` (TEXT PRIMARY KEY): Blacklisted JWT token.
    *   `expires_at` (TIMESTAMP NOT NULL): Expiration time of the blacklisted token.

## Getting Started: Your Journey to Eventful Living

1.  **Prerequisites:**
    *   Node.js (v16 or higher recommended)
    *   PostgreSQL database server (running locally or remotely)
    * Visual Studio Code.
2.  **Clone the Repository:**
    ```bash
    git clone <https://github.com/munyaneza-w/Evento.git>
    
    ```
3.  **Database Configuration:**
    *   Create a PostgreSQL database named `Evento`.
    *   Update the database credentials in `config/db.js` with your PostgreSQL username, password, and port if necessary:
        ```javascript
        const { Pool } = require('pg');

        const pool = new Pool({
          user: 'postgres', // Default PostgreSQL user
          host: 'localhost',
          database: 'Evento',
          password: 'Password', // Replace "Password" with your PostgreSQL password
          port: 5432
        });
        ```
4.  **Install Dependencies:**
    ```bash
    npm install
    ```
5.  **Environment Variables:**
    *   Create a `.env` file in the root directory.
    *   Add the following environment variables:
        *   `PORT`: The port the server will run on (default: 3000).
        *   `JWT_SECRET`: A strong, randomly generated secret key for JWT encoding/decoding (e.g., `your-jwt-secret`).
6.  **Run the SQL Commands:**
    *   Connect to your PostgreSQL database using a tool like `psql` or pgAdmin.
    *   Execute the SQL commands provided in the "Database Schema" section to create the necessary tables.
7. **Run the test:**
    ```bash
    npm test
    ```
8.  **Start the Server:**
    ```bash
    npm start
    ```
    The server will start running on the specified port (default: 3000).

## API Endpoints

### Authentication (`/auth`)

*   **Functionality:** Handles user registration and login.
*   **Details:** The specific endpoints for registration and login are defined in `routes/auth.js` .
* **Authentication:** The authentication is based on JWT.

### Events (`/events`)

*   **Functionality:** Manages event-related operations.
*   **Details:** The specific endpoints for creating, reading, updating, and deleting events are defined in `routes/events.js` 

### Notifications (`/notifications`)

*   **Functionality:** Handles notification-related operations.
*   **Details:** The specific endpoints for managing notifications are defined in `routes/notifications.js`.

## WebSockets

*   **Functionality:** Provides real-time communication between the server and clients.
*   **Implementation:** The WebSocket server is initialized in `websocket.js` and integrated into the main application in `app.js`.
*   **Usage:**
    *   Clients can connect to the WebSocket server.
    *   The server can broadcast messages to all connected clients using the `broadcast` function.
    * The server send a message when an event occur.

## Internationalization (i18n)

*   **Functionality:** Supports multiple languages, enhancing the application's global reach.
*   **Implementation:**
    *   Uses `i18next`, `i18next-fs-backend`, and `i18next-http-middleware`.
    *   Translations are stored in JSON files in the `locales` directory.
    *   The language is detected from the `header` or `querystring`.
    *   **Configuration:** The `config/i18n.js` file configures i18next:
        ```javascript
        const i18next = require('i18next');
        const Backend = require('i18next-fs-backend');
        const middleware = require('i18next-http-middleware');

        i18next
          .use(Backend)
          .use(middleware.LanguageDetector)
          .init({
            fallbackLng: 'en',
            backend: {
              loadPath: './locales/{{lng}}/translation.json'
            },
            detection: {
              order: ['header', 'querystring'],
              caches: false
            }
          });

        module.exports = { i18next, i18nMiddleware: middleware.handle(i18next) };
        ```
* **How to add a new language:**
    * Create a new folder in `locales` with the name of the language (e.g., `fr` for French).
    * Create a `translation.json` file in the new folder.
    * Add the translation in the `translation.json` file.

## Email

* **Functionality:** Send email.
* **Implementation:**
    * Uses `nodemailer`.
    * The email configuration is in `config/email.js`.
    *   **Configuration:** The `config/email.js` file configures Nodemailer:
        ```javascript
        const nodemailer = require('nodemailer');

        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'w.munyaneza@alustudent.com', // Replace with your email
            pass: 'cihm nvqf ypgo tyyt' // Replace with your email password
          }
        });

        module.exports = transporter;
        ```
* **How to configure the email:**
    * Update the email credentials in `config/email.js` with your email and password.
* **When the email are sent:**
    * The email are sent when an event occur.

## Database

*   **Type:** PostgreSQL
*   **Configuration:** `config/db.js`
*   **Connection:** A connection pool is used to manage database connections.
*   **Schema:** The specific database schema (tables, columns, relationships) is defined in the "Database Schema" section.
*   **Connection Test:** The `config/db.js` file includes a connection test:
    ```javascript
    pool.connect((err, client, release) => {
      if (err) {
        console.error('Database connection error:', err.stack);
      } else {
        console.log('Database connected successfully');
        release();
      }
    });
    ```

## Authentication

*   **Type:** JWT (JSON Web Tokens)
*   **Strategy:** `passport-jwt` is used to implement the JWT strategy.
*   **Secret:** The JWT secret key is defined in `app.js` (`your-jwt-secret`) and should be stored in an environment variable for security.
* **How it works:**
    * The user send a request to `/auth`.
    * The server verify the credentials.
    * If the credentials are correct the server send a JWT.
    * The user send the JWT in the `Authorization` header for subsequent requests.
    * The server verify the JWT.

## Testing

* **Type:** Jest
* **Configuration:** `jest.config.js`
* **How to run the test:**
    ```bash
    npm test
    ```

## Logging

*   **Implementation:** A custom logging middleware is used to log request details (method, URL, headers).
*   **Location:** Defined in `app.js`.

## Contribution

*   If you want to contribute to the project, please follow these guidelines:
    *   Fork the repository.
    *   Create a new branch for your feature or bug fix.
    *   Write clear and concise commit messages.
    *   Submit a pull request.

## License

*   #MIT License

Copyright (c) 2025 Wilson Munyaneza

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Future Enhancements

*   **Detailed API Documentation:** Create comprehensive API documentation using OpenAPI/Swagger.
*   **Database Migrations:** Implement database migrations to manage schema changes.
*   **Advanced Search and Filtering:** Add advanced search and filtering capabilities for events.
*   **User Roles and Permissions:** Implement user roles and permissions for more granular access control.
*   **Error Handling:** Implement more robust error handling and logging.
* **More test:** Add more test.
* **Image:** Add image to the event.

## Conclusion

Evento is more than just an event locator; it's a testament to the power of modern web technologies and thoughtful design. This project demonstrates a strong understanding of full-stack development, database management, security, real-time communication, and user experience. Evento's scalable architecture, comprehensive features, and detailed documentation make it a valuable example of a well-engineered web application.

