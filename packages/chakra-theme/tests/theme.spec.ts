import { ChakraTheme, isChakraTheme } from '@chakra-ui/react';
import theme from '../src';

describe("Theme", () => {
  it("should be of type ChakraTheme", () => {
    // Check if default theme is of type ChakraTheme
    const defaultThemeIsAChakraTheme: ChakraTheme = theme
    expect(defaultThemeIsAChakraTheme).toBeTruthy()
  })

  it("should expect true to be truthy", () => {
    expect(true).toBeTruthy()
  })

  it("should be check that this is a ChakraTheme", () => {
    expect(isChakraTheme(theme)).toBeTruthy()
  })

  it("should be check that this is not a ChakraTheme", () => {
    expect(isChakraTheme({ colors: {} })).toBeFalsy()
  })
})