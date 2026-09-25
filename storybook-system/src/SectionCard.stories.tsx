import type { Meta, StoryObj } from "@storybook/react-vite";
import { CalendarDays } from "lucide-react";
import { Button, SectionCard } from "./components";

const meta = { title: "Components/Section Card", component: SectionCard, tags: ["autodocs"] } satisfies Meta<typeof SectionCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { title: "Upcoming events", icon: <CalendarDays size={18} />, action: <Button variant="ghost">View all</Button>, children: <p style={{ color: "#6B7280", margin: 0 }}>A shared content container used across all three role interfaces.</p> } };
