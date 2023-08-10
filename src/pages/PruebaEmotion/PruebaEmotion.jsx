import './PruebaEmotion.css';

import ButtonStyle from '../../components/ButtonStyle/ButtonStyle';
import { useThemeApp } from '../../contexts/themeContext';
//import { themeDark, themeLight } from '../../styles/theme';

const PruebaEmotion = () => {
  const { theme, toggleTheme } = useThemeApp();

  return (
    <div className="pruebaEmotion-container">
      {/* Button to change between Dark and Light mode */}
      <ButtonStyle variant="small">
        <div onClick={toggleTheme}>{theme}</div>
      </ButtonStyle>
      <ButtonStyle variant="small">
        <div onClick={() => console.log('Hi!')}>Hi small!</div>
      </ButtonStyle>
      <ButtonStyle variant="header">
        <div onClick={() => console.log('Hi Header!')}>Hi header!</div>
      </ButtonStyle>
      <ButtonStyle variant="medium">
        <div onClick={() => console.log('Hola!')}> Hola medium!</div>
      </ButtonStyle>
      <ButtonStyle variant="large">
        <div onClick={() => console.log('Hello!')}>Hello large!</div>
      </ButtonStyle>
      <figure>{/* <H1C text="esto es un h1 custom" width="largo" /> */}</figure>
      {/* <Button
                    text="Register"
                    action={() => console.log("Hola")}
                />
                <Button
                    text="Login"
                    action={() => console.log("Login")}
                    variant="contained"
                />
                <Button
                    text="Text"
                    action={() => console.log("Text")}
                    variant="text"
                    color="crimson"
                /> */}
      {/* </ThemeProvider> */}
    </div>
  );
};

export default PruebaEmotion;
