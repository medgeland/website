import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./components";

const meta = { title: "Components/Button", component: Button, tags: ["autodocs"], args: { children: "Apply", variant: "primary" } } satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
export const Secondary: Story = { args: { variant: "secondary", children: "Save draft" } };
export const Ghost: Story = { args: { variant: "ghost", children: "Learn more" } };
export const Disabled: Story = { args: { disabled: true, children: "Apply" } };
