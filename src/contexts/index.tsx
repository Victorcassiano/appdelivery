import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { useColorScheme } from "../hooks/useColorScheme";
import { initializeDatabase } from "@/database/initializeDatabase";
import { SQLiteProvider } from "expo-sqlite";
import { createContext, ReactNode } from "react";
import { StoresProvider } from "@/hooks/useStores";
import { FoodsProvider } from "@/hooks/useFoods";
import { CartProvider } from "@/hooks/useCart";

const AllContext = createContext({});

export const AllProvider = ({ children }: { children: ReactNode }) => {
  const colorScheme = useColorScheme();

  return (
    <AllContext.Provider value={{}}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <SQLiteProvider databaseName="test.db" onInit={initializeDatabase}>
          <CartProvider>
            <StoresProvider>
              <FoodsProvider>{children}</FoodsProvider>
            </StoresProvider>
          </CartProvider>
        </SQLiteProvider>
      </ThemeProvider>
    </AllContext.Provider>
  );
};
