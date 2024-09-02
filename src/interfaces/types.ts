export interface ThemeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MenuItemsProps {
  handleScrollToSection: (sectionId: string) => void;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface HamburgerButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DesktopMenuProps {
  handleScrollToSection: (sectionId: string) => void;
}
