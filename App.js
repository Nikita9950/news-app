import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { useState } from "react";
import { Main } from './components/Main';
import MainStack from './navigate'

const fonts = () => Font.loadAsync({
  'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'mt-light': require('./assets/fonts/Montserrat-Light.ttf')
});

export default function App() {
  const [font, setFont] = useState(false);

  if(font) {
    return (
        <MainStack />
    );
  } else {
    return (
       <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={() => null}/>
    );
  }
};

