import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = { title: "Foundations/Overview", tags: ["autodocs"] } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const colors = [
  ["Navy", "#1E3A5F"], ["Primary", "#228BE6"], ["Hover", "#1971C2"], ["Light", "#74C0FC"],
  ["Blue 50", "#E7F5FF"], ["Surface", "#FFFFFF"], ["Gray 100", "#F3F4F6"], ["Ink", "#111827"],
];

export const Tokens: Story = {
  render: () => <main className="docs"><div className="eyebrow">CareerHub · 0.1</div><h1>System foundations</h1><p className="docs-lead">Не завершённая дизайн-система, а честно выделенные из продукта зачатки системы: повторяемые токены, состояния и компоненты для трёх ролевых интерфейсов.</p><section className="docs-section"><h2>Цвет</h2><div className="swatches">{colors.map(([name,value])=><div className="swatch" key={name}><i style={{background:value}}/><div><b>{name}</b><span>{value}</span></div></div>)}</div></section><section className="docs-section"><h2>Типографика</h2><div className="demo"><div className="type-row"><span>32 / 700</span><b style={{fontSize:32}}>Product heading</b></div><div className="type-row"><span>24 / 700</span><b style={{fontSize:24}}>Section heading</b></div><div className="type-row"><span>18 / 600</span><b style={{fontSize:18}}>Card title</b></div><div className="type-row"><span>14 / 400</span><span style={{fontSize:14,color:"#111827"}}>Основной текст продукта — Roboto</span></div><div className="type-row"><span>12 / 500</span><span style={{fontSize:12,color:"#6B7280"}}>Metadata and labels</span></div></div></section><section className="docs-section"><h2>Spacing & radius</h2><div className="demo"><p>Базовый шаг: <b>4 px</b>. Шкала: 4 · 8 · 12 · 16 · 20 · 24 · 32 · 48.</p><p>Радиусы: 8 · 12 · 16 · full. Основная карточка использует 16 px.</p></div></section></main>
};
