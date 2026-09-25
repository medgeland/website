import type { Meta, StoryObj } from "@storybook/react-vite";
import { AlertBanner } from "./components";

const meta = { title: "Components/Alert Banner", component: AlertBanner, tags: ["autodocs"], args: { title: "Review required", tone: "warning", children: "Check the highlighted evidence before continuing." }, argTypes: { tone: { control: "select", options: ["warning", "danger", "success"] } } } satisfies Meta<typeof AlertBanner>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Warning: Story = {};
export const Error: Story = { args: { tone: "danger", title: "Action failed", children: "Nothing was changed. Try again or contact the Career Center." } };
export const Success: Story = { args: { tone: "success", title: "Approved", children: "The weekly report is now visible to the student." } };
