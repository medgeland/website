import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileDropzone } from "./components";

const meta = { title: "Components/File Dropzone", component: FileDropzone, tags: ["autodocs"], args: { state: "idle" }, argTypes: { state: { control: "select", options: ["idle", "drag", "ready", "extracting"] } } } satisfies Meta<typeof FileDropzone>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Idle: Story = {};
export const Dragging: Story = { args: { state: "drag" } };
export const Ready: Story = { args: { state: "ready", fileName: "margarita_cv.pdf" } };
export const Extracting: Story = { args: { state: "extracting", fileName: "margarita_cv.pdf" } };
