# 个人动效组件收藏库

> 我的私人组件收藏，方便日后做项目时直接调用，不必重新找轮子。
> 组件来源：[beUI](https://beui.dev)（开源动效组件库，MIT 协议，见 `LICENSE`），
> 远程仓库：<https://github.com/MEO-wj/UIUX_Component_Library.git>

## 技术栈

组件基于 **Motion（framer-motion 继承者）+ Tailwind CSS 4 + TypeScript** 构建，
shadcn 复制即用模式：不装 npm 包，把组件源码复制进项目即可用、可改。

## 目录结构

```
UIUX_Component_Library/
├── motion/     # ⭐ 核心动效组件（113 个 .tsx，含 button/table/swap 等组合式子目录）
├── agents/     # AI 会话类组件（聊天气泡/流式响应/工具卡片/语音等）
├── charts/     # 图表组件（柱状/折线/烛台/桑基/热力日历等）
├── lib/        # 组件依赖的内部工具（cn/ease/touch/hooks 等）
├── playground/ # 原仓库官网源码（Next.js 站点，仅作参考，不含于个人使用范围）
├── README.md   # 本说明
├── README-beui-upstream.md  # 上游原仓库英文说明
└── LICENSE     # MIT 协议
```

## 组件速查索引

### motion/ — 基础组件

| 组件 | 文件 | 说明 / 适用场景 |
| --- | --- | --- |
| 按钮 | `button/` | 组合式按钮（base/stateful/magnetic 磁吸/metallic 金属） |
| 输入框 | `input.tsx` | 错误抖动 / 成功打勾，适合表单校验反馈 |
| 开关 | `switch.tsx` | 弹性反馈开关 |
| 复选/单选 | `checkbox.tsx` / `radio.tsx` | 勾选动效 |
| 卡片 | `card.tsx` / `tilt-card.tsx` | 基础卡片 / 3D 倾斜卡片 |
| 抽屉 | `drawer.tsx` / `bottom-sheet.tsx` | 侧边抽屉 / 底部抽屉（移动端预约面板首选） |
| 弹窗 | `morphing-modal.tsx` / `center-morph-modal.tsx` | 形变弹窗 |
| 弹出层 | `popover.tsx` / `tooltip.tsx` / `context-menu.tsx` | 气泡 / 提示 / 右键菜单 |
| 选项卡 | `tabs.tsx` / `morphing-tabs.tsx` | 基础 / 滑动指示器形变 |
| 手风琴 | `collapsible.tsx` / `bouncy-accordion.tsx` | 展开/收起 |
| 下拉选择 | `select.tsx` / `combobox/` / `multi-select/` | 选择器 / 搜索组合框 / 多选 |
| 滑块 | `range-slider.tsx` 系列气泡/流体内联/波浪/标尺变体 | 各种花式滑块 |
| 日期选择 | `date-range-picker/` | 组合式日期范围选择器 |
| 通知提示 | `alert.tsx` / `notification-stack.tsx` / `animated-toast-stack.tsx` | 提示 / 通知堆叠 / Toast 堆栈 |
| 骨架屏 | `table/skeleton-rows.tsx` 等 | 加载占位 |
| 徽章 | `animated-badge.tsx` | 动效徽章 |

### motion/ — 动效/展示类

| 组件 | 文件 | 说明 / 适用场景 |
| --- | --- | --- |
| 数字滚动 | `animated-number.tsx` / `number-ticker.tsx` / `animated-toast-stack.tsx` | 数字增长动效 |
| 文字动效 | `text-reveal.tsx` / `text-cascade.tsx` / `text-scramble.tsx` / `text-shimmer.tsx` / `chromatic-text-reveal.tsx` | 揭示/级联/乱码/流光 |
| 滚动动效 | `scroll-reveal.tsx` / `scroll-progress.tsx` / `parallax.tsx` / `smooth-scroll.tsx`（依赖 lenis） | 滚动入场/进度条/视差 |
| 码头栏 | `dock.tsx` | macOS 风格 Dock |
| 命令面板 | `command-palette.tsx` | Cmd+K 面板 |
| 灵动岛 | `dynamic-island.tsx` | iPhone 灵动岛仿制 |
| OTP 输入 | `otp-input.tsx` | 验证码输入 |
| 瀑布流 | `infinite-masonry.tsx` | 无限瀑布流（依赖 @tanstack/react-virtual） |
| 可排序列表 | `sortable-list.tsx` / `sortable-stack.tsx` / `swipeable-list.tsx` | 拖拽排序 / 滑动操作 |
| 下拉刷新 | `pull-to-refresh.tsx` | 移动端下拉刷新 |
| 主题切换 | `theme-toggle.tsx` | 明暗切换动效 |
| 取色器 | `color-picker.tsx` / `color-selector.tsx` | 组合式颜色选择 |
| 加载 | `loader.tsx` / `liquid.tsx` | 加载动效 / 液态 |
| 换币互换 | `swap.tsx` / `action-swap.tsx` 系列 / `digit-swap.tsx` | 数值/操作互换动效 |
| 选号转盘 | `wheel-picker.tsx` / `arc-picker.tsx` / `knockout-wheel.tsx` | 滚轮/弧形选择器 |
| 其他 | `marquee.tsx` / `timeline.tsx` / `breadcrumb.tsx` / `file-tree.tsx` / `file-upload.tsx` / `attachment-upload.tsx` / `feedback-widget.tsx` / `signup-form.tsx` / `shader-background.tsx` / `prediction-market-card.tsx` / `wallet-card/` 等 | 跑马灯/时间线/面包屑/文件树/上传/反馈/注册表单/着色器背景/预测市场卡/钱包卡 |

### agents/ — AI 会话类

| 组件 | 文件 | 说明 |
| --- | --- | --- |
| 消息 | `message.tsx` / `message-bubble.tsx` / `message-scroller.tsx` | 消息体/气泡/滚动容器 |
| 流式响应 | `streaming-response.tsx` | 打字机流式输出 |
| 输入 | `prompt-input.tsx` | AI 提示词输入框 |
| 工具卡片 | `tool-approval.tsx` / `tool-result.tsx` / `approval-card/` | 工具调用审批/结果展示 |
| 代码 | `code-block.tsx` / `file-diff.tsx` / `agent-code.tsx` | 代码块/文件 diff |
| 侧边栏 | `ai-sidebar.tsx` / `agent-disclosure.tsx` | AI 侧栏/会话折叠 |
| 语音 | `voice-orb/` | 语音助手球体 |
| 其他 | `chat-app.tsx` / `citations.tsx` / `image-generation.tsx` / `todo-list.tsx` / `loading-states/` / `agent-activity/` | 完整聊天应用/引用/图片生成/待办/加载态/活动流 |

### charts/ — 图表类

`bar-chart` `line-chart` `donut-chart` `candlestick-chart` `sankey-chart` `treemap`
`funnel-chart` `bump-chart` `heat-calendar` `liquidity-heatmap` `order-book`
`price-target-fan` `returns-calendar` `sparkline` `status-bar` `xy` 等。

## 引入依赖

组件**不能直接复制就跑**，需先给项目补依赖（`motion/` 内统计）：

| 依赖 | 用途 | 出现次数 |
| --- | --- | --- |
| `motion` | 全部动效核心 | 124 处 `motion/react` |
| `lucide-react` | 图标 | 58 处 |
| `tailwind-merge` | 配合 `cn()` 工具 | lib/utils 依赖 |
| `clsx` | 同上（多数项目已有） | — |
| `@tanstack/react-virtual` | 仅长列表组件（如 infinite-masonry） | 2 处 |
| `lenis` | 仅平滑滚动组件（smooth-scroll） | 2 处 |
| `@floating-ui/dom` | 仅个别定位组件 | 1 处 |

**最小引入集**：`pnpm add motion lucide-react tailwind-merge`（其余按需再装）

## 引入单个组件的步骤

1. 装依赖：`pnpm add motion lucide-react tailwind-merge`
2. 把对应组件（如 `motion/bottom-sheet.tsx`）复制到项目 `src/components/motion/`
3. 把组件头部 `@/lib/...` 引用的 `lib/*` 工具一并复制进项目 `src/lib/`
4. 按项目 Tailwind 4 令牌核对类名/颜色变量，不匹配的改成项目令牌
5. 真机过一遍 `prefers-reduced-motion` 降级

> 组件内 `@/lib/...` 是原仓库内部路径约定；`playground/` 是原仓库官网源码，
> 可在 `playground/components/motion/` 下参考各组件的实际用法示例。

## 个人使用备注

- [ ] 待补充：常用项目路径（Xiuxiu_Store 等）
- [ ] 待补充：做过适配/魔改的组件记录
- [ ] 待补充：已验证在哪些 Tailwind 版本下可用

## 来源与协议

- 上游：[beui.dev](https://beui.dev) / GitHub `starc007/ui-components`（MIT）
- 个人仓库：<https://github.com/MEO-wj/UIUX_Component_Library.git>
- 复用组件时请遵循 MIT 协议，保留版权与许可声明
