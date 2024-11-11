eSymbiEat College Canteen Ordering and Management App is a contemporary, digital solution to manage food ordering to win against all hindrances related to the traditional operations of both college canteens. It is a highly demanded &amp; really helpful app within the campus where the long queue system & manual processing of orders waste time for students and faculties which makes this app a necessity. eSymbiEat will prepare the whole Ordering process online and with their speed of all communications, Reducing waiting time with wholeness enhancements in canteens for Students, Students can order food way beyond the periphery of your eatery and Track their order right on time and pay- totally from the smartphone. 

![photoWebsite](https://github.com/user-attachments/assets/c701ad4c-e87d-4c06-8270-602f83e76dba)


Objectives:
The primary objectives of the eSymbiEat app are:
Allow students to place and manage orders, which includes viewing the menu
 items, add and remove options, and track status.
Secure login and registration with session management through JWT (JSON Web Tokens) to ensure sensitive details about the user, including order history and other personal data, are securely stored and retrieved.
Using Axios for smooth front-end communication with back-end APIs ensures data is fetched and displayed dynamically without requiring full-page reloads.
Scope:
The core areas the eSymbiEat application focuses on are the following:
User Interface (UI): The application utilises the responsive design from React. This contains the following pages: homepage, food pages, cart page, user profile page, and checkout page. Users can change between the pages using React Router, and the UI is interactive and user-friendly.
Food Management: Users can easily search for their food items with images, titles, prices, and descriptions. They can filter foods under particular categories, and search by specific names and view additional information on each food item on the individual food page. Chatbot adds an interactivity layer in providing end-users with information about food items based on their queries.


![image](https://github.com/user-attachments/assets/205686e5-08a2-494c-ad4d-2fe3c1f85354)

Cart and Order Management: End-users will be able to add food items, change quantities, and complete a checkout transaction. This app can easily update any cart management with order details captured in the back end for processing.
Authentication: The app has secure user authentication provided through the JWT tokens to let the users authenticate, register, login, and maintain their profiles. This ensures that the information remains safe with the user and only the authenticated person can access it.
Back-end integration: The Node.js and Express.js frameworks are used for building the back-end of this application. And MongoDB is being used as the database. With it, the back-end manages functionalities of user authentication, food data management, order creation, etc. The application does support real-time communication with the front end through RESTful APIs.
Generative AI Integration: The chatbot is an extra functionality feature, which allows a user to ask questions regarding food products. It fetches its information from external databases based on a user's query.
Features:
The app provides a comprehensive feature set that intuitively blends to create a better user experience:
Browse and Search Food: A user can preview food items, filter, and find targeted foods.
Interaction with the Chatbot: The user can query the bot about food items, and appropriate responses are returned from it fetched from external sources.
Management of Shopping Cart: The user can add items to the shopping cart, alter the number of quantities, and delete items.
Authentication of the User: Secure login, registration, and session management are included to keep the data safe for the user.
Order Placement: The user can order, view the cart, and check out for payment.
Responsive Design: The app is designed so that it performs very well on all the devices and screen sizes with no problems.


![image](https://github.com/user-attachments/assets/b8508a3d-85ab-440b-a74c-7d7355efc69e)


TECHNOLOGY STACK

MERN Stack:
The MERN stack is one of the most robust technology stacks available, providing a complete framework for JavaScript-based full-stack web-app development. Database: MongoDB Express. React — the back-end framework for js. js to handle the front-end, and Node. The runtime is javascript.
MongoDB:
MongoDB is a NoSQL database. It uses a flexible data format called BSON (Binary JSON) which is very similar to JSON. It also enables developers to store unstructured or semi-structured data, so it is ideal for apps that require flexibility and scalability like eSymbiEat. The app will be scaled out quickly to the massive scale of data and traffic when users start coming as MongoDB is horizontally scalable. MongoDB — In eSymbiEat, MongoDB saves everything that is non-relational like user profiles, food items, order history etc. related to the app. The ODM library for MongoDB called Mongoose makes easy money into the database to integrate perfectly into the application.
Express.js:
Express. js is a simple and powerful web application framework for Node. js. This makes it easier to create RESTful APIs and manage HTTP requests/responses which are essential for making our dynamic data-driven app work, like eSymbiEat. Express — In the eSymbiEat app js deals with all the routes of food data, user authentication ( login / register ), cart, and order processing. It It also allows registration and login onto a back end instance and connects with MongoDB as the database, handles basic requirements like validating user inputs and error handling.
React.js:
React. js is a Facebook JavaScript library for creating interactive user interfaces. It has spa support, which means your users can interact with the dynamic content without having to load a full page. This uniqueness in the concept of virtual dom leads to easier, therefore better rendering. by reducing the number of times that we actually touch the DOM wrapper. For the eSymbiEat, React. All front-end components of the application (home page, food page, cart page, user profile page) were built using js. This application possesses a responsive and mobile based user interface to be able to provide seamless experience across any device.
Node.js:
Node.js is a JavaScript runtime environment based on the V8 JavaScript engine of Google Chrome that lets developers run scripts either on the client-side or server-side. Node.js enables for scalable, event-driven applications and therefore ideal for web servers and handling many concurrent connections. Node.js enables running the server to serve HTTP requests, manage sessions, and communicate with MongoDB in the eSymbiEat using Express.js.
Generative AI and Chatbot:
A Generative AI-based chatbot is implemented within the application to make it interactive for the users. The chatbot is programmed to answer the queries of the users by fetching current information from other sources, This is what gives it a place in answering common questions.








SYSTEM ARCHITECTURE

Architecture Overview:
The eSymbiEat app is built using the MERN stack architecture, which integrates MongoDB, Express, React, and Node.js. Each component plays a vital role:
MongoDB will be used  as the database, storing collections like users, menu items, and orders.
Express and Node.js make the backend, managing business logic, API routes, and server-side operations.
React powers the frontend, providing an interactive and responsive user interface for students and staff.
The system architecture diagram demonstrates data flow:


Database Structure:

User Flow:                                                         

CODE EXPLANATION

A.Backend (Node.js with Express)
1. server.js - Setup application
Purpose: server.js is the entry point of your application. It sets up the Express server, connects to a MongoDB database, and sets up routes.
Main Components:
Express Setup: Configures the Express app and specifies middleware to handle requests.
Database Connection: employs Mongoose to connect to the MongoDB database, making it ready to store and retrieve.
Middleware: Includes middleware for CORS (Cross-Origin Resource Sharing), parsing JSON data, and authenticating requests using JWT.
Routing: It defines routes for several functionalities like user authentication and product management.

2. Authentication Routes (authRoutes.js)
Purpose: It manages the process of registration and login of users.
Main Functionality:
User Registration: The user data that is taken such as the username, password, hashes the password, and loads the new user information into the database.
User Login: It checks the credentials by comparing with the stored password by authenticating the entered password, it should hand out JWT for easy and efficient further access afterward upon successful login.
3. Product Routes (productRoutes.js)
Purpose: It controls all activities related to products, which includes list products etc or view details of a product.
Key features:
Get All Products: This retrieves and returns all the products that are stored in the database.
Get Single Product: This allows users to retrieve detailed information relating to a specific product using its ID.










B.Frontend (React.js)
App. js — Application Base Routing
Function: It is the main component which manages the routing for your application. Pages such as the homepage, product details, cart and so on are navigated through React Router.
Key Components:
React Router: This is responsible for moving between the different views within the application; i.e. product listing, login and cart pages.
State Management: The Context API or another state management tool (e.g., Redux) keeps track of user state, this can be the authentication status of the user as well as cart items.

HomePage.js- Displays Home page
Objective: Exhibit food items with thumbnail images. Filters food items based on tags and search terms, to afford a dynamic browsing.
Key Features:
Dynamic Data Fetching
This uses the useEffect hook when loading data based on the searchTerm or tag parameter.
The component dynamically determines which API function it's going to call (getAllByTag, search or getAll) depending on which of the tag and/or searchTerm exists, ensuring that the proper data is loaded.
After the data is fetched, it sets the foods state via dispatch action.
Loading of Tag Data:
Tags are loaded once when the component first mounts-by way of getAllTags.
The fetched tags will be dispatched to the reducer to load them into the tags state and thereby allow filtering options.
Conditional Rendering of Components:
Tags Component: If tags are available, a list of tags from the tags component is rendered. Users can click these tags to filter the types of food items being displayed.
NotFound Component: If no food items were presented (Food.Length === 0), it would render a notFound component with a suitable message.
Thumbnails Component: Renders that list of food items arranged in a grid with the Thumbnails component, only if the Foods array has contents within it.
Responsive Loading Depending on Search and Filter:
The code chooses which API to call based on whether one is using tags or searchTerm, allowing for a revamp of the loaded-off-screen data without a page reload and no excessive rerendering.
This increases user's dexterity in their browsing experience, being able to see all items on display, search via keywords, or filter via tags with ease. 







FoodPage. js - Products Details Page
Displays information about a food and the option to add it to the cart
Key Features:
Data Fetching: Fetching the food by ID using the getByIdfunction with ID from the URL parameters and updating the food state.
Conditional Rendering: NotFound component shows up with a message if the food item is not found. If found, the detail is displayed.
Food details display:
Image: Shows the food image from its URL.
Name And Favorite Status: Shows the food name in addition to an icon to add if identified as a favorite.
Rating: Uses a StarRating component to show food ratings.
Origins: Maps over origins array to put them all on display.
Cook Time: Show estimated cook time.
Price: Shows price through a Price component.
Add to Cart: There is a button that allows adding the item to the cart through the addToCart function and navigates thereafter to the cart page. 


CartPage.js- Cart Management Page
Purpose:To show all cart items of customer and also allow to update the quantity or remove a product.
Key Features:
Dynamic Rendering of Cart Items
In the event that no items exist in the cart, the component is going to display a notfound component with the message "Cart Page Is Empty!".
Should any number of items exist, the component will render them within a list using a map function such that the content is populated dynamically depending on what is in the cart.
Display of cart items details
Image: Is going to render an image of the item, based on a dynamic URL coming from item.food.url.
Name: Name of the item as a link that redirects to the item's detailed page.
The Quantity The Selector
Is simply the <selector> dropdown, allowing quantities of between 1 and 10, and each item in the cart's quantity is incremented according to what has been selected.
The onChange calls the quality function and passes in the item and the new quantity so that the cart can be updated.

Remove Item Functionality
Each item will contain a "Remove" button, which, when clicked, will call removeFromCart with the item.food.id in order to remove the item from the cart.
The interaction with removeFromCart is keeping a real-time track of the cart and deleting items as the user presses the button.
Cart Summary and Checkout
Total Count: It is the composite archetype related to each item in the cart. The sum of all individual item quantities.
Total Price: Also an amalgamation of each item in the cart. It is the sum of all the individual Price components.
Checkout Link: It is the "Proceed To Checkout" link to the checkout page.













Login page: For Account and Login 
Purpose: The Login page’s main purpose is to provide a user interface for logging into an application, handling form submission, and validating user input.
Key Features:
Form Management and Validation: 
Uses react-hook-form to manage form state, validation, and errors. 
Directly validates input fields in the form to ensure required fields and basic format of the fields (such as email format).
Custom Components for Modularity:
Uses custom components like title, input, or button for better modularity across the app, making the app easier to set up.
Regex Validation for Email:
A basic regex validation to ensure the email entered matches a basic email format. If it does not, a warning is presented to inform the user of the invalid input. 
Error Handling:
For any failed validation within the input, it will show an error message real-time under the input field. 





CHALLENGES AND SOLUTIONS
Design of a complete full-stack food delivery app with the MERN stack and Integrating Generative AI for the chatbot functionality created a host of conflicts. This document outlines the major problems that occurred in developing the app and how problems were solved.
1. Challenge: Managing User Authentication and Authorization-
Challenge Description: It was of utmost importance that users were successfully able to register for new accounts, log in, and access the right parts of the application. Handling passwords, with a fair deal of security issues prevailing, and authentication using tokens, specifically JWT (JSON Web Tokens), proved to be the challenge. Managing sessions between the front-end as well as the back-end, especially with a stateless architecture further added to the complexity.
Solution: To tackle this challenge, JWT authentication was employed. At the time of registration, the hashing of the user passwords was stored using scripts, the widely used hashing library. The way passwords were saved was not in plain text but rather in a secure and unreadable format. After login, the server produced JWT that was returned to the front end.
2. Challenge: Integrating Real-Time Data from Multiple Sources-
Challenge Description: The reconciliation of data from various sources might have introduced inconsistencies, for example, listing food items and prices. Additionally, the UI was constantly refreshed in real-time based on cart or food information variations, making state management and API calls to be handled with care.
Solution: The problem was managed by using Axios mainly as a foremost application for asynchronous HTTP requests to the backend and external data. sources. In any case, I made sure that real-time data consistency was maintained throughout the entire application by encapsulating the logic of fetching data inside custom React hooks. It fetched data only when needed and re-rendered UI components using the latest available data.
3. Challenge: Debugging Runtime Errors-
Challenge Description: Unforeseen runtime errors due to Mistakes or critical interactions of code that are extremely time-consuming and hard to debug.
Solution: I used debugging tools to identify exactly where each error was located and included error handling within certain sections to give clear feedback for potential issues. Also, I kept a log of all types of errors with solutions so as not to have the same problem twice in the future.
4. Challenge: Managing Project Timeline-
Challenge Description: The project timeline collided with academic commitments, resulting in days of slight slack followed by frantic catching up.
Solution: A weekly schedule was created that designated exact time allocations for work on the project and, based on complexity and the deadline, prioritised tasks. This allowed progress to be smooth and all the critical milestones were met.











CONCLUSION

eSymbiEat App is an extremely convenient way of managing the canteen operation with easy and fast ordering by students and fast order handling for the staff working in the canteen. The digitization of the entire sequence of order handling reduces waiting times, improves user experience, and keeps track of orders and stock, at the same time, it facilitates faster service because all of it is managed by a computer. React, Node js, and MongoDB are technologies used to ensure that the solution is robust and scalable for a higher end-user capacity. There is so much more room for improvement and growth down the road. UI: A whole lot of polish would be applied, making the app prettier and easier to work with. For example, integration with analytics would help in the identification of trends in orders and investigation into better management of stock and preferences of customers. Some of the feature paths could be expansion, wherein loyalty programs or real-time order status notifications apart from the existing messages could be added to the application and multi-canteen capability. All these would add value to the application, and hence it could continue to be highly relevant to students and staff alike at the canteen.
