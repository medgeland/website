import type { Meta, StoryObj } from "@storybook/react-vite";
import { LoadingState } from "./components";

const meta = { title: "Components/Loading State", component: LoadingState, tags: ["autodocs"], args: { label: "Loading student data…" } } satisfies Meta<typeof LoadingState>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
