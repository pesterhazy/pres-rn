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
  , fy: require("../assets/fy.png")
  , react: require("../assets/React.png")
  , hand: require("../assets/hand.jpg")
  , demo: require("../assets/demo.jpg")
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
          <Slide transition={["fade"]} bgImage={images.hand.replace("/", "")}>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.hand.replace("/", "")} bgDarken={0.75}>
            <Image src={images.fy.replace("/", "")} margin="0px auto 40px" height="100px"/>
            <Text textColor="white" textSize="1.5em" margin="20px 0px 0px" bold>
            Fy
            </Text>
            <List textColor="white">
              <Appear><ListItem>Early adapters of React Native</ListItem></Appear>
              <Appear><ListItem>iOS app in the App Store since February</ListItem></Appear>
              <Appear><ListItem>Android version coming soon</ListItem></Appear>
              <Appear><ListItem>Tech stack: Clojure (backend) and ClojureScript (frontend)</ListItem></Appear>
            </List>
          </Slide>

            <Slide transition={["fade"]} bgImage={images.demo.replace("/", "")}>
            <Text textColor="black" textSize="3em" margin="20px 0px 0px" bold>
            Demo
        </Text>
            </Slide>

          <Slide transition={["fade"]} bgColor="#222222">
            <Image src={images.react.replace("/", "")} margin="0px auto 40px" height="100px"/>
            <Heading size={1} fit lineHeight={1} textColor="white">
            What is React Native?
            </Heading>
          </Slide>

            <Slide transition={["fade"]} bgColor="#222222">
            <Image src={images.react.replace("/", "")} margin="0px auto 20px" height="100px"/>
            <List textColor="white">
            <ListItem>single entry point to JavaScript API: registerComponent</ListItem>
            <ListItem>React + react-dom vs React + react-native</ListItem>
            </List>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/example.js")}
              margin="20px auto"
            />
            </Slide>

            <Slide transition={["fade"]} bgColor="#222222">
            <Image src={images.react.replace("/", "")} margin="0px auto 20px" height="100px"/>
            <Text textColor="white" textSize="1.5em" margin="20px 0px 0px" bold>
            Value proposition 1/2
        </Text>
            <List textColor="white">
            <Appear><ListItem>The magic of react</ListItem></Appear>
            <Appear><ListItem>Browser-like development experience</ListItem></Appear>
            <Appear><ListItem>Use JavaScript or any compile-to-JavaScript language (TypeScript, ClojureScript, Elm)</ListItem></Appear>
            </List>
            </Slide>

            <Slide transition={["fade"]} bgColor="#222222">
            <Image src={images.react.replace("/", "")} margin="0px auto 20px" height="100px"/>
            <Text textColor="white" textSize="1.5em" margin="20px 0px 0px" bold>
            Value proposition 2/2
        </Text>
            <List textColor="white">
            <Appear><ListItem>Familiar runtime: runs on top of JavasScriptCore (on iOS) or v8 (on Android)</ListItem></Appear>
            <Appear><ListItem>Familiar event loop</ListItem></Appear>
            <Appear><ListItem>Familiar React ecosystem (redux, reagent)</ListItem></Appear>
            <Appear><ListItem>Shared code between Android and iOS</ListItem></Appear>
            <Appear><ListItem>Potential non-UI code reuse between web and app</ListItem></Appear>
            </List>
            </Slide>


          <Slide transition={["fade"]} bgImage={images.hand.replace("/", "")} bgDarken={0.75}>
            <Image src={images.fy.replace("/", "")} margin="0px auto 40px" height="100px"/>
            <Text textColor="white" textSize="1.5em" margin="20px 0px 0px" bold>
            Thanks for listening!
        </Text>
            <List textColor="white">
            <ListItem>https://www.iamfy.co</ListItem>
            <ListItem>@pesterhazy</ListItem>
            <ListItem>paulus@iamfy.co</ListItem>
            <ListItem>We're hiring!</ListItem>
            </List>
            </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
