interface IMenuItem {
  to: string;
  name: string;
  external?: boolean;
}

export const MENU_ITEMS: IMenuItem[] = [
  { to: "/music", name: "Music" },
  { to: "/shows", name: "Shows" },
  { to: "/photos", name: "Photos" },
  { to: "/videos", name: "Videos" },
  { to: "/connect", name: "Connect" },
  {
    to: "https://www.merchmrkt.com/merchmrkt/vendor/lostcousins",
    name: "Merch",
    external: true
  }
];
