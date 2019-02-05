interface IMenuItem {
  to: string;
  name: string;
  external?: boolean;
}

export const MENU_ITEMS: IMenuItem[] = [
  { to: "/music", name: "Music" },
  { to: "/connect", name: "Connect" },
  {
    to: "https://www.songkick.com/artists/8158333-lost-cousins/calendar",
    name: "Shows↗︎",
    external: true
  },
  {
    to: "https://www.merchmrkt.com/merchmrkt/vendor/lostcousins",
    name: "Merch↘︎",
    external: true
  },
  {
    to: "https://www.instagram.com/lostcousinsband",
    name: "Photos↗︎",
    external: true
  },
  {
    to: "https://www.youtube.com/lostcousinsband",
    name: "Videos↘︎",
    external: true
  }
];
