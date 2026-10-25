export interface NavItem {
  type: "item";
  label: string;
  path: string;
}

export interface NavGroup {
  type: "group";
  label: string;
  items: NavItem[];
}

export type NavbarItem = NavItem | NavGroup;
