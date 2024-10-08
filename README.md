# Hephaestus Creations

- Type of Arts & Crafts: **Sculpture and Modeling**
- It includes: Clay Sculpture, Stone Sculpture, Metal Sculpture, Food Carving, Natural Material Sculpture, Beaded Sculpture & Wood Engraving.

## Project Overview

### Where Art Comes to Life

Hephaestus Creations is a dynamic platform where art comes to life, offering users a seamless experience to explore, manage, and interact with various artworks and crafts. The website features customizable themes, a robust art details page, and a personalized user space for managing and showcasing art pieces. It supports effortless navigation, real-time updates, and interactive user engagement, making it an ideal destination for art enthusiasts and creators alike.

## Live Site Link

- [Firebase Live Site](https://hephaestus-creations.web.app/)

## Notable Features of the Website

- **Item Management**: Logged-in users can seamlessly add, modify, or remove items from the database, ensuring complete control over their art and crafts.
- **Filtering Options**: Users can efficiently filter their added items based on customization value, such as "Yes" or "No".
- **Persistent Theme Customization**: Toggle between Dark and Light themes with settings that persist across sessions, providing a consistent user experience.

## Technologies used in this Project

- ReactJS
- Javascript
- TailwindCSS
- Express.js (Server Side)
- MongoDB (Server Side)

## Run the Project Locally

1. **Clone the Repository**:

    ```sh
    git clone https://github.com/nazmul-nhb/hephaestus-creations-client.git
    cd hephaestus-creations-client
    ```

2. **Install Dependencies**:

    ```sh
    npm install
    ```

3. **Set Up Environment Variables**: Create a `.env.local` file in the root directory and add the necessary environment variables. (**Important!**)

4. **Run the Application**:

    ```sh
    npm run dev -- --host
    ```

5. **Access the Site**: Open your browser and go to `http://localhost:5173/` or `http://192.168.1.12:5173/` from other devices on the same network to view the application.

## Utility Packages Used in this Project
<!-- markdownlint-disable MD033 -->
<details>
<summary>Click to Expand</summary>

- [react-simple-typewriter](https://www.npmjs.com/package/react-simple-typewriter) in item card and art category page
- [react-awesome-reveal](https://www.npmjs.com/package/react-awesome-reveal) in different pages
- [react-tooltip](https://react-tooltip.com/) on Navbar Profile Picture & Logout Button
- [aos](https://michalsnik.github.io/aos/) for Animation On Scroll
- [animate.css](https://animate.style/) for Animation Effects on ErrorPage
- [react-hook-form](https://react-hook-form.com/) for Handling Forms
- [swiper](https://swiperjs.com/) for Slider/Swiper on Homepage Banner
- [react-helmet-async](https://www.npmjs.com/package/react-helmet-async) for Dynamic Page Titles
- [react-icons](https://react-icons.github.io/react-icons/) for Showing Icons
- [react-toastify](https://fkhadra.github.io/react-toastify/introduction) for Showing Toasts
- [sweetalert2](https://sweetalert2.github.io/) for Showing Modals in few Pages
- [react-fast-marquee](https://www.react-fast-marquee.com/) for Horizontal Auto-Scroll on Homepage in Reviews Section

</details>
<!-- markdownlint-enable MD033 -->

<!-- 
### Notable Features of the Website

- You can toggle **Dark/Light** theme for the whole website
- Even if you refresh the page or browse later the theme will remain the one that you have set previously
- On **Home**, you'll notice a cube shaped swiper in hero section
- On **Art Details Page**, you can click on **Go Back** button to navigate to the page you came from to this page
- You can click on **Order Now** button and it will show you a success modal
- In **My Art & Crafts** page, you can delete or update items that you added
- You can also filter them by customization options : **Yes** or **No**
- If you click **Update** button, it will open a popup where you can update the item that you added
- If you click on **Delete** button, it will ask for confirmation
- If you are a new user or haven't anything yet, you'll find a msg saying that you haven't added anything
- In **All Art & Crafts** page you'll find all the items added by all users
- In **Categories** section, if you click on any category card, it will take you to the page where you'll find all the items from that categories
- If there is no items from that category, you'll see that the page showing there is nothing from that category
- Below that you find **reviews** from our most valuable customers in marquee style
- Under that section, you'll find about our trusted & beloved **Partners**
- In **Footer** section, you'll find a subscribe button to get lates newsletter 
- On **Contact** page you will find a contact form. If you're already logged in, your name and email will be there in the input fields by default. if you're not logged in, you have to input your name and email manually
- When you click on the **Send Message** button, it'll show you a pop-up modal
- On **Login** page, you can login using your email and password or with *Google*, *Facebook* or *Github* account. There is also a redirect link to navigate you to the **Register** page if you need a new account
- After successful login, you'll see a toast
- If your password and email do not match, you'll see an error message as toast. if there is other errors during login you'll also see those as toast
- On **Register** page, you must fill in all the fields. Your password should be 6 characters long and should contain at least an upper and a lower case letter. If you don't follow these, you'll notice error messages below the input fields
- After successful registration, you'll see a toast and you'll be redirected to login page
- If you click on the profile picture on the navbar it will take you to you *profile details* page. You can see your information there, i.e. your name, email, whether your email is verified or not, last log in time and account creation date.
- On **Navbar** beside your profile picture, you can see a logout icon. You can simply log out by clicking this icon
- You will notice animation effects on most of the pages of the site.
- If you enter any invalid URL suffix, you'll see a **404 Error Page**. This page has special animation effects
-->
