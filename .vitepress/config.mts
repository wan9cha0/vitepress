import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  lang: "zh-CN",
  head: [
    ["link", { rel: "icon", type: "image/jpg", href: "/avatar.jpg" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: "Home", link: "/" },
      // { text: "Examples", link: "/view/markdown-examples" },
      { text: "排班表", link: "/view/schedule" },
    ],

    sidebar: [
      {
        text: "工具项",
        items: [
          { text: "排班表", link: "/view/schedule" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
