# Diwali Greeting Card Maker

A web application that allows users to design personalized Diwali greeting cards with interactive features. Users can select templates, customize text, add stickers and images, and create a unique greeting card to share with their loved ones.

## Table of Contents

- [Features](#features)
- [Preview](#desktop-view)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Features
- **Template Selection**: Choose from a variety of card templates.
- **Customizable Text with AI Assistance**: 
  - Add personalized messages and titles with customizable fonts, sizes, colors, and styles (e.g., bold).
  - Use AI-powered suggestions to generate message ideas and title suggestions based on the recipient.
- **Recipient Prefill**: Pre-fills recipient name when generating a message if provided in the title.
- **Stickers and Images**: A library of Diwali-themed stickers and an option to upload custom images.
- **Drag and Drop Functionality**: Move text, stickers, and images freely around the card for a custom layout.
- **Real-Time Preview**: See all changes live as you customize the card.
- **Downloadable Card**: Generate the final customized card as an image file with the `Download` button.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.


## Desktop View

  ![View 1](https://github.com/ikbal-hussain/diwali-card-maker/blob/main/src/assets/Diwali-card-maker-screenshot-1.png)


## Technologies Used

- **Frontend**: React.js, HTML, CSS
- **Libraries**:
  - `html2canvas`: For rendering the card as an image.
  - `react-draggable`: For enabling drag-and-drop functionality.
  - `axios`: For handling API calls to the AI suggestion feature.
- **Version Control**: Git, GitHub

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ikbal-hussain/diwali-card-maker.git
   cd diwali-card-maker
   
2. **Install dependencies**:

   ```bash
   npm install
  
3. **Start the development server**:

   ```bash
   npm run dev

## Usage

1. **Launch the Application**:
   - After following the installation steps, open your browser and open the deployed link or go to the development server URL (usually [http://localhost:3000](http://localhost:3000)) to access the Diwali Greeting Card Maker.

2. **Select a Template**:
   - Choose from a range of beautifully designed Diwali card templates on the homepage. Selecting a template will load it as the base for your greeting card.

3. **Customize Text**:
   - Click on any text field to edit it. You can type your own personalized messages or use the **AI Assistance** feature to get message suggestions based on the recipient and word count.
   - Adjust text properties like font, size, color, and style (e.g., bold) to make your message visually appealing.

5. **Move and Position Elements**:
   - Use the drag-and-drop functionality to arrange components anywhere on the card. 

6. **Preview Your Card**:
   - The **Real-Time Preview** feature allows you to view all changes instantly, helping you see how the final card will look as you make adjustments.

7. **Download the Card**:
   - Once satisfied with your design, click the **Download** button. The card will be saved as an image file that you can easily share or print.

8. **Responsive Design**:
   - You can create and customize your greeting card on any device, whether it’s a desktop, tablet, or mobile phone, for a seamless experience.

