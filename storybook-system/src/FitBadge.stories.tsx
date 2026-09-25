import type { Meta, StoryObj } from "@storybook/react-vite";
import { FitBadge } from "./components";

const meta = { title: "Components/Fit Badge", component: FitBadge, tags: ["autodocs"], args: { value: 75 }, argTypes: { value: { control: { type: "range", min: 0, max: 100, step: 1 } } } } satisfies Meta<typeof FitBadge>;
export default meta;
type Story = StoryObj<typeof meta>;
export const SuggestedMatch: Story = {};
export const StrongMatch: Story = { args: { value: 91 } };
