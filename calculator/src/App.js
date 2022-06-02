import { useState } from "react";
import { ThemeProvider } from "styled-components";
import ThemeToggler from "./components/themes";

const LightTheme = {
  mainBackground: "hsl(0, 0%, 90%)",
  keypadBackground: "hsl(0, 5%, 81%)",
  screenBackground: "hsl(0, 0%, 93%)",
  keyBackground1: "hsl(185, 42%, 37%)",
  keyShadow1: "hsl(185, 58%, 25%)",
  keyBackground2 : "hsl(25, 98%, 40%)",
  keyShadow2 : "hsl(25, 99%, 27%)",
  keyBackground3 : "hsl(45, 7%, 89%)",
  keyShadow3 : "hsl(35, 11%, 61%)",
  text: "hsl(60, 10%, 19%)"
};

const DarkTheme = {
  mainBackground: "hsl(222, 26%, 31%)",
  keypadBackground: "hsl(223, 31%, 20%)",
  screenBackground: "hsl(224, 36%, 15%)",
  keyBackground1: "hsl(225, 21%, 49%)",
  keyShadow1: "hsl(224, 28%, 35%)",
  keyBackground2 : "hsl(6, 63%, 50%)",
  keyShadow2 : "hsl(6, 70%, 34%)",
  keyBackground3 : "hsl(30, 25%, 89%)",
  keyShadow3 : "hsl(28, 16%, 65%)",
  text: "hsl(221, 14%, 31%)"
};

const CustomTheme = {
  mainBackground: "hsl(268, 75%, 9%)",
  keypadBackground: "hsl(268, 71%, 12%)",
  screenBackground: "hsl(268, 71%, 12%)",
  keyBackground1: "hsl(281, 89%, 26%)",
  keyShadow1: "hsl(285, 91%, 52%)",
  keyBackground2 : "hsl(176, 100%, 44%)",
  keyShadow2 : "hsl(177, 92%, 70%)",
  keyBackground3 : "hsl(268, 47%, 21%)",
  keyShadow3 : "hsl(290, 70%, 36%)",
  text1: "hsl(52, 100%, 62%)",
  text2: "hsl(198, 20%, 13%)"
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
  custom: CustomTheme
};

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeProvider theme={themes[theme]}>
      <ThemeToggler theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
