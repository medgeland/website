import type { Meta, StoryObj } from "@storybook/react-vite";
import { Briefcase } from "lucide-react";
import { NavigationItem } from "./components";

const meta = { title: "Components/Navigation Item", component: NavigationItem, tags: ["autodocs"], args: { label: "Vacancies", active: false, icon: <Briefcase /> } } satisfies Meta<typeof NavigationItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Active: Story = { args: { active: true } };
