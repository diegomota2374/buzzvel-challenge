// src/hooks/__tests__/useNavBar.test.tsx

import { renderHook, waitFor } from "@testing-library/react";
import { useNavBar } from "./useNavBar";

describe("useNavBar", () => {
  test("should initialize with default states", () => {
    const { result } = renderHook(() => useNavBar());
    const { isDarkMode, isMenuOpen } = result.current;

    expect(isDarkMode).toBe(false);
    expect(isMenuOpen).toBe(false);
  });

  test("should toggle dark mode and add/remove dark class on the document", async () => {
    const { result } = renderHook(() => useNavBar());

    // Test adding dark class
    result.current.setIsDarkMode(true);

    await waitFor(() => {
      expect(document.documentElement.classList.contains("dark")).toBe(true);
    });

    // Test removing dark class
    result.current.setIsDarkMode(false);

    await waitFor(() => {
      expect(document.documentElement.classList.contains("dark")).toBe(false);
    });
  });

  test("should toggle menu open state", async () => {
    const { result } = renderHook(() => useNavBar());

    // Test opening menu
    result.current.setIsMenuOpen(true);

    await waitFor(() => {
      expect(result.current.isMenuOpen).toBe(true);
    });

    // Test closing menu
    result.current.setIsMenuOpen(false);

    await waitFor(() => {
      expect(result.current.isMenuOpen).toBe(false);
    });
  });
});
