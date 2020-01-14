# React Native Challenge

Before downloading the repo:
- [mMake sure you have React Native CLI configured](https://facebook.github.io/react-native/docs/getting-started).
- [Yarn installed](https://yarnpkg.com/lang/en/docs/install)

## Before Running the app

#### Cloning 
On your console, run:
Inside the repo folder install the dependencies by running:
```bash
git clone git@github.com:Kyonru/foxbox-react-native-challenge.git
```

#### Installing dependencies 
1. Inside the repo folder install the dependencies by running:
```bash
yarn
```
2. Go to the ios folder, and install the dependencies:
```bash
cd ios/
pod install
```
3. return to the original folder:
```bash
cd ..
```

## Running the app
* Make sure you have xcode installed.
* Make sure you have android studio installed.

### iOS
I strongly recommend runing the app from xcode, by opening xcode, and opening the project named: `reactNativeChallenge.xcworkspace` which is inside `ios/reactNativeChallenge.xcworkspace`, since if there is any error of any dependency that is needed, errors are more userfriendly on xcode than the terminal.

Anyway, on the project folder do:
1. `yarn ios-release`, this will open a simulator and install the release version of the app.
2. for development use: `yarn ios`

### Android
I recommend opening the project at least once in android studio, to check if any dependency is needed.

You need an android Emulator running, or an device connected with [developer options enabled](https://developer.android.com/studio/debug/dev-options).

Anyway, on the project folder do:
1. `yarn android-release`
2. for development use: `yarn android`


## Dependencies & Libraries

All the dependencies added to the project are:

Needed for navigation:
- `@react-native-community/masked-view`
- `react-native-gesture-handler`
- `react-native-reanimated`
- `react-native-safe-area-context`
- `react-native-screens`
- `react-navigation`
- `react-navigation-stack`

Basically all these library were needed to be able to use the stack navigation on `react-navigation` that it's being used on the app. Since the app was simple and small, I decided to use `react-navigation`.

`lodash.debounce`: Used to avoid multiple calls to an actions. This is only the debounce function from loadash, not the entire package.
  ex.:
    - Opening multiple screen by tapping the button multiple times
    - Calling the api every time a new letter is entered

`react-native-linear-gradient`: Used to display a gradient in the the background of the screens

`react-native-vector-icons`: Used to display icons in the app, the arrows, the cocktail, the search icon.

As it was requested in the requirements I used `redux`/`react-redux`. But I added some other libraries to better manage my store and information usage:

`redux-thunk`: To be able to make asynchronous dispatches of actions, in this way I was able to call the api and dispatch the received data.  

`reselect`: Used to get info from the store, this libary helps to avoid using a lot of dot channing to keep a cleaner code, and also these selectors, implements memoization of the data, that can help with performance in some cases.


## Things that can be done to improve performance

1. Using libraries focused on high amount of data like:
- [recyclerlistview](https://github.com/Flipkart/recyclerlistview)
- [fast-image](https://github.com/DylanVann/react-native-fast-image), enabling caching
2. Change the search to be used with redux, and the selectors to make the memoization and the caching more effective  
3. Adding Pagination / Infinity scroll
4. Waiting for the user to finish writting before making an api call (Which I'm doing in this challenge 😊)
5. Avoid extra rendering of the list items by usign `PureComponent` and not breaking its principles, avoiding conditional rendering.
