import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaDownload,
  FaPalette,
  FaFont,
  FaImage,
  FaShapes,
  FaTablet,
  FaMobile,
} from "react-icons/fa"; // Feature icons
import "../styles/Features.css"; // Assuming CSS for styling

function Features() {
  return (
    <section className="features-section">
      <h2 className="features-title">
        Exciting Features of Our Diwali Card Maker
      </h2>
      <p className="features-description">
        Celebrate this Diwali with a personalized touch! Our Diwali Card Maker
        offers a unique and interactive way to design your own cards with
        beautiful elements, custom backgrounds, and more. Check out the features
        below!
      </p>

      <div className="features-grid">
        {/* Feature 1 */}
        <div className="feature-item">
          <FaPalette size={40} className="feature-icon" />
          <h3 className="feature-heading">Customizable Templates</h3>
          <p className="feature-description">
            Start with a selection of beautifully designed templates that can be
            customized to match your style. Change colors, backgrounds, borders,
            and make your card truly unique.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-item">
          <FaFont size={40} className="feature-icon" />
          <h3 className="feature-heading">Personalized Text Styling</h3>
          <p className="feature-description">
            Adjust font styles, sizes, colors, and more to personalize your
            message. Add bold, italic effects, and align the text just as you
            like to add a special touch to your greeting.
          </p>
        </div>

        {/* Feature 3 */}
        {/* <div className="feature-item">
          <FaImage size={40} className="feature-icon" />
          <h3 className="feature-heading">Add Your Own Images</h3>
          <p className="feature-description">
            Upload your favorite images or festive photos directly onto your card. Position, resize, and layer images easily to create a dynamic and heartwarming greeting.
          </p>
        </div> */}

        {/* Feature 4 */}
        <div className="feature-item">
          <FaShapes size={40} className="feature-icon" />
          <h3 className="feature-heading">Drag-and-Drop Components</h3>
          <p className="feature-description">
            Unleash your creativity with our intuitive drag-and-drop
            functionality! Effortlessly drag your chosen
            components onto your card, repositioning them with
            ease. 
          </p>
        </div>

        {/* Feature 5 */}
        <div className="feature-item">
          <FaDownload size={40} className="feature-icon" />
          <h3 className="feature-heading">High-Quality Download</h3>
          <p className="feature-description">
            Once you're done creating, download a high-resolution version of
            your card ready to share or print. Perfect for creating digital or
            physical Diwali greetings.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="feature-item">
          <FaWhatsapp size={40} className="feature-icon" />
          <h3 className="feature-heading">Instant Sharing</h3>
          <p className="feature-description">
            Share your card instantly on social media! With direct share options
            to WhatsApp, Facebook, and Twitter, send your festive greetings to
            friends and family with just one click.
          </p>
        </div>

        {/* Feature 7 */}
        <div className="feature-item">
          <FaPalette size={40} className="feature-icon" />
          <h3 className="feature-heading">Vibrant Color Picker</h3>
          <p className="feature-description">
            Use our easy color picker tool to select custom colors for
            backgrounds, text, and stickers. Create a card that reflects the
            spirit of Diwali with vibrant and celebratory hues.
          </p>
        </div>

        {/* Feature 8 */}
        {/* <div className="feature-item">
          <FaShapes size={40} className="feature-icon" />
          <h3 className="feature-heading">Dynamic Glow Effects</h3>
          <p className="feature-description">
            Add a festive glow to your text, stickers, or borders for an extra magical touch. Choose from various glow intensities to make your card truly shine.
          </p>
        </div> */}

        {/* Feature 9 */}
        {/* <div className="feature-item">
          <FaFont size={40} className="feature-icon" />
          <h3 className="feature-heading">Resizable Text and Stickers</h3>
          <p className="feature-description">
            Adjust the size of text and stickers effortlessly. Our resizable text and elements allow you to create a balanced and visually appealing card layout.
          </p>
        </div> */}

        {/* Feature 10 */}
        <div className="feature-item">
          <FaMobile size={40} className="feature-icon" />
          <h3 className="feature-heading">Responsive Mobile Design</h3>
          <p className="feature-description">
            Designed to work seamlessly on any device, you can create and share
            your Diwali cards right from your smartphone. Enjoy a smooth
            experience wherever you are.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
