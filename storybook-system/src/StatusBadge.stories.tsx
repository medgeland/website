import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusBadge } from "./components";

const meta = { title: "Components/Status Badge", component: StatusBadge, tags: ["autodocs"], args: { children: "Approved", tone: "success" }, argTypes: { tone: { control: "select", options: ["primary", "neutral", "success", "warning", "danger"] } } } satisfies Meta<typeof StatusBadge>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Success: Story = {};
export const Pending: Story = { args: { children: "Pending", tone: "warning" } };
export const Rejected: Story = { args: { children: "Rejected", tone: "danger" } };
