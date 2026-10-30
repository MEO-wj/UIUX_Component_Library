<p align="center">
  <a href="https://beui.dev">
    <img src="./public/beui-mark.png" alt="beUI logo" width="88" height="88" />
  </a>
</p>

<h1 align="center">beUI - 动效组件库</h1>

<p align="center">
  面向 React 与 Next.js 的动画组件。复制源码，代码归你所有。
</p>

<p align="center">
  <a href="https://github.com/starc007/ui-components/blob/main/LICENSE"><img alt="License: MIT" src="https://img.shields.io/github/license/starc007/ui-components?color=000000&style=flat-square" /></a>
  <a href="https://github.com/starc007/ui-components/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/starc007/ui-components?color=000000&style=flat-square" /></a>
  <a href="https://github.com/starc007/ui-components/actions/workflows/ci.yml"><img alt="CI" src="https://img.shields.io/github/actions/workflow/status/starc007/ui-components/ci.yml?branch=main&color=000000&style=flat-square" /></a>
  <a href="https://ui.shadcn.com/docs/registry"><img alt="shadcn compatible" src="https://img.shields.io/badge/shadcn-compatible-000000?style=flat-square" /></a>
</p>

<p align="center">
  <a href="https://beui.dev">官网</a>
  ·
  <a href="https://beui.dev/components/motion">组件</a>
  ·
  <a href="https://beui.dev/llms.txt">llms.txt</a>
</p>

<p align="center">
  <a href="https://beui.dev"><img src="./public/readme-preview.png" alt="beUI 组件展示：亮色主题下面包屑、色板、选项卡、图表、任务进度与提示词输入框" width="960" /></a>
</p>

## 让界面带着意图动起来

beUI 为日常产品界面注入动效：按钮、导航、菜单、图表与 AI 对话。基于 React、TypeScript、Tailwind CSS 与 Motion 构建，提供实时预览和可复制的用法示例。

- **源码归你所有。** 把单个组件装进你的应用，随产品需要自由修改。
- **自由组合界面。** 既可以把聚焦的基础组件拼装起来，也可以从完整区块起步。
- **让动效真正有用。** 弹簧、共享布局与按压反馈传达状态变化，让交互前后连贯。
- **交互触手可及。** 组件在适用处包含键盘行为与减弱动效（reduced-motion）支持；项目维护着一整套无障碍测试。

## 浏览组件库

| 分类 | 你能找到什么 |
| --- | --- |
| [组件](https://beui.dev/components/motion) | 动画面包屑、颜色选择器、按钮、选项卡、工具提示等基础组件 |
| [区块](https://beui.dev/components/blocks) | 命令面板、文件上传、注册表单等组合式组件 |
| [AI 智能体](https://beui.dev/components/agents) | 聊天布局、提示词输入、消息、审批与工具结果 |
| [图表](https://beui.dev/charts) | 构成、排行、漏斗、日历与金融可视化 |

## 安装一个组件

在配置好 [shadcn/ui](https://ui.shadcn.com/docs/installation) 的项目中，使用 `@beui` 命名空间添加组件：

```bash
npx shadcn@latest add @beui/animated-toast-stack
```

也支持直接使用 URL：

```bash
npx shadcn@latest add https://beui.dev/r/animated-toast-stack.json
```

在组件页面可以查看它的预览、用法示例和准确的安装命令。偏好手动安装？直接从页面复制源码与配套文件。

## 面向 AI 智能体

把你的编程智能体连接到公共 MCP 服务器，即可发现组件并获取其源码与用法示例，无需许可证密钥：

```txt
https://mcp.beui.dev/mcp
```

客户端配置见 [AI 智能体指南](https://beui.dev/docs/ai-agents)。你也可以安装 beUI skill，帮助智能体查找与组合现有组件：

```bash
npx skills add starc007/ui-components --skill beui
```

不使用 MCP 的直接访问方式：

| 端点 | 内容 |
| --- | --- |
| [`/llms.txt`](https://beui.dev/llms.txt) | 面向智能体的文档索引 |
| [`/r/registry.json`](https://beui.dev/r/registry.json) | 可安装的组件目录 |
| `/r/{slug}.json` | shadcn 兼容的 registry 条目，含源码与依赖 |
| `/r/{slug}/raw` | 组件源码原文 |

## 本地运行

要在本仓库或文档站点上开发，先安装 [Bun](https://bun.sh) 并克隆仓库：

```bash
git clone https://github.com/starc007/ui-components.git
cd ui-components
bun install
bun run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

### 检查

```bash
bun run check
bun test
```

`bun run check` 运行 TypeScript、Biome lint 与 registry 源码校验。`bun test` 运行仅含无障碍的测试套件。测试策略见 [CONTRIBUTING.md](./CONTRIBUTING.md#testing-policy)。

## 贡献

新增或修改组件时，请把组件源码、预览与目录条目放在一起维护：

| 位置 | 用途 |
| --- | --- |
| `components/motion/` | Motion 基础组件与区块 |
| `components/agents/` | AI 智能体界面组件 |
| `components/charts/` | 数据可视化组件 |
| `components/previews/` | 演示与公开用法示例 |
| `lib/registry.ts` | 组件目录与安装元数据 |
| `lib/ease.ts` | 共享动效令牌 |

贡献与测试流程见 [CONTRIBUTING.md](./CONTRIBUTING.md)，组件与动效约定见 [AGENTS.md](./AGENTS.md)。

## 想要完整页面与模板？

[beUI Pro](https://pro.beui.dev/?utm_source=github&utm_medium=referral&utm_campaign=free_to_pro&utm_content=readme_callout) 提供高级动效区块与完整 Next.js 模板，附带可编辑源码和私有 registry 访问权限。

Pro 用户可安装授权区块工作流：

```bash
npx skills add starc007/ui-components --skill beui-pro
```

## Star 历史

<a href="https://star-history.dera.page/#starc007/ui-components&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://star-history.dera.page/svg?repos=starc007/ui-components&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://star-history.dera.page/svg?repos=starc007/ui-components&type=Date" />
    <img alt="Star 历史图表 starc007/ui-components" src="https://star-history.dera.page/svg?repos=starc007/ui-components&type=Date" />
  </picture>
</a>

## 作者

Saurabh Chauhan · [@saurra3h](https://x.com/saurra3h)

## 许可协议

[MIT](./LICENSE)。可在个人与商业项目中使用和改编 beUI。
