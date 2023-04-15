import React, { ReactNode, CSSProperties, useState, useEffect } from "react";
import { eventEmitter } from "../events";

type ContextType = {
  theme: string;
  themeStyles: { [key: string]: CSSProperties };
};

type contextProviderProps = {
  children: (context: ContextType) => ReactNode;
};

const themeStyles: { [key: string]: CSSProperties } = {
  dark: { background: "#242424", color: "#dbdbdb" },
  light: { background: "#dbdbdb", color: "#242424" },
};

const ContextProvider: React.FC<contextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    eventEmitter.on("toggleTheme", toggleTheme);
    return () => {
      eventEmitter.off("toggleTheme", toggleTheme);
    };
  }, []);

  return <>{children({ theme, themeStyles })}</>;
};

const ThemeContext = <P extends object>(
  Component: React.FC<P & ContextType>
): React.FC<P> => {
  return (props: P) => (
    <ContextProvider>
      {(contextProps: ContextType) => (
        <Component {...props} {...contextProps} />
      )}
    </ContextProvider>
  );
};

export { ThemeContext };
export default null;
