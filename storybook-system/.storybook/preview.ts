import type { Preview } from "@storybook/react-vite";
import "../src/styles.css";

const preview: Preview = {
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "product",
      values: [
        { name: "product", value: "#f8fafc" },
        { name: "white", value: "#ffffff" },
        { name: "navy", value: "#1e3a5f" }
      ]
    },
    controls: { expanded: true },
  },
};

export default preview;
