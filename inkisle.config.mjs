export default {
  title: "InkIsle Waline Canary",
  description: {
    zh: "使用 npm 正式版本和 Waline 构建的 InkIsle 外部验收站。",
    en: "An external InkIsle acceptance site using the published npm package and Waline."
  },
  site: "https://ygm-studio.github.io",
  base: "/inkisle-waline-canary",
  brand: {
    mark: "Waline",
    subtitle: "Waline provider acceptance",
    favicon: "/favicon.svg"
  },
  author: {
    name: "YGM Studio",
    url: "https://github.com/YGM-Studio"
  },
  interactions: {
    provider: "waline",
    localeScope: "shared",
    waline: {
      serverURL: "https://inkisle-waline-lab.vercel.app",
      reaction: true
    }
  },
  theme: {
    name: "personal",
    defaultMode: "system",
    allowUserToggle: true,
    storageKey: "inkisle-waline-canary-theme"
  }
};
