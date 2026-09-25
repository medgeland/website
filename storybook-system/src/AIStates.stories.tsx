import type { Meta, StoryObj } from "@storybook/react-vite";
import { AIResultPanel } from "./components";

const meta = {
  title: "Patterns/AI CV Tailor states",
  component: AIResultPanel,
  tags: ["autodocs"],
  args: { state: "empty" },
  argTypes: { state: { control: "select", options: ["empty", "loading", "partial", "refusal", "success"] } },
} satisfies Meta<typeof AIResultPanel>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = { args: { state: "empty" } };
export const Loading: Story = { args: { state: "loading" } };
export const PartialResult: Story = { args: { state: "partial" } };
export const ModelRefusal: Story = { args: { state: "refusal" } };
export const Success: Story = { args: { state: "success" } };
