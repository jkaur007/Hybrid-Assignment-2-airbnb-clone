# Scrimba / AirBnb

A simple Scrimba React project, practising passing `props` from a parent to a child component.

---
Objectives
1.	Log in or create an account with Scrimba
2.	Watch the Build an AirBnb Experiences clone playlist
3.	Complete the React Section 2 Solo Project
4.	Use this Scrimba template to complete hybrid assignment 2
5.	Submit a link to your scrim containing the completed project.


## Scrimba Course Link

- [Build an AirBnb Experiences clone](https://scrimba.com/playlist/pqQgrcN)

> [!NOTE]
> (Free) subscription and login required to follow the course.

<<<<<<< HEAD
---
=======
<h1>Project Description: Airbnb Clone (Scrimba)</h1>
This project is an Airbnb Clone built using React.js as part of a Scrimba course. It replicates the core UI and functionality of Airbnb’s listing pages, allowing users to explore rental properties with a clean and modern design.

The clone includes responsive layouts, dynamic listing components, and modular React architecture, providing an interactive experience similar to Airbnb. It serves as a hands-on learning project to practice React components, props, and state management while focusing on user-friendly UI/UX.
here are the screenshots

![Screenshot 2025-02-11 021002](https://github.com/user-attachments/assets/81349b96-81c3-4c02-92ef-d0e0b9ac66b6)

![Screenshot 2025-02-11 021008](https://github.com/user-attachments/assets/d32574d1-27af-4c19-a84b-928ef5ad5234)
>>>>>>> 300b46b3cffd46ed89c93016ea8106bf2433c436



## Dynamic Image Paths

For dynamic image paths, store the images in the `/public/` folder. You can put them in a sub-folder, in this case `cards/`.

### `cardData.js`

This contains an array of objects, mimicking a `JSON` file:

```JavaScript
export default = [
  {
    // Other key/value pairs
    coverImg: "katie-zaferes.png",
    // Other key/value pairs
  },
  // More objects...
]
```

### `Card.jsx`

```jsx
import cardData from "../cardData"

function Cards() {
  const cards = cardData.map((card) => {
    return (
      <Card
        key={card.id}
        card={card}
      />
    )
  })

  return (
    // Other JSX
    <ul id="card-list">{cards}</ul>
    // Other JSX
  )
}
```

### `Card.jsx`

In `Card.jsx`, I've set the path to the image from `coverImg` as follows:

```jsx
function Card({ card }) {
  // Other ode

  return (
    // Other JSX
    // <img
      src={`/scrimba-airbnb/cards/${card.coverImg}`}
      // Other props and attributes
    // />
    // Other JSX
  )
}
```

### The `/public/` Folder

The images are stored in `/public/cards`.

> [!WARNING]
> You must NOT include `'/public/'` in the file path, or the images won't display.

---

## Testing

Tested on Windows 10 with:

- Chrome
- Firefox
- Microsoft Edge

Page tested in both browser and device views.
