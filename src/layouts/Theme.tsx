import { ThemeProvider } from "styled-components";
import { type Children } from "../types";
import { COLORS } from "../constants/colors";
import { useDarkModeStore } from "../store";

const darkTheme = {
  body: COLORS.DARK,
  title: COLORS.LIGHT,
};

const lightTheme = {
  title: COLORS.DARK,
  body: COLORS.LIGHT,
};

const Index = ({ children }: Children) => {
  // Cart Store
  const darkMode = useDarkModeStore<any>((state: any) => state.darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Index;
