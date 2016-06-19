// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  phone1: require("../assets/Phone Screenshot 1.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#2DF3AA"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
            <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
            React Native
            </Heading>
            <Heading size={1} fit caps>
            Used in anger
            </Heading>
            <Heading size={1} fit textColor="black">
        Paulus Esterhazy (@pesterhazy)
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>
            React Berlin Jun 20, 2016
</Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Image src={images.phone1.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={1} fit lineHeight={1} textColor="black">
            React Native, used in anger
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Image src={images.phone1.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
            React Naitve, used in anger
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
