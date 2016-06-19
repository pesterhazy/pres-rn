- todo: add example code for views (in JSX, in hiccup)


- who am I?
    - Head of Engineering for Fy
    - E-commerce marketplace for accessories
    - launched the React Native based iOS app in February
  
- what is React Native?
    - a framework for build native applications
    - built by Facebook as an add-on to React

- demo: live reloading, ideally on the device

- start from knowledge of React: what does React Native do differently?
    - alternate renderer for React
    - as of React 15, rendering resides in a separate project from the diffing logic
    - react-dom vs react
    - react-native is the main alternate renderer
    - single entry point for web apps is ReactDOM.render()
    - for RN it's AppRegistry.registerComponent()

```
      self->rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                            moduleName:@"ExampleApp"
                                            initialProperties:@{@"prop1": @"val1"}
                                            launchOptions:launchOptions];
```

```
AppRegistry.registerComponent('ExampleApp', () => RootComponent);
```

- value proposition:
    - magic of React: make it seem (to the developer) that the app is re-rendered from scratch without performance penalty
    - parallels to web development: build apps using techniques familiar from building singe page applications
    - you can use JavaScript or any compile-to-javascript languages (TypeScript, ClojureScript, Elm)
    - familiar runtime environments: runs on top of JavasScriptCore (on iOS) or v8 (on Android)
    - familiar event-based system
    - familiar React ecosystem (redux, reagent)
    - potential for code reuse between web app and native app
    - same codebase for Android and iOS

- how does it work?
    - regular iOS application
    - two threads: main thread (UI thread) and app thread (javascript)
    - main thread draws the UI and is opaque
    - the two threads communicate entirely through a bridge
    - just as in the brwoser, everything is event-based and asynchronous

- building UIs
    - very similar to building a React web applications
    - div = View, span with text = Text
    - styles supporting a subset of CSS (margins, colors)
    - inline styles everywhere
    - uses the FlexBox UI model

- Native Modules
    - react comes with a fair amount of components you'd expect
    - TextInput, Image, TouchableHighlight, ListView, Animation
    - if you need anything else, you can build your own Native Module
    - Native Modules are written in the host language and expose an API to javascript
    - this is important for interacting with the system and using third-party frameworks (payment processor, Facebook login)

- async programming
    - as a native developer, you need to get used to the "async everywhere" approach
    - it's definitely clunky
    - Native Module cannot return values, they can only trigger a callback

- state of the ecosystem
    - one of the fastest growing projects I've witnessed
    - timeline: public since March last year
    - started with iOS only, Android support was introduced in September
    - biweekly release (already at 27), with many new features and bug fixes
    - burgeoning ecosystem of npm modules that fill in the gaps

- what works well
    - sound concepts, solid engineering
    - decent to good performance

- what doesn't
    - tooling
    - instead of using established tools like browserify or webpack, the team built its own javascript bundler: "react-native packager"
    - documentation for tooling is non-existent
    - if you do anything even slightly off the common path suggested by the Facebook devs, you need to look at the source
    - the team can't handle the enormous amount of bug reports
    - some components are built only with Facebook's needs in mind: ListView doesn't free resources

- we're hiring Android freelancer
