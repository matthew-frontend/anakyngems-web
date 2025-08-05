export default function manifest() {
  return {
    name: "ANAKYNGEMS อนาคินเจม - เครื่องประดับเพชรแล็บโกรน",
    short_name: "ANAKYNGEMS อนาคินเจม",
    description: "ANAKYNGEMS อนาคินเจม เครื่องประดับเพชรแล็บโกรน คุณภาพสูง",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    lang: "th",
    categories: ["shopping", "jewelry", "diamonds", "luxury"],
    keywords: [
      "อนาคินเจม",
      "ANAKYNGEMS",
      "เครื่องประดับ",
      "เพชร",
      "แหวน",
      "แหวนเพชร",
      "ต่างหู",
      "ต่างหูเพชร",
      "รับออกแบบเพชร",
    ],
  };
}
