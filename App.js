import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView, ScrollView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';
import { AppRegistry, Image } from 'react-native';
import LotsOfStyles from './LotsOfStyles';
import HeightAndWidth from './HeightAndWidth';
import FlexDimensionsBasics from './FlexDimensionsBasics';
import FlexDirectionBasics from './FlexDirectionBasics';
import JustifyContentBasics from './JustifyContentBasics';
import AlignItemsBasics from './AlignItemsBasics';
import PizzaTranslator from './PizzaTranslator';
import ButtonBasics from './ButtonBasics';
import Touchables from './Touchables';
import FlatListBasics from './FlatListBasics';
import SectionListBasics from './SectionListBasics';
import FetchExample from './FetchExample';
import IScrolledDownAndWhatHappenedNextShockedMe from './IScrolledDownAndWhatHappenedNextShockedMe';
//Todo: Refactor into a seperate file (Basics.js), import and complete the exercise

class Basics extends React.Component {
  static navigationOptions = { title: "Learn the Basics" }
  render() {
    return (<View><Text>Hello world!</Text></View>)
  }
}

class Greeting extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class BlinkApp extends React.Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}


//Todo: Refactor into a seperate file (Props.js), import and complete the exercise
class Props extends React.Component {
  static navigationOptions = { title: "Learn about Props" }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
     
        <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        <Image source={pic} style={{width: 100, height: 100}}/>
      </View>
    )
  }
}
//Todo: Create a new file (State.js), import it, add a "Touchable", and complete the exercise
//Todo: Create a new file (Style.js), import it, add a "Touchable", and complete the exercise
//Todo: Create a new file (HeightWidth.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (HeightWidth.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (FlexBox.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (TextInput.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (Touches.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (ScrollView.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (ListViews.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (NetWorking.js), import it,add a "Touchable", and complete the exercise

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

//Todo: Refactor into a seperate file (WhatToDo.js), import and complete the exercise
class WhatToDo extends React.Component {
  static navigationOptions = { title: "What I have to do" }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ marginBottom: 3 }}>Complete all steps in Facebooks "The Basics" tutorial (see below)</Text>
        <Text style={{ marginBottom: 3 }}>For each of the 11 steps, add a corresponding Component in this project + the necessecary changes to navigate into it.
        (inspired of how you navigated into this)
      </Text>
        <WebView
          source={{ uri: "https://facebook.github.io/react-native/docs/tutorial.html" }}
          style={{ marginTop: 20, flex: 1 }}
        />
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Day1 Tutorial' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView >
        <Text style={{ textAlign: "center", fontSize: 20 }}>See all Demos implemented by Mathias Jensenius</Text>
        <Touchable onPress={() => navigate('web')} title="What I have to do" />
        <Touchable onPress={() => navigate('basics')} title="Basics" />
        <Touchable onPress={() => navigate('blinkapp')} title="State" />
        <Touchable onPress={() => navigate('props')} title="Props" />
        <Touchable onPress={() => navigate('LotsOfStyles')} title="Lots of Styles" />
        <Touchable onPress={() => navigate('HeightAndWidth')} title="Height and Width" />
        <Touchable onPress={() => navigate('FlexDimensionsBasics')} title="Flex Dimensions" />
        <Touchable onPress={() => navigate('FlexDirectionBasics')} title="Flex Direction" />
        <Touchable onPress={() => navigate('JustifyContentBasics')} title="Justify Content Basics" />
        <Touchable onPress={() => navigate('AlignItemsBasics')} title="Align Items Basics" />
        <Touchable onPress={() => navigate('PizzaTranslator')} title="Handling Text Input" />
        <Touchable onPress={() => navigate('ButtonBasics')} title="Handling Button Basics" />
        <Touchable onPress={() => navigate('Touchables')} title="Handling Touchables" />
        <Touchable onPress={() => navigate('IScrolledDownAndWhatHappenedNextShockedMe')} title="Scrolling is awesome" />
        <Touchable onPress={() => navigate('FlatListBasics')} title="Flat List Basics" />
        <Touchable onPress={() => navigate('SectionListBasics')} title="Section List Basics" />
        <Touchable onPress={() => navigate('FetchExample')} title="Example with fetch" />
      </ScrollView>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  basics: { screen: Basics },
  props: { screen: Props },
  web: { screen: WhatToDo },
  blinkapp: {screen: BlinkApp},
  LotsOfStyles: {screen: LotsOfStyles},
  HeightAndWidth: {screen: HeightAndWidth},
  FlexDimensionsBasics: {screen: FlexDimensionsBasics},
  FlexDirectionBasics: {screen: FlexDirectionBasics},
  JustifyContentBasics: {screen: JustifyContentBasics},
 AlignItemsBasics: {screen: AlignItemsBasics},
 PizzaTranslator: {screen: PizzaTranslator},
 ButtonBasics: {screen: ButtonBasics},
 Touchables: {screen: Touchables},
 IScrolledDownAndWhatHappenedNextShockedMe: {screen: IScrolledDownAndWhatHappenedNextShockedMe},
 FlatListBasics : {screen: FlatListBasics},
 SectionListBasics : {screen: SectionListBasics},
 FetchExample: {screen: FetchExample},

});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})