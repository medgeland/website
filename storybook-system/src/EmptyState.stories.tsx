import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, EmptyState } from "./components";

const meta = { title: "Components/Empty State", component: EmptyState, tags: ["autodocs"], args: { title: "No applications yet", text: "Applications will appear here after a student applies." } } satisfies Meta<typeof EmptyState>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const WithAction: Story = { args: { title: "No CV uploaded", text: "Upload a PDF or DOCX to begin the review.", action: <Button>Upload CV</Button> } };
