import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressBar } from "./components";

const meta = { title: "Components/Progress Bar", component: ProgressBar, tags: ["autodocs"], args: { value: 64, label: "Explorer → Achiever" }, argTypes: { value: { control: { type: "range", min: 0, max: 100, step: 1 } } } } satisfies Meta<typeof ProgressBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
