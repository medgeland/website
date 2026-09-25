import type { Meta, StoryObj } from "@storybook/react-vite";
import { AIResultPanel } from "./components";

const meta = { title: "Components/AI Result Panel", component: AIResultPanel, tags: ["autodocs"], args: { state: "success" }, argTypes: { state: { control: "select", options: ["empty", "loading", "partial", "refusal", "error", "success"] } } } satisfies Meta<typeof AIResultPanel>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
