import { type AgentGuide, agentGuides } from "@/lib/agent-guides";

export type ComponentExample = {
  slug: string;
  name: string;
  description?: string;
  badge?: "new";
  /** ISO date this variant shipped. */
  launchedAt?: string;
  /** Optional install slug for variants that have their own registry command. */
  installSlug?: string;
  /** Source file shown under Source tab. */
  file: string;
  /** Key into the previews registry (e.g. "motion/button-base"). */
  previewKey: string;
  /** Path to the preview file used for the Usage tab. */
  previewFile: string;
  /** Optional composition file shown instead of the live preview source. */
  usageFile?: string;
};

export type ComponentEntry = {
  slug: string;
  name: string;
  description: string;
  file: string;
  /** Optional contributor credit shown on the website only. */
  credit?: {
    name: string;
    url: string;
    /** Optional avatar shown before the name. */
    avatar?: string;
  };
  badge?: "new";
  /** ISO date the component shipped. Drives newest-first order in the landing
   * "Recently launched" section. Set it when adding a "new" component. */
  launchedAt?: string;
  /** Optional hand-tuned SEO keywords, merged on top of generated ones. */
  keywords?: string[];
  /** Extra source files bundled under this slug (e.g. multi-file components). */
  extraFiles?: string[];
  /** Optional composition file shown instead of the live preview source. */
  usageFile?: string;
  /** Per-variant breakdown rendered as separate Preview / Usage / Source on the page. */
  examples?: ComponentExample[];
  /** Optional behavior guide rendered on the component documentation page. */
  guide?: AgentGuide;
};

export type CategoryEntry = {
  slug: string;
  name: string;
  description: string;
  components: ComponentEntry[];
};

export const registry: CategoryEntry[] = [
  {
    slug: "motion",
    name: "动效组件",
    description:
      "免费开源的 React 动效组件，基于 Motion 与 Tailwind CSS 构建，通过 shadcn registry 提供复制即用的源码。",
    components: [
      {
        slug: "timeline",
        name: "时间轴",
        description:
          "围绕焦点卡片排布带日期事件的可拖拽时间轴。",
        file: "components/motion/timeline.tsx",
        badge: "new",
        launchedAt: "2026-10-20",
        keywords: ["timeline", "react timeline", "horizontal timeline", "milestone timeline", "release history", "changelog timeline"],
      },
      {
        slug: "alert",
        name: "动画警告框",
        description: "组合式的反馈提示组件，状态切换平滑流畅。",
        file: "components/motion/alert.tsx",
        usageFile: "components/previews/motion/alert.usage.tsx",
        badge: "new",
        launchedAt: "2026-10-05",
        keywords: ["alert", "inline feedback", "status message", "dismissible alert"],
      },
      {
        slug: "collapsible",
        name: "动画折叠面板",
        description: "可展开的内容区域，揭示动效平滑顺滑。",
        file: "components/motion/collapsible.tsx",
        usageFile: "components/previews/motion/collapsible.usage.tsx",
        badge: "new",
        launchedAt: "2026-10-05",
        keywords: ["collapsible", "disclosure", "expandable content", "animated collapse"],
      },
      {
        slug: "aspect-ratio",
        name: "宽高比容器",
        description: "响应式媒体框，宽高比切换平滑流畅。",
        file: "components/motion/aspect-ratio.tsx",
        usageFile: "components/previews/motion/aspect-ratio.usage.tsx",
        badge: "new",
        launchedAt: "2026-10-05",
        keywords: ["aspect ratio", "responsive media", "image container", "video aspect ratio"],
      },
      {
        slug: "arc-picker",
        name: "弧形选择器",
        description: "支持上、下、左、右弧线的径向文字选择器，滚轮滚动顺滑，每一步滚动即时更新选中项。一个持久的括号取景框随每个标签生长、收拢。支持拖拽惯性、键盘输入、禁用选项、受控/非受控值、表单与 reduced motion。",
        file: "components/motion/arc-picker.tsx",
        badge: "new",
        launchedAt: "2026-10-04",
        keywords: ["radial picker", "arc picker", "curved text scroller", "semicircle picker", "momentum selection"],
      },
      {
        slug: "sortable-stack",
        name: "可排序列表",
        description: "组合式排序列表，包含分组、列表项、拖拽把手、内容与撤销等部件，并附带共享状态 hook。spring 布局、键盘重排、无障碍位置播报，支持受控或非受控列表项。",
        file: "components/motion/sortable-list.tsx",
        extraFiles: ["components/motion/sortable-stack.tsx"],
        badge: "new",
        launchedAt: "2026-10-02",
      },
      {
        slug: "image-viewer",
        name: "图片查看器",
        description: "面向画廊与附件预览的组合式 React 图片查看器，带动画灯箱变体、自定义缩略图与控件，支持 swipe 与键盘导航。",
        file: "components/motion/morphing-lightbox.tsx",
        badge: "new",
        launchedAt: "2026-10-02",
        examples: [
          {
            slug: "morphing",
            name: "形变查看器",
            description: "与缩略图联动的图片查看器，包含画廊、缩略图、内容、说明与导航等组合式部件，以及共享状态 hook。点击缩略图即可展开为灯箱，面板从对应缩略图位置生长出来，其余缩略图则暗淡退后；箭头与键盘在图片间导航，Esc 或关闭按钮收回到原位。",
            installSlug: "morphing-lightbox",
            file: "components/motion/morphing-lightbox.tsx",
            previewKey: "motion/morphing-lightbox",
            previewFile: "components/previews/motion/morphing-lightbox.preview.tsx",
          },
        ],
      },
      {
        slug: "date-range-picker",
        name: "日期范围选择器",
        description: "组合式日期范围选择器，包含根组件、触发器、弹出内容、日历、头部、网格、摘要、页脚、清除与预设等部件，以及共享状态 hook。spring 驱动的月切换、区间高亮悬停预览、受控或非受控值、禁止日期与本地化月份标签。",
        file: "components/motion/date-range-picker.tsx",
        badge: "new",
        launchedAt: "2026-10-02",
      },
      {
        slug: "card",
        name: "卡片",
        description: "组合式卡片，包含头部、标题、描述、操作、内容与页脚部件。提供描边或弱化表面、标准或紧凑间距，以及可选的按压反馈和选中高亮。",
        file: "components/motion/card.tsx",
        badge: "new",
        launchedAt: "2026-10-10",
        keywords: ["card", "react card component", "selectable card", "settings card", "summary card"],
      },
      {
        slug: "color-picker",
        name: "颜色选择器",
        description: "触发器色块形变为饱和度/亮度区域的组合式颜色选择器。拖动时取色放大镜从滑块上浮起。包含色相与透明度滑块、hex 输入、RGB/HSL 数值字段、预设、EyeDropper 取色器以及表单集成。",
        file: "components/motion/color-picker.tsx",
        badge: "new",
        launchedAt: "2026-10-10",
        keywords: ["color picker", "rgb color picker", "hex color input", "hsl picker", "eyedropper"],
      },
      {
        slug: "color-selector",
        name: "动画颜色选择器",
        description: "组合式颜色色板，带 spring 滑动的选中环与按压反馈，采用原生 radio 键盘导航，支持受控或非受控状态。",
        file: "components/motion/color-selector.tsx",
        badge: "new",
        launchedAt: "2026-09-27",
      },
      {
        slug: "breadcrumb",
        name: "动画面包屑",
        description:
          "组合式面包屑导航，路径切换柔和、长路径可折叠为可悬停的溢出下拉、自定义分隔符，并支持 router-link 渲染。",
        file: "components/motion/breadcrumb.tsx",
        badge: "new",
        launchedAt: "2026-09-27",
      },
      {
        slug: "tilt-card",
        name: "倾斜卡片",
        description: "悬停时 3D 透视倾斜，并带有光标追踪的眩光效果。",
        file: "components/motion/tilt-card.tsx",
      },
      {
        slug: "button",
        name: "按钮",
        description:
          "spring 按压感的 Button，外加 StatefulButton、MagneticButton 与 MetallicButton 变体。",
        file: "components/motion/button/index.tsx",
        badge: "new",
        launchedAt: "2026-08-25",
        extraFiles: [
          "components/motion/button/base.tsx",
          "components/motion/button/stateful.tsx",
          "components/motion/button/magnetic.tsx",
          "components/motion/button/metallic.tsx",
        ],
        examples: [
          {
            slug: "metallic",
            name: "金属按钮",
            description:
              "由醒目的镀铬边框包覆的中性按钮表面，带有一道直线移动的反射光。",
            badge: "new",
            launchedAt: "2026-08-25",
            installSlug: "button-metallic",
            file: "components/motion/button/metallic.tsx",
            previewKey: "motion/button-metallic",
            previewFile: "components/previews/motion/button-metallic.preview.tsx",
          },
          {
            slug: "base",
            name: "按钮",
            description: "按压缩放、悬停上浮、变体与尺寸。",
            installSlug: "button-base",
            file: "components/motion/button/base.tsx",
            previewKey: "motion/button-base",
            previewFile: "components/previews/motion/button-base.preview.tsx",
          },
          {
            slug: "stateful",
            name: "状态按钮",
            description: "空闲 → 加载 → 成功/失败，带 blur 交换插槽与宽度形变。",
            installSlug: "button-stateful",
            file: "components/motion/button/stateful.tsx",
            previewKey: "motion/button-stateful",
            previewFile: "components/previews/motion/button-stateful.preview.tsx",
          },
          {
            slug: "magnetic",
            name: "磁吸按钮",
            description: "通过 Magnetic 包装器实现光标吸附拉动的按钮。",
            installSlug: "button-magnetic",
            file: "components/motion/button/magnetic.tsx",
            previewKey: "motion/button-magnetic",
            previewFile: "components/previews/motion/button-magnetic.preview.tsx",
          },
        ],
      },
      {
        slug: "expanding-arrow-button",
        name: "动画 CTA 按钮",
        description:
          "富有表现力的行动号召按钮，带展开、长按与滑动交互。",
        file: "components/motion/expanding-arrow-button.tsx",
        extraFiles: [
          "components/motion/hold-action-button.tsx",
          "components/motion/slide-action-button.tsx",
        ],
        badge: "new",
        launchedAt: "2026-07-16",
        examples: [
          {
            slug: "expanding-arrow",
            name: "展开箭头按钮",
            description:
              "一个强调色方块，悬停或聚焦时展开为点状箭头轨迹。",
            installSlug: "expanding-arrow-button",
            file: "components/motion/expanding-arrow-button.tsx",
            previewKey: "motion/expanding-arrow-button",
            previewFile:
              "components/previews/motion/expanding-arrow-button.preview.tsx",
          },
          {
            slug: "hold-action",
            name: "长按操作按钮",
            description:
              "长按以完成操作，配有纵向或横向的液态填充；提前松开即取消。",
            installSlug: "hold-action-button",
            file: "components/motion/hold-action-button.tsx",
            previewKey: "motion/hold-action-button",
            previewFile:
              "components/previews/motion/hold-action-button.preview.tsx",
          },
          {
            slug: "slide-action",
            name: "滑动操作按钮",
            description:
              "将滑块拖到末端以确认操作；提前松开会弹回原位。",
            installSlug: "slide-action-button",
            file: "components/motion/slide-action-button.tsx",
            previewKey: "motion/slide-action-button",
            previewFile:
              "components/previews/motion/slide-action-button.preview.tsx",
          },
        ],
      },
      {
        slug: "expandable-control",
        name: "可展开控件",
        description:
          "点击即展开的按钮与胶囊控件，通过 spring 布局连续性揭示标签或后续操作。",
        file: "components/motion/expandable-control.tsx",
        badge: "new",
        launchedAt: "2026-08-22",
        keywords: [
          "expandable button react",
          "animated chip react",
          "click to expand",
          "layout animation button",
          "reveal action control",
        ],
      },
      {
        slug: "adaptive-stepper",
        name: "自适应步进器",
        description:
          "固定占位的组合式数字步进器，在最小值与最大值处自适应调整形态，数值随步进滚动切换。",
        file: "components/motion/adaptive-stepper.tsx",
        badge: "new",
        launchedAt: "2026-08-31",
        keywords: [
          "react number stepper",
          "animated quantity selector",
          "adaptive counter",
          "increment decrement control",
          "compound stepper component",
          "number input animation",
        ],
      },
      {
        slug: "marquee",
        name: "跑马灯",
        description: "水平或垂直无限滚动，悬停时暂停。",
        file: "components/motion/marquee.tsx",
      },
      {
        slug: "tabs",
        name: "标签页",
        description: "胶囊、分段或下划线样式的标签页，带 spring layoutId 指示器与可选图标。",
        file: "components/motion/tabs.tsx",
      },
      {
        slug: "switch",
        name: "开关",
        description: "spring 驱动滑块的开关，带按压反馈。",
        file: "components/motion/switch.tsx",
      },
      {
        slug: "input",
        name: "输入框",
        description:
          "带标签、左右图标、可选的稳定错误行、错误抖动与成功对勾描绘的文本输入框。",
        file: "components/motion/input.tsx",
        keywords: [
          "react animated input",
          "input error shake",
          "floating label input",
          "react form input animation",
          "animated text field",
        ],
      },
      {
        slug: "select",
        name: "选择器",
        description: "组合式选择器原语：面板从触发器上以同一条 spring 展开并分离为独立胶囊；另有 Morph 变体，触发器直接形变为面板。",
        file: "components/motion/select.tsx",
        badge: "new",
        launchedAt: "2026-06-28",
        examples: [
          {
            slug: "default",
            name: "选择器",
            description: "组合式原语（Select、SelectTrigger、SelectValue、SelectContent、SelectItem）；面板从触发器上捏合分离，间隙与圆角沿同一条曲线展开，行内容保持不缩放。",
            installSlug: "select",
            file: "components/motion/select.tsx",
            previewKey: "motion/select",
            previewFile: "components/previews/motion/select.preview.tsx",
          },
          {
            slug: "morph",
            name: "形变选择器",
            description: "组合式原语（MorphSelect、MorphSelectTrigger、MorphSelectValue、MorphSelectContent、MorphSelectItem），触发器形变为面板并在关闭时收回。",
            installSlug: "select-morph",
            file: "components/motion/select-morph.tsx",
            previewKey: "motion/select-morph",
            previewFile: "components/previews/motion/select-morph.preview.tsx",
          },
        ],
      },
      {
        slug: "combobox",
        name: "组合框",
        description:
          "可搜索的组合框，带形变 portal、分组过滤、键盘导航，支持受控或非受控状态。",
        file: "components/motion/combobox.tsx",
        badge: "new",
        launchedAt: "2026-08-11",
        guide: agentGuides.combobox,
        keywords: [
          "react combobox",
          "animated combobox",
          "searchable select react",
          "autocomplete component",
          "command menu select",
          "accessible listbox",
        ],
      },
      {
        slug: "multi-select",
        name: "多选器",
        description:
          "组合式多选原语，带可搜索选项、可移除的动画标签（token），以及形变的防碰撞面板。",
        file: "components/motion/multi-select/index.tsx",
        badge: "new",
        launchedAt: "2026-08-29",
        extraFiles: [
          "components/motion/multi-select/context.tsx",
          "components/motion/multi-select/trigger.tsx",
          "components/motion/multi-select/content.tsx",
          "components/motion/multi-select/list.tsx",
        ],
        keywords: [
          "react multi select",
          "animated multi select",
          "searchable multi select",
          "tag picker react",
          "multiple combobox",
          "composable listbox",
        ],
      },
      {
        slug: "checkbox",
        name: "复选框",
        description:
          "表单勾选控件，带描绘式对勾、spring 按压反馈，支持半选（indeterminate）状态。",
        file: "components/motion/checkbox.tsx",
        badge: "new",
        launchedAt: "2026-06-23",
        examples: [
          {
            slug: "default",
            name: "复选框",
            description: "描绘式对勾、spring 按压反馈与半选状态。",
            file: "components/motion/checkbox.tsx",
            previewKey: "motion/checkbox",
            previewFile: "components/previews/motion/checkbox.preview.tsx",
          },
          {
            slug: "description",
            name: "带描述",
            description: "标签下方的可选辅助文案，作为描述暴露给辅助技术。",
            file: "components/motion/checkbox.tsx",
            previewKey: "motion/checkbox-description",
            previewFile: "components/previews/motion/checkbox-description.preview.tsx",
          },
        ],
      },
      {
        slug: "radio",
        name: "单选组",
        description:
          "单选控件，带 layoutId 滑动的指示圆点与 spring 按压反馈。",
        file: "components/motion/radio.tsx",
        badge: "new",
        launchedAt: "2026-06-23",
        examples: [
          {
            slug: "default",
            name: "单选组",
            description: "滑动的指示圆点与 spring 按压反馈。",
            file: "components/motion/radio.tsx",
            previewKey: "motion/radio",
            previewFile: "components/previews/motion/radio.preview.tsx",
          },
          {
            slug: "description",
            name: "带描述",
            description: "每个选项标签下方的可选辅助文案，作为描述暴露给辅助技术。",
            file: "components/motion/radio.tsx",
            previewKey: "motion/radio-description",
            previewFile: "components/previews/motion/radio-description.preview.tsx",
          },
        ],
      },
      {
        slug: "bottom-sheet",
        name: "底部抽屉",
        description: "受 Vaul 启发的可拖拽底部抽屉，带吸附点、惯性与玻璃拟态表面。",
        file: "components/motion/bottom-sheet.tsx",
      },
      {
        slug: "pull-to-refresh",
        name: "下拉刷新",
        description:
          "原生手感下拉刷新容器，带拖拽阻尼、阈值反馈与异步刷新处理。",
        file: "components/motion/pull-to-refresh.tsx",
        badge: "new",
        launchedAt: "2026-07-17",
        keywords: [
          "pull to refresh react",
          "swipe to refresh",
          "mobile refresh gesture",
          "touch refresh component",
          "overscroll refresh",
        ],
      },
      {
        slug: "shared-layout-bg",
        name: "共享布局背景",
        description: "通过 motion 共享布局在悬停项之间滑动的胶囊，带 blur 进出场。",
        file: "components/motion/shared-layout-bg.tsx",
      },
      {
        slug: "bounce-sidebar",
        name: "弹跳侧边栏",
        description:
          "垂直侧边栏，激活圆点沿弯曲的 spring 路径在目标项之间跳跃。",
        file: "components/motion/bounce-sidebar.tsx",
        badge: "new",
        launchedAt: "2026-07-22",
        keywords: [
          "animated sidebar react",
          "bounce sidebar",
          "sidebar navigation",
          "spring navigation indicator",
          "curved motion path",
          "active navigation dot",
        ],
      },
      {
        slug: "animated-sidebar",
        name: "动画侧边栏",
        guide: agentGuides["animated-sidebar"],
        description:
          "组合式应用侧边栏，嵌套导航带形变动效：桌面上折叠为动画图标栏，移动端变为焦点管理的底部面板（sheet）。",
        file: "components/motion/animated-sidebar.tsx",
        badge: "new",
        launchedAt: "2026-07-29",
        keywords: [
          "animated sidebar react",
          "mobile sidebar",
          "responsive sidebar",
          "collapsible sidebar",
          "icon sidebar",
          "sidebar drawer",
          "composable sidebar",
          "nested sidebar navigation",
          "accessible navigation menu",
        ],
      },
      {
        slug: "file-tree",
        name: "文件树",
        description:
          "组合式文件与文件夹原语，分支展开带 spring、选中项滑动切换，并提供完整的键盘导航。",
        file: "components/motion/file-tree.tsx",
        badge: "new",
        launchedAt: "2026-08-27",
        keywords: [
          "animated file tree react",
          "file explorer component",
          "folder tree",
          "project tree",
          "accessible tree view",
          "react tree component",
        ],
      },
      {
        slug: "preview-rail",
        name: "预览导航栏",
        description: "受 Codex 应用启发的导航栏，紧凑的刻度在悬停项周围形成金字塔，并揭示浮动目标预览。",
        file: "components/motion/preview-rail.tsx",
        badge: "new",
        launchedAt: "2026-07-11",
        keywords: [
          "codex app navigation",
          "codex style navigation",
          "openai codex navigation",
          "codex navigation react",
          "preview rail",
          "navigation rail",
          "hover navigation",
          "navigation preview",
          "vertical navigation react",
          "horizontal navigation react",
        ],
      },
      {
        slug: "dock",
        name: "程序坞",
        description: "macOS 风格程序坞，支持分组操作与滑动的激活胶囊。",
        file: "components/motion/dock.tsx",
      },
      {
        slug: "tooltip",
        name: "工具提示",
        description: "组合式悬停/聚焦/点按工具提示，带轻微的缩放淡入淡出、防碰撞的方位与对齐、可选箭头、可悬停内容的指针通道，以及单行 content 简写。",
        file: "components/motion/tooltip.tsx",
        examples: [
          {
            slug: "default",
            name: "工具提示",
            description: "单行简写：传入 `content` 并包裹触发元素。四个方位均可带箭头。",
            file: "components/motion/tooltip.tsx",
            previewKey: "motion/tooltip",
            previewFile: "components/previews/motion/tooltip.preview.tsx",
          },
          {
            slug: "toolbar",
            name: "工具栏",
            description: "共享 provider 下的组合式部件。纯图标按钮从工具提示获取无障碍名称，后续标签跳过延迟，禁用的控件仍保持可聚焦。",
            file: "components/motion/tooltip.tsx",
            previewKey: "motion/tooltip-toolbar",
            previewFile: "components/previews/motion/tooltip-toolbar.preview.tsx",
          },
        ],
      },
      {
        slug: "context-menu",
        name: "动画右键菜单",
        description:
          "组合式右键菜单原语，带以指针为起点的 clip 形变、滑动的激活行、checkbox/radio 选项、键盘导航与 typeahead 输入查找。",
        file: "components/motion/context-menu.tsx",
        badge: "new",
        launchedAt: "2026-07-27",
        keywords: [
          "react context menu",
          "animated context menu",
          "right click menu",
          "context menu keyboard navigation",
          "long press menu react",
          "composable menu primitives",
        ],
      },
      {
        slug: "popover",
        name: "弹出层",
        description:
          "两种弹出层模式：Gooey 变体的面板经 SVG goo 滤镜从触发器中“渗出”（液态颈部拉伸、收缩），其上淡入清晰内容；Morph 变体从最靠近触发器的角落以一条同步的 clip 曲线揭示完整尺寸的面板。",
        file: "components/motion/popover.tsx",
        badge: "new",
        launchedAt: "2026-07-07",
        keywords: [
          "react popover",
          "gooey popover",
          "animated popover",
          "svg goo filter",
          "metaball popover",
          "hover popover react",
          "morph popover react",
          "dropdown menu react",
        ],
        examples: [
          {
            slug: "gooey",
            name: "Gooey 弹出层",
            description:
              "组合式 Popover、PopoverTrigger、PopoverContent；面板经 SVG goo 滤镜从触发器中渗出（液态颈部），清晰内容在其上淡入。",
            installSlug: "popover",
            file: "components/motion/popover.tsx",
            previewKey: "motion/popover",
            previewFile: "components/previews/motion/popover.preview.tsx",
          },
          {
            slug: "morph",
            name: "形变弹出层",
            description:
              "组合式 MorphPopover、MorphPopoverTrigger、MorphPopoverContent。完整尺寸的面板从最靠近触发器的角落以一条同步的 clip 曲线揭示，关闭时按原路径收回。",
            installSlug: "popover-morph",
            file: "components/motion/popover-morph.tsx",
            previewKey: "motion/popover-morph",
            previewFile: "components/previews/motion/popover-morph.preview.tsx",
          },
        ],
      },
      {
        slug: "morphing-modal",
        name: "形变弹窗",
        description: "家庭应用风格的弹窗。单一面板在内部视图之间切换时形变高度，内容以 blur 交叉淡化。",
        file: "components/motion/morphing-modal.tsx",
      },
      {
        slug: "center-morph-modal",
        name: "中心形变弹窗",
        description:
          "组合式弹窗：完整尺寸的表面从正中心向四边展开，关闭时以同样的方式折回，并带内嵌关闭控件。",
        file: "components/motion/center-morph-modal.tsx",
        badge: "new",
        launchedAt: "2026-07-21",
        keywords: [
          "react morph modal",
          "center expanding modal",
          "animated modal react",
          "framer motion modal",
          "radial modal animation",
        ],
      },
      {
        slug: "text-animation",
        name: "文字动画",
        description:
          "动画文字原语合集：spring 揭示、彩色扫掠、shimmer 加载态、逐字级联替换与字符乱序。",
        file: "components/motion/text-reveal.tsx",
        badge: "new",
        launchedAt: "2026-07-25",
        extraFiles: [
          "components/motion/chromatic-text-reveal.tsx",
          "components/motion/text-shimmer.tsx",
          "components/motion/text-cascade.tsx",
          "components/motion/text-scramble.tsx",
        ],
        examples: [
          {
            slug: "text-scramble",
            name: "文字乱序",
            description:
              "受控的字符乱序效果：在解析新文本的同时保持最终值对无障碍可读。",
            badge: "new",
            launchedAt: "2026-08-14",
            installSlug: "text-scramble",
            file: "components/motion/text-scramble.tsx",
            previewKey: "motion/text-scramble",
            previewFile:
              "components/previews/motion/text-scramble.preview.tsx",
          },
          {
            slug: "chromatic-reveal",
            name: "Dia 文字动画",
            description:
              "受 Dia 启发的文字效果：固定句首前缀，句尾循环单词以彩色扫掠揭示。",
            badge: "new",
            launchedAt: "2026-07-25",
            installSlug: "chromatic-text-reveal",
            file: "components/motion/chromatic-text-reveal.tsx",
            previewKey: "motion/chromatic-text-reveal",
            previewFile:
              "components/previews/motion/chromatic-text-reveal.preview.tsx",
          },
          {
            slug: "reveal",
            name: "文字揭示",
            description: "单词或字符逐个揭示，带 spring 上滑与 blur。",
            installSlug: "text-reveal",
            file: "components/motion/text-reveal.tsx",
            previewKey: "motion/text-reveal",
            previewFile: "components/previews/motion/text-reveal.preview.tsx",
          },
          {
            slug: "shimmer",
            name: "文字微光",
            description: "渐变扫过文字，用于加载或强调。",
            installSlug: "text-shimmer",
            file: "components/motion/text-shimmer.tsx",
            previewKey: "motion/text-shimmer",
            previewFile: "components/previews/motion/text-shimmer.preview.tsx",
          },
          {
            slug: "cascade",
            name: "文字级联",
            description: "独立文字的逐字老虎机滚动——旧字母随新字母落位而逐个落下，自左向右。",
            installSlug: "text-cascade",
            file: "components/motion/text-cascade.tsx",
            previewKey: "motion/text-cascade",
            previewFile: "components/previews/motion/text-cascade.preview.tsx",
          },
        ],
      },
      {
        slug: "number",
        name: "数字动画",
        description:
          "动画数字原语合集：数值增长、滚动 ticker 与固定位数字替换。",
        file: "components/motion/animated-number.tsx",
        badge: "new",
        launchedAt: "2026-09-04",
        extraFiles: [
          "components/motion/number-ticker.tsx",
          "components/motion/digit-swap.tsx",
        ],
        examples: [
          {
            slug: "digit-swap",
            name: "数字替换",
            description:
              "固定位数字与掩码字符在变化时滚动，方向、错峰、重放与后缀强调均可控制。",
            badge: "new",
            launchedAt: "2026-09-04",
            installSlug: "digit-swap",
            file: "components/motion/digit-swap.tsx",
            previewKey: "motion/digit-swap",
            previewFile: "components/previews/motion/digit-swap.preview.tsx",
          },
          {
            slug: "ticker",
            name: "数字滚动",
            description: "老虎机式滚动数字，带错峰入场。",
            installSlug: "number-ticker",
            file: "components/motion/number-ticker.tsx",
            previewKey: "motion/number-ticker",
            previewFile: "components/previews/motion/number-ticker.preview.tsx",
          },
          {
            slug: "animated",
            name: "数字增长",
            description: "进入视口时触发的 spring 驱动数值增长。",
            installSlug: "animated-number",
            file: "components/motion/animated-number.tsx",
            previewKey: "motion/animated-number",
            previewFile: "components/previews/motion/animated-number.preview.tsx",
          },
        ],
      },
      {
        slug: "animated-badge",
        name: "动画徽章",
        description: "状态徽章，带动画状态图标、脉冲反馈与紧凑尺寸变体。",
        file: "components/motion/animated-badge.tsx",
      },
      {
        slug: "action-swap",
        name: "动作交换",
        description: "CTA 按钮与插槽原语，以 blur 动效交换文字与图标。",
        file: "components/motion/action-swap.tsx",
        examples: [
          {
            slug: "cascade",
            name: "级联",
            description: "逐字老虎机滚动——旧标签的字母随新字母落位而逐个落下，自左向右。",
            installSlug: "action-swap-cascade",
            file: "components/motion/action-swap-cascade.tsx",
            previewKey: "motion/action-swap-cascade",
            previewFile: "components/previews/motion/action-swap-cascade.preview.tsx",
          },
          {
            slug: "blur",
            name: "模糊",
            description: "复制按钮风格的交换，带 blur、透明度与缩放。",
            installSlug: "action-swap-blur",
            file: "components/motion/action-swap-blur.tsx",
            previewKey: "motion/action-swap-blur",
            previewFile: "components/previews/motion/action-swap-blur.preview.tsx",
          },
          {
            slug: "roll",
            name: "滚动",
            description: "下一段文字或图标从下方带 blur 滚入。",
            installSlug: "action-swap-roll",
            file: "components/motion/action-swap-roll.tsx",
            previewKey: "motion/action-swap-roll",
            previewFile: "components/previews/motion/action-swap-roll.preview.tsx",
          },
        ],
      },
      {
        slug: "animated-toast-stack",
        name: "动画通知堆栈",
        description: "堆叠通知，带状态形变、swipe 关闭、操作按钮与布局感知动效。",
        file: "components/motion/animated-toast-stack.tsx",
      },
      {
        slug: "theme-toggle",
        name: "主题切换",
        description: "通过 View Transition API 重绘整页的主题切换按钮——矩形或圆形 clip-path 揭示，或横跨页面的百叶窗条。",
        file: "components/motion/theme-toggle.tsx",
        badge: "new",
        launchedAt: "2026-08-01",
        keywords: [
          "theme toggle",
          "dark mode toggle",
          "view transition theme",
          "clip path theme reveal",
          "blinds transition",
        ],
      },
      {
        slug: "bouncy-accordion",
        name: "弹跳手风琴",
        description: "单开手风琴，带加权 spring 布局、图标行与 reduced-motion 安全的内容揭示。",
        file: "components/motion/bouncy-accordion.tsx",
      },
      {
        slug: "drawer",
        name: "抽屉",
        description: "从左侧或右侧以 spring 滑入的侧边面板，带背景 blur、body 滚动锁定与 Esc 关闭。",
        file: "components/motion/drawer.tsx",
      },
      {
        slug: "scroll-animation",
        name: "滚动动画",
        description: "滚动驱动动效：Lenis 平滑滚动 provider 与读取其进度的阅读进度指示器。",
        file: "components/motion/smooth-scroll.tsx",
        extraFiles: [
          "components/motion/scroll-progress.tsx",
          "components/motion/parallax.tsx",
          "components/motion/scroll-to.tsx",
          "components/motion/scroll-reveal.tsx",
        ],
        keywords: [
          "smooth scroll",
          "lenis",
          "scroll progress",
          "reading progress",
          "momentum scroll",
          "scroll velocity",
        ],
        examples: [
          {
            slug: "smooth-scroll",
            name: "平滑滚动",
            description: "基于 Lenis 的平滑滚动 provider，useSmoothScroll hook 暴露滚动偏移、进度与速度。reduced-motion 下使用原生滚动。",
            installSlug: "smooth-scroll",
            file: "components/motion/smooth-scroll.tsx",
            previewKey: "motion/smooth-scroll",
            previewFile: "components/previews/motion/smooth-scroll.preview.tsx",
          },
          {
            slug: "scroll-progress",
            name: "滚动进度",
            description: "阅读进度指示器——固定条或圆环——经 useSmoothScroll 由滚动位置驱动，带 spring 平滑。",
            installSlug: "scroll-progress",
            file: "components/motion/scroll-progress.tsx",
            previewKey: "motion/scroll-progress",
            previewFile: "components/previews/motion/scroll-progress.preview.tsx",
          },
          {
            slug: "parallax",
            name: "视差",
            description: "子元素穿越视口时按速度系数漂移的包装器，支持横纵两轴。reduced-motion 安全。",
            installSlug: "parallax",
            file: "components/motion/parallax.tsx",
            previewKey: "motion/parallax",
            previewFile: "components/previews/motion/parallax.preview.tsx",
          },
          {
            slug: "scroll-to",
            name: "滚动至",
            description: "经激活的 SmoothScroll provider 平滑滚动到目标（偏移、选择器或元素）的按钮；reduced-motion 下瞬时跳转。",
            installSlug: "scroll-to",
            file: "components/motion/scroll-to.tsx",
            previewKey: "motion/scroll-to",
            previewFile: "components/previews/motion/scroll-to.preview.tsx",
          },
          {
            slug: "scroll-reveal",
            name: "滚动揭示",
            description: "子元素进入视口时以 spring 上滑与 blur 揭示，可选只播放一次或每次进入都播放。reduced-motion 下保留淡入。",
            installSlug: "scroll-reveal",
            file: "components/motion/scroll-reveal.tsx",
            previewKey: "motion/scroll-reveal",
            previewFile: "components/previews/motion/scroll-reveal.preview.tsx",
          },
        ],
      },
      {
        slug: "range-slider",
        name: "区间滑块",
        description: "带刻度圆点与竖条滑块的滑块，滑块落到每一步时都会弹跳。支持拖拽与键盘，reduced-motion 安全。",
        file: "components/motion/range-slider.tsx",
        badge: "new",
        launchedAt: "2026-09-09",
        keywords: [
          "slider",
          "range slider",
          "range input",
          "stepped slider",
          "inline slider",
          "ticks",
          "volume slider",
          "ruler picker",
        ],
        examples: [
          {
            slug: "inline",
            name: "内嵌滑块",
            description:
              "内嵌的填充、标签与数值。十个均匀分布的档位铺满轨道；文字下方的刻度点隐藏但仍可交互，滑块落在轨道两端的形状也会变化。",
            installSlug: "range-slider-inline",
            badge: "new",
            launchedAt: "2026-09-09",
            file: "components/motion/range-slider-inline.tsx",
            previewKey: "motion/range-slider-inline",
            previewFile: "components/previews/motion/range-slider-inline.preview.tsx",
          },
          {
            slug: "stepped",
            name: "区间滑块",
            description:
              "刻度圆点，竖条滑块落到每一步时弹跳。",
            installSlug: "range-slider",
            file: "components/motion/range-slider.tsx",
            previewKey: "motion/range-slider",
            previewFile: "components/previews/motion/range-slider.preview.tsx",
          },
          {
            slug: "fluid",
            name: "液态滑块",
            description:
              "没有滑块。填充在圆润的液态端盖下滑动，填充覆盖之处标签随之翻转颜色。",
            installSlug: "range-slider-fluid",
            badge: "new",
            launchedAt: "2026-07-31",
            file: "components/motion/range-slider-fluid.tsx",
            previewKey: "motion/range-slider-fluid",
            previewFile: "components/previews/motion/range-slider-fluid.preview.tsx",
          },
          {
            slug: "wave",
            name: "波形滑块",
            description:
              "均衡器柱状围绕手柄隆起并在其经过后回落，数值像波浪一样沿轨道移动。",
            installSlug: "range-slider-wave",
            badge: "new",
            launchedAt: "2026-07-31",
            file: "components/motion/range-slider-wave.tsx",
            previewKey: "motion/range-slider-wave",
            previewFile: "components/previews/motion/range-slider-wave.preview.tsx",
          },
          {
            slug: "bubble",
            name: "气泡滑块",
            description:
              "抓住滑块时一个数值气泡从中弹出。气泡随拖拽速度倾斜、压扁，随后回正落定。",
            installSlug: "range-slider-bubble",
            badge: "new",
            launchedAt: "2026-07-31",
            file: "components/motion/range-slider-bubble.tsx",
            previewKey: "motion/range-slider-bubble",
            previewFile: "components/previews/motion/range-slider-bubble.preview.tsx",
          },
          {
            slug: "ruler",
            name: "标尺滑块",
            description:
              "指针固定不动，刻度尺在指针下方滚动。轻弹一下会继续滚动并停在最近的刻度上。",
            installSlug: "range-slider-ruler",
            badge: "new",
            launchedAt: "2026-07-31",
            file: "components/motion/range-slider-ruler.tsx",
            previewKey: "motion/range-slider-ruler",
            previewFile: "components/previews/motion/range-slider-ruler.preview.tsx",
          },
        ],
      },
      {
        slug: "wheel-picker",
        name: "滚轮选择器",
        description: "iOS 风格选择滚轮：原生惯性滚动的 3D 转鼓，吸附到最近的档位，支持滚轮、拖拽与键盘。可并排组合，支持受控或非受控值。",
        file: "components/motion/wheel-picker.tsx",
        badge: "new",
        launchedAt: "2026-07-09",
        keywords: ["picker", "wheel picker", "ios picker", "drum picker", "spinner", "time picker", "date picker", "scroll picker"],
      },
      {
        slug: "table",
        name: "表格",
        description:
          "万行级依然流畅的虚拟化数据表格，带可排序表头、行选择、列宽调整与重排，以及粘性表头。极简、无障碍且完全可键盘操作。",
        file: "components/motion/table/index.tsx",
        badge: "new",
        launchedAt: "2026-07-01",
        keywords: [
          "react data table",
          "virtualized table",
          "sortable table",
          "table row selection",
          "react table 10k rows",
          "editable table react",
        ],
        examples: [
          {
            slug: "data",
            name: "数据表格",
            description:
              "一万行虚拟化数据，带可排序表头、行选择、列宽调整与重排。",
            installSlug: "table",
            file: "components/motion/table/index.tsx",
            previewKey: "motion/table",
            previewFile: "components/previews/motion/table.preview.tsx",
          },
          {
            slug: "editable",
            name: "可编辑表格",
            description:
              "内联编辑单元格，经边框手柄插入或删除行列；表格根据更新后的数据与列定义重新渲染。",
            installSlug: "table-editable",
            file: "components/motion/table/index.tsx",
            previewKey: "motion/table-editable",
            previewFile: "components/previews/motion/table-editable.preview.tsx",
          },
          {
            slug: "async",
            name: "异步表格",
            description:
              "按需加载分页——首次加载显示骨架行，虚拟化列表接近底部时经 onEndReached 触发无限滚动。",
            installSlug: "table-async",
            file: "components/motion/table/index.tsx",
            previewKey: "motion/table-async",
            previewFile: "components/previews/motion/table-async.preview.tsx",
          },
        ],
      },
      {
        slug: "shader-background",
        name: "着色器背景",
        description:
          "Canvas 着色器背景（网格渐变、噪点、扭曲、波浪、voronoi、点轨道等），由单个带类型的 variant prop 控制。reduced-motion 下冻结动画。",
        file: "components/motion/shader-background.tsx",
        badge: "new",
        launchedAt: "2026-07-02",
        keywords: [
          "shader background react",
          "webgl background",
          "mesh gradient react",
          "animated background react",
          "canvas shader",
          "gradient background component",
        ],
      },
      {
        slug: "cylinder-carousel",
        name: "圆筒轮播",
        description:
          "列表项排布在圆筒内壁的轮播：向中心后退、向边缘放大。拖拽、滚轮或方向键即可滚动，可循环并带回弹边缘。",
        file: "components/motion/cylinder-carousel.tsx",
        badge: "new",
        launchedAt: "2026-07-04",
        keywords: [
          "3d carousel react",
          "cylinder carousel",
          "coverflow react",
          "rolling carousel",
          "draggable carousel react",
        ],
      },
      {
        slug: "loader",
        name: "加载指示器",
        description:
          "十七种变体的加载指示器：spinner、点阵、条形、点矩阵、抖动、形变、彗星、乱序、流体融合、牛顿摆、螺旋、百分比等。",
        file: "components/motion/loader.tsx",
        badge: "new",
        launchedAt: "2026-07-04",
        keywords: [
          "loader react",
          "loading spinner",
          "dot matrix loader",
          "dithering loader",
          "loading indicator",
        ],
      },
    ],
  },
  {
    slug: "charts",
    name: "图表组件",
    description:
      "覆盖活动统计、收益日历、价格目标与订单簿的 React 动效图表，基于 Motion 与 Tailwind CSS 构建，以可定制的复制即用源码提供。",
    components: [
      {
        slug: "line-chart",
        name: "折线图",
        description: "随数据一起形变的折线图与面积图，带吸附十字线与数值工具提示。",
        file: "components/charts/line-chart.tsx",
        usageFile: "components/previews/charts/line-chart.usage.tsx",
        badge: "new",
        launchedAt: "2026-10-27",
        keywords: ["line chart", "area chart", "react line chart", "time series chart", "trend chart"],
      },
      {
        slug: "bar-chart",
        name: "柱状图",
        description: "分组、堆叠与横向柱状图，以 spring 生长、重缩放与重排序。",
        file: "components/charts/bar-chart.tsx",
        usageFile: "components/previews/charts/bar-chart.usage.tsx",
        badge: "new",
        launchedAt: "2026-10-27",
        keywords: ["bar chart", "stacked bar chart", "grouped bar chart", "horizontal bar chart", "column chart"],
      },
      {
        slug: "sparkline",
        name: "迷你走势图",
        description: "用于统计卡片与表格的紧凑内嵌走势，带变化徽章与可选数值读数。",
        file: "components/charts/sparkline.tsx",
        usageFile: "components/previews/charts/sparkline.usage.tsx",
        badge: "new",
        launchedAt: "2026-10-27",
        keywords: ["sparkline", "sparkline chart", "mini chart", "inline chart", "trend line"],
      },
      {
        slug: "sankey-chart",
        name: "桑基图",
        description: "阶段之间的加权流量，随数据描绘生成并一起形变。",
        file: "components/charts/sankey-chart.tsx",
        usageFile: "components/previews/charts/sankey-chart.usage.tsx",
        badge: "new",
        launchedAt: "2026-10-22",
        keywords: ["sankey chart", "sankey diagram", "flow chart", "income statement chart", "alluvial chart"],
      },
      {
        slug: "treemap",
        name: "矩形树图",
        description: "随数据一起形变的比例矩形块，带数值与占比工具提示。",
        file: "components/charts/treemap.tsx",
        usageFile: "components/previews/charts/treemap.usage.tsx",
        badge: "new",
        launchedAt: "2026-10-07",
        keywords: [
          "treemap",
          "tree map chart",
          "hierarchical chart",
          "portfolio allocation",
          "proportional tiles",
        ],
      },
      {
        slug: "candlestick-chart",
        name: "K线图",
        description: "实时 OHLC 蜡烛，带成交量、最新价线与十字线读数。",
        file: "components/charts/candlestick-chart.tsx",
        usageFile: "components/previews/charts/candlestick-chart.usage.tsx",
        badge: "new",
        launchedAt: "2026-10-12",
        keywords: ["candlestick chart", "ohlc chart", "trading chart", "price chart", "crypto chart"],
      },
      {
        slug: "donut-chart",
        name: "环形图",
        description: "圆角占比扇区，配联动中心读数与图例。",
        file: "components/charts/donut-chart.tsx",
        usageFile: "components/previews/charts/donut-chart.usage.tsx",
        badge: "new",
        launchedAt: "2026-10-12",
        keywords: ["donut chart", "pie chart", "share chart", "allocation chart", "breakdown chart"],
      },
      {
        slug: "volume-profile",
        name: "成交量分布",
        description: "按价格分布的动画成交量，带控盘点（POC）与价值区高亮。",
        file: "components/charts/volume-profile.tsx",
        usageFile: "components/previews/charts/volume-profile.usage.tsx",
        badge: "new",
        launchedAt: "2026-10-07",
        keywords: ["volume profile", "volume by price", "point of control", "value area", "trading chart"],
      },
      {
        slug: "status-bar",
        name: "状态条",
        description: "带圆角条形与周期工具提示的动画状态历史。",
        file: "components/charts/status-bar.tsx",
        usageFile: "components/previews/charts/status-bar.usage.tsx",
        badge: "new",
        launchedAt: "2026-10-07",
        keywords: ["status bars", "uptime chart", "status history", "service status", "status timeline"],
      },
      {
        slug: "composition-chart",
        name: "构成图",
        description: "堆叠柱状与面积占比，带周期工具提示与紧凑交互图例。",
        file: "components/charts/composition-chart.tsx",
        usageFile: "components/previews/charts/composition-chart.usage.tsx",
        badge: "new",
        launchedAt: "2026-09-25",
        keywords: ["stacked bar chart", "stacked area chart", "composition", "market share", "percentage chart"],
      },
      {
        slug: "funnel-chart",
        name: "漏斗图",
        description: "纵向与横向漏斗，带曲线阶段与动画数字工具提示。",
        file: "components/charts/funnel-chart.tsx",
        usageFile: "components/previews/charts/funnel-chart.usage.tsx",
        badge: "new",
        launchedAt: "2026-09-20",
        keywords: ["funnel chart", "conversion funnel", "drop off", "sales funnel"],
      },
      {
        slug: "liquidity-heatmap",
        name: "流动性热力图",
        description: "跨价格与时间的动画流动性条带，带价格轨迹与深度工具提示。",
        file: "components/charts/liquidity-heatmap.tsx",
        usageFile: "components/previews/charts/liquidity-heatmap.usage.tsx",
        badge: "new",
        launchedAt: "2026-09-20",
        keywords: ["liquidity heatmap", "market depth", "order book heatmap", "liquidity chart"],
      },
      {
        slug: "bump-chart",
        name: "排名图",
        description: "动画排名走势，带曲线路径、可交互的排名圆点与工具提示。",
        file: "components/charts/bump-chart.tsx",
        usageFile: "components/previews/charts/bump-chart.usage.tsx",
        badge: "new",
        launchedAt: "2026-09-20",
        keywords: ["bump chart", "ranking chart", "leaderboard", "rank history", "rankings over time"],
      },
      {
        slug: "order-book",
        name: "订单簿",
        description:
          "动画订单簿，带买卖盘深度、价差与成交量平衡。",
        file: "components/charts/order-book.tsx",
        usageFile: "components/previews/charts/order-book.usage.tsx",
        badge: "new",
        launchedAt: "2026-09-20",
        keywords: ["order book", "market depth", "bid ask", "trading chart react", "depth ladder"],
      },
      {
        slug: "heat-calendar",
        name: "热力日历",
        description:
          "组合式活动日历，含 Grid、Legend 与 Tooltip 部件、受控范围选择与 UTC 日历日期。提供每周强度数据即可可视化。",
        file: "components/charts/heat-calendar.tsx",
        badge: "new",
        launchedAt: "2026-09-11",
        credit: {
          name: "热力日历",
          url: "https://ssych.com",
          avatar: "https://github.com/savvasicevs.png?size=112",
        },
        keywords: [
          "heatmap react",
          "activity calendar",
          "contribution graph",
          "github contribution chart",
          "heat map component",
        ],
      },
      {
        slug: "returns-calendar",
        name: "收益日历",
        description:
          "组合式月度收益日历，含 Grid 与 Tooltip 部件、受控的月份/年份选择与复利累计总额。提供你自己的年份与收益数据即可可视化。",
        file: "components/charts/returns-calendar.tsx",
        badge: "new",
        launchedAt: "2026-09-11",
        credit: {
          name: "收益日历",
          url: "https://ssych.com",
          avatar: "https://github.com/savvasicevs.png?size=112",
        },
        keywords: [
          "monthly returns heatmap",
          "returns calendar",
          "performance grid",
          "portfolio returns chart",
          "finance heatmap react",
        ],
      },
      {
        slug: "price-target-fan",
        name: "价格目标扇形图",
        description:
          "组合式价格目标图表，含 Header、Plot、SVG、Axes、History、Targets、Now、Cursor 与 Tooltip 部件。提供带日期的价格历史与目标数据即可。",
        file: "components/charts/price-target-fan.tsx",
        badge: "new",
        launchedAt: "2026-09-11",
        credit: {
          name: "价格目标扇形图",
          url: "https://ssych.com",
          avatar: "https://github.com/savvasicevs.png?size=112",
        },
        keywords: [
          "price target chart",
          "analyst targets",
          "forecast fan chart",
          "svg line chart react",
          "stock projection chart",
        ],
      },
    ],
  },
  {
    slug: "agents",
    name: "AI 组件",
    description:
      "面向 agent 推理、进度展示、工具活动与对话式 AI 界面的 React 动效组件。",
    components: [
      {
        slug: "voice-orb",
        name: "语音光球",
        description: "呼吸感的液态语音可视化，带流动高光、自定义色料与柔和的语音响应轮廓。接受归一化音量、MotionValue 或调用方持有的音频分析器。",
        file: "components/agents/voice-orb.tsx",
        badge: "new",
        launchedAt: "2026-10-04",
        keywords: ["voice orb", "audio visualization", "liquid orb", "voice activity", "webgl sphere"],
      },
      {
        slug: "message-bubble",
        name: "消息气泡",
        guide: agentGuides["message-bubble"],
        description:
          "专注的对话表面：多种视觉基调、独立对齐、消息分组、可展开内容，并支持可交互的链接或按钮。",
        file: "components/agents/message-bubble.tsx",
        badge: "new",
        launchedAt: "2026-08-03",
        keywords: [
          "message bubble React",
          "chat bubble component",
          "AI conversation bubble",
          "expandable chat message",
          "interactive chat suggestion",
          "grouped message bubbles",
        ],
        examples: [
          {
            slug: "surfaces",
            name: "动画表面",
            description:
              "一段交互对话：新发出的用户行以一次弹跳登场，助手则在稳定的行内流式输出。",
            file: "components/agents/message-bubble.tsx",
            previewKey: "agents/message-bubble",
            previewFile:
              "components/previews/agents/message-bubble.preview.tsx",
            usageFile:
              "components/previews/agents/message-bubble.usage.tsx",
          },
          {
            slug: "avatars",
            name: "带头像",
            description:
              "渐进到达的消息，带发送者头像、元数据、送达状态与分组后续对齐。",
            file: "components/agents/message-bubble.tsx",
            previewKey: "agents/message-bubble-avatars",
            previewFile:
              "components/previews/agents/message-bubble-avatars.preview.tsx",
          },
          {
            slug: "show-more",
            name: "显示更多",
            description:
              "一条较长的助手消息，带紧凑的行数截断预览与动画展开控件。",
            file: "components/agents/message-bubble.tsx",
            previewKey: "agents/message-bubble-collapsible",
            previewFile:
              "components/previews/agents/message-bubble-collapsible.preview.tsx",
          },
        ],
      },
      {
        slug: "message",
        name: "消息",
        guide: agentGuides.message,
        description:
          "组合式对话原语：消息行、分组气泡、头像、元数据、实时标记，以及新发出行的仅挂载时尾缘弹跳。",
        file: "components/agents/message.tsx",
        badge: "new",
        launchedAt: "2026-08-03",
        keywords: [
          "AI message React",
          "chat message component",
          "streaming assistant message",
          "LLM conversation UI",
          "agent chat bubbles",
          "AI chat interface React",
        ],
        usageFile: "components/previews/agents/message.usage.tsx",
      },
      {
        slug: "message-scroller",
        name: "消息滚动器",
        guide: agentGuides["message-scroller"],
        description:
          "感知阅读者的对话视口：在实时边缘跟随流式输出，读者主动滚动时释放控制权。",
        file: "components/agents/message-scroller.tsx",
        usageFile:
          "components/previews/agents/message-scroller.usage.tsx",
        badge: "new",
        launchedAt: "2026-08-03",
        keywords: [
          "message scroller React",
          "AI chat autoscroll",
          "streaming conversation viewport",
          "follow output chat UI",
          "LLM message scroll",
          "accessible chat transcript",
        ],
      },
      {
        slug: "prompt-input",
        name: "提示输入框",
        guide: agentGuides["prompt-input"],
        description:
          "自动增高的 agent 输入composer，带提示操作菜单、模型选择、键盘提交，以及动画化的发送与停止状态。",
        file: "components/agents/prompt-input.tsx",
        badge: "new",
        launchedAt: "2026-08-03",
        keywords: [
          "AI prompt input React",
          "model selector dropdown",
          "chat composer component",
          "agent input UI",
          "AI textarea React",
          "LLM model picker",
        ],
      },
      {
        slug: "todo-list",
        name: "任务清单",
        guide: agentGuides["todo-list"],
        description:
          "可折叠的 agent 任务计划，带形变状态标记、完成计数、紧凑元数据与流畅的列表更新。",
        file: "components/agents/todo-list.tsx",
        badge: "new",
        launchedAt: "2026-08-03",
        keywords: [
          "AI agent todo list React",
          "agent task progress UI",
          "LLM task plan component",
          "AI checklist React",
          "streaming todo list",
          "agent workflow status",
        ],
      },
      {
        slug: "code-block",
        name: "代码块",
        guide: agentGuides["code-block"],
        description:
          "语法高亮的代码表面：流式更新稳定、可选行号与聚焦行、平滑跟随与复制反馈。",
        file: "components/agents/code-block.tsx",
        badge: "new",
        launchedAt: "2026-08-03",
        keywords: [
          "AI code block React",
          "streaming code component",
          "syntax highlighted code block",
          "LLM code response UI",
          "agent generated code",
          "Shiki React code block",
        ],
      },
      {
        slug: "approval-card",
        name: "审批卡片",
        guide: agentGuides["approval-card"],
        description:
          "人机协同决策表面，覆盖审批、单选/多选问题、自定义回复与多步审阅流程。",
        file: "components/agents/approval-card/index.tsx",
        extraFiles: ["components/agents/approval-card/types.ts"],
        badge: "new",
        launchedAt: "2026-08-03",
        keywords: [
          "AI approval card React",
          "human in the loop UI",
          "agent clarification question",
          "AI multiple choice prompt",
          "approve agent decision",
          "agent review workflow",
        ],
        examples: [
          {
            slug: "questions",
            name: "问题",
            description:
              "引导用户完成单选、多选与自由输入问题，然后将完成的答复返回给 agent。",
            file: "components/agents/approval-card/index.tsx",
            previewKey: "agents/approval-card-question",
            previewFile:
              "components/previews/agents/approval-card-question.preview.tsx",
          },
          {
            slug: "review",
            name: "审阅与批准",
            description:
              "暂停 agent 工作流以等待批准、修改或拒绝，随后折叠为已记录的决定。",
            file: "components/agents/approval-card/index.tsx",
            previewKey: "agents/approval-card-review",
            previewFile:
              "components/previews/agents/approval-card-review.preview.tsx",
          },
        ],
      },
      {
        slug: "file-diff",
        name: "文件差异",
        guide: agentGuides["file-diff"],
        description:
          "语法高亮的文件变更披露：渐进式行渲染、行号、实时变更计数、平滑跟随与完成后折叠。",
        file: "components/agents/file-diff.tsx",
        badge: "new",
        launchedAt: "2026-08-03",
        keywords: [
          "AI file diff React",
          "agent code changes UI",
          "streaming diff component",
          "file edit result",
          "code additions deletions",
        ],
      },
      {
        slug: "tool-result",
        name: "工具结果",
        guide: agentGuides["tool-result"],
        description:
          "轻量执行披露组件，用于语法高亮的终端输出与请求响应，完成后折叠为紧凑状态。",
        file: "components/agents/tool-result.tsx",
        badge: "new",
        launchedAt: "2026-08-03",
        keywords: [
          "AI tool result React",
          "agent terminal output UI",
          "streaming command result",
          "agent API response",
          "tool execution status",
        ],
        examples: [
          {
            slug: "terminal-output",
            name: "终端输出",
            description:
              "将命令输出流入有界视口，跟随新行输出，完成后折叠为本次运行的摘要。",
            file: "components/agents/tool-result.tsx",
            previewKey: "agents/tool-result-terminal",
            previewFile:
              "components/previews/agents/tool-result-terminal.preview.tsx",
          },
          {
            slug: "request-result",
            name: "请求结果",
            description:
              "展示进行中的请求及其高亮响应载荷，带重试与复制操作。",
            file: "components/agents/tool-result.tsx",
            previewKey: "agents/tool-result-request",
            previewFile:
              "components/previews/agents/tool-result-request.preview.tsx",
          },
        ],
      },
      {
        slug: "streaming-response",
        name: "流式回复",
        guide: agentGuides["streaming-response"],
        description:
          "稳定的回复表面：完成后的操作按钮、渲染内容与可展开的来源摘要。",
        file: "components/agents/streaming-response.tsx",
        badge: "new",
        launchedAt: "2026-08-03",
        keywords: [
          "AI streaming response React",
          "LLM token stream UI",
          "chat response actions",
          "AI response sources",
          "AI answer component",
          "streaming text React",
        ],
      },
      {
        slug: "image-generation",
        name: "图片生成",
        guide: agentGuides["image-generation"],
        description:
          "稳定的生成图片表面：从排队、渐进精化到完成，全程无布局位移。",
        file: "components/agents/image-generation.tsx",
        badge: "new",
        launchedAt: "2026-08-03",
        keywords: [
          "AI image generation React",
          "generated image loading UI",
          "AI image progress component",
          "image generation animation",
          "text to image interface",
          "AI media result",
        ],
      },
      {
        slug: "tool-approval",
        name: "工具审批",
        guide: agentGuides["tool-approval"],
        description:
          "人机协同的权限卡片：查看工具详情、允许一次、始终允许或拒绝执行。",
        file: "components/agents/tool-approval.tsx",
        badge: "new",
        launchedAt: "2026-08-03",
        keywords: [
          "AI tool approval UI",
          "agent permission component",
          "human in the loop React",
          "approve agent action",
          "AI tool confirmation",
        ],
      },
      {
        slug: "citations",
        name: "引用标注",
        guide: agentGuides.citations,
        description:
          "内联引用标记与可折叠、渐进渲染的参考文献集合搭配，用于有据可依的 agent 回复。",
        file: "components/agents/citations.tsx",
        badge: "new",
        launchedAt: "2026-08-03",
        keywords: [
          "AI citations React",
          "LLM citations component",
          "chat citation list",
          "RAG citation UI",
          "AI grounded response",
        ],
      },
      {
        slug: "agent-activity",
        name: "Agent 动态",
        guide: agentGuides["agent-activity"],
        description:
          "统一的自适应动态流：推理、搜索、工具调用、结构化执行轨迹，或按时间顺序混合呈现。",
        file: "components/agents/agent-activity/index.tsx",
        badge: "new",
        launchedAt: "2026-08-03",
        keywords: [
          "AI agent activity component",
          "agent tool calls UI",
          "AI search results React",
          "agent reasoning timeline",
          "mixed agent activity stream",
          "agent execution trace UI",
          "collapsible AI activity",
        ],
        examples: [
          {
            slug: "streaming-text",
            name: "流式文本",
            description:
              "将自由格式的推理文本流入有界视口，完整日志保留在定时展开的披露面板之后。",
            file: "components/agents/agent-activity/index.tsx",
            previewKey: "agents/agent-activity-text",
            previewFile:
              "components/previews/agents/agent-activity-text.preview.tsx",
          },
          {
            slug: "reasoning-steps",
            name: "推理步骤",
            description:
              "展示已完成、进行中与待处理的推理步骤，可带尾部元数据。",
            file: "components/agents/agent-activity/index.tsx",
            previewKey: "agents/agent-activity-steps",
            previewFile:
              "components/previews/agents/agent-activity-steps.preview.tsx",
          },
          {
            slug: "web-search",
            name: "网页搜索",
            description:
              "展示搜索查询、渐进渲染的结果行与溢出计数。",
            file: "components/agents/agent-activity/index.tsx",
            previewKey: "agents/agent-activity-search",
            previewFile:
              "components/previews/agents/agent-activity-search.preview.tsx",
          },
          {
            slug: "tool-calls",
            name: "工具调用",
            description:
              "汇总读取、编辑与运行事件，目标以等宽字体呈现，可选行变更计数。",
            file: "components/agents/agent-activity/index.tsx",
            previewKey: "agents/agent-activity-tools",
            previewFile:
              "components/previews/agents/agent-activity-tools.preview.tsx",
          },
          {
            slug: "mixed-activity",
            name: "混合动态",
            description:
              "在一次按时间顺序的运行中流入推理、搜索与工具事件，视口平滑跟随新工作。",
            file: "components/agents/agent-activity/index.tsx",
            previewKey: "agents/agent-activity-mixed",
            previewFile:
              "components/previews/agents/agent-activity.preview.tsx",
          },
          {
            slug: "agent-trace",
            name: "Agent 轨迹",
            description:
              "将消息与结构化动作流入紧凑的执行台账，完成后按工具调用与消息数量汇总本次运行。",
            file: "components/agents/agent-activity/index.tsx",
            previewKey: "agents/agent-trace",
            previewFile: "components/previews/agents/agent-trace.preview.tsx",
          },
        ],
      },
      {
        slug: "loading-states",
        name: "Agent 加载状态",
        guide: agentGuides["loading-states"],
        description:
          "为 AI 界面准备的三种讲究的加载状态：微光状态文字、实时 agent 进度与循环推理短语。",
        file: "components/agents/loading-states/index.ts",
        extraFiles: [
          "components/agents/loading-states/thinking-shimmer.tsx",
          "components/agents/loading-states/agent-progress.tsx",
          "components/agents/loading-states/reasoning-text.tsx",
        ],
        badge: "new",
        launchedAt: "2026-08-03",
        keywords: [
          "AI agent loading state",
          "agent thinking animation",
          "Claude thinking animation",
          "AI reasoning indicator",
          "LLM loading component",
          "chatbot thinking indicator",
        ],
        examples: [
          {
            slug: "reasoning-text",
            name: "推理文字",
            description:
              "微光推理文案，带 ASCII 加载器与级联、短语替换或逐字乱序过渡。",
            badge: "new",
            launchedAt: "2026-08-03",
            installSlug: "reasoning-text",
            file: "components/agents/loading-states/reasoning-text.tsx",
            previewKey: "agents/reasoning-text",
            previewFile:
              "components/previews/agents/reasoning-text.preview.tsx",
          },
          {
            slug: "thinking-shimmer",
            name: "思考微光",
            description:
              "安静的微光效果，在工作继续的同时保持 agent 当前状态可读。",
            badge: "new",
            launchedAt: "2026-08-03",
            installSlug: "thinking-shimmer",
            file: "components/agents/loading-states/thinking-shimmer.tsx",
            previewKey: "agents/thinking-shimmer",
            previewFile:
              "components/previews/agents/thinking-shimmer.preview.tsx",
          },
          {
            slug: "agent-progress",
            name: "Agent 进度",
            description:
              "紧凑的活动符号、动作动词与实时等宽计时器，适合较长时间的 agent 工作。",
            badge: "new",
            launchedAt: "2026-08-03",
            installSlug: "agent-progress",
            file: "components/agents/loading-states/agent-progress.tsx",
            previewKey: "agents/agent-progress",
            previewFile:
              "components/previews/agents/agent-progress.preview.tsx",
          },
        ],
      },
      {
        slug: "ai-sidebar",
        name: "AI 侧边栏",
        guide: agentGuides["ai-sidebar"],
        description:
          "可折叠的 AI 工作区侧边栏，管理文件夹、项目、文件与书签：键盘导航、乐观移动、内联重命名与仅溢出时跑马灯标签。",
        file: "components/agents/ai-sidebar.tsx",
        usageFile: "components/previews/agents/ai-sidebar.usage.tsx",
        badge: "new",
        launchedAt: "2026-08-03",
        keywords: [
          "AI sidebar React",
          "agent workspace sidebar",
          "draggable resource tree",
          "project file sidebar",
          "collapsible AI navigation",
          "folder tree React",
        ],
      },
      {
        slug: "chat-app",
        name: "聊天应用",
        description:
          "完整的 agent 对话工作区，组合导航、消息、流式输出、计划、审批、工具、代码、diff、生成媒体、来源与提示输入。",
        file: "components/agents/chat-app.tsx",
        usageFile:
          "components/previews/agents/chat-app-usage.tsx",
        extraFiles: [
          "components/agents/agent-activity/index.tsx",
          "components/agents/ai-sidebar.tsx",
          "components/agents/approval-card/index.tsx",
          "components/agents/code-block.tsx",
          "components/agents/file-diff.tsx",
          "components/agents/image-generation.tsx",
          "components/agents/loading-states/thinking-shimmer.tsx",
          "components/agents/message.tsx",
          "components/agents/message-bubble.tsx",
          "components/agents/message-scroller.tsx",
          "components/agents/prompt-input.tsx",
          "components/agents/streaming-response.tsx",
          "components/agents/todo-list.tsx",
          "components/agents/tool-approval.tsx",
          "components/agents/tool-result.tsx",
        ],
        launchedAt: "2026-08-03",
        keywords: [
          "AI chat app React",
          "agent workspace example",
          "complete AI chat interface",
          "AI SDK compatible chat UI",
          "agent conversation layout",
          "LLM chat app component",
        ],
      },
    ],
  },
  {
    slug: "blocks",
    name: "产品块",
    description:
      "面向产品场景的 React 动效 UI 块，基于 Motion 与 Tailwind CSS 构建，以可定制的复制即用源码提供。",
    components: [
      {
        slug: "infinite-masonry",
        name: "无限瀑布流",
        description:
          "响应式虚拟化瀑布流：测量可变高度卡片，并在用户接近末尾时自动加载更多数据。",
        file: "components/motion/infinite-masonry.tsx",
        badge: "new",
        launchedAt: "2026-07-15",
        keywords: [
          "react masonry",
          "infinite scroll masonry",
          "virtualized masonry",
          "masonry grid react",
          "infinite gallery",
        ],
      },
      {
        slug: "notification-stack",
        name: "通知堆栈",
        description:
          "紧凑的通知卡片：悬停、聚焦或点按时从堆叠摘要弹开为可读列表。",
        file: "components/motion/notification-stack.tsx",
        badge: "new",
        launchedAt: "2026-07-14",
        keywords: [
          "notification stack react",
          "hover notification cards",
          "animated notification list",
          "stacked cards react",
          "notification center component",
        ],
      },
      {
        slug: "project-folder",
        name: "项目文件夹",
        description:
          "可交互的项目文件夹：悬停或聚焦时展开文件扇面，点击展开为焦点管理的浮层，关闭时按完整路径收回。",
        file: "components/motion/project-folder.tsx",
        badge: "new",
        launchedAt: "2026-08-15",
        keywords: [
          "react folder card",
          "animated project folder",
          "file preview component",
          "folder hover animation",
          "project card react",
        ],
      },
      {
        slug: "card-folder",
        name: "卡片钱包",
        description:
          "收进缝线钱包口袋的横版卡片：钱包向底部接缝压缩时卡片向前抬起，开合与卡片出袋均可受控。",
        file: "components/motion/card-folder.tsx",
        badge: "new",
        launchedAt: "2026-09-04",
        keywords: [
          "react card folder",
          "animated card sleeve",
          "payment card component",
          "credit card folder",
          "interactive wallet card",
          "card purse component",
        ],
      },
      {
        slug: "knockout-bracket",
        name: "赛程",
        description: "两种风格的动画淘汰赛赛程：逐轮翻页的淘汰赛对阵图，以及把同一棵对阵树环绕冠军铺开的环形视图。两者由同一份数据驱动。",
        file: "components/motion/knockout-bracket.tsx",
        badge: "new",
        launchedAt: "2026-07-27",
        extraFiles: ["components/motion/knockout-wheel.tsx"],
        examples: [
          {
            slug: "knockout-wheel",
            name: "淘汰赛环",
            description:
              "以放射方式绘制的淘汰赛：冠军居于中心，每轮是一圈更靠外的环，球队本身构成外缘。节点逐环弹入，悬停某个节点会隔离出该队的夺冠路线。",
            badge: "new",
            launchedAt: "2026-07-27",
            installSlug: "knockout-wheel",
            file: "components/motion/knockout-wheel.tsx",
            previewKey: "blocks/knockout-wheel",
            previewFile: "components/previews/blocks/knockout-wheel.preview.tsx",
          },
          {
            slug: "knockout-bracket",
            name: "淘汰赛对阵图",
            description:
              "一次翻看一轮。最左侧一轮按固定节奏堆叠，之后每轮在其两场预选赛之间居中，卡片、肘形连接线与冠军路径在轮间动画过渡。",
            installSlug: "knockout-bracket",
            file: "components/motion/knockout-bracket.tsx",
            previewKey: "blocks/knockout-bracket",
            previewFile:
              "components/previews/blocks/knockout-bracket.preview.tsx",
          },
        ],
        keywords: [
          "tournament bracket react",
          "knockout bracket component",
          "world cup bracket react",
          "single elimination bracket",
          "playoff bracket react",
          "sports bracket animation",
        ],
      },
      {
        slug: "availability-scheduler",
        name: "空闲时间安排",
        description: "每周空闲时间编辑器：每一天在可用与不可用之间以共享布局 spring 切换，时间段以 blur 滑动增删，时间从自带的可滚动下拉中选择，另可一键把某天的时间克隆到选中日或每一天。",
        file: "components/motion/availability-scheduler/index.tsx",
        badge: "new",
        launchedAt: "2026-07-10",
        keywords: [
          "availability scheduler react",
          "weekly hours picker react",
          "working hours component",
          "cal.com availability component",
          "time range picker react",
          "business hours editor",
        ],
      },
      {
        slug: "swap",
        name: "跨链兑换",
        description: "跨链兑换组件，带链与代币选择器、形变视图、动画翻转与报价。",
        file: "components/motion/swap.tsx",
      },
      {
        slug: "dynamic-island",
        name: "灵动岛",
        description: "iOS 风格的灵动岛胶囊，在实时活动视图之间形变，带弹性的外壳缩放与 blur 交叉淡化。",
        file: "components/motion/dynamic-island.tsx",
      },
      {
        slug: "command-palette",
        name: "命令面板",
        description: "⌘K 命令面板，带模糊过滤、spring 动画的激活行与玻璃拟态表面。",
        file: "components/motion/command-palette.tsx",
      },
      {
        slug: "morphing-search",
        name: "形变搜索",
        description:
          "两种搜索模式：形变搜索框（点击或快捷键打开，展开为玻璃质感的搜索结果表面，关闭后回到原壳体），以及停靠的胶囊搜索条（聚焦时弹性变宽，从自身边缘展开最近搜索面板，搜索词变为可移除的 chips）。",
        file: "components/motion/morphing-search.tsx",
        badge: "new",
        launchedAt: "2026-10-11",
        examples: [
          {
            slug: "chips",
            name: "标签搜索",
            description:
              "停靠的搜索条：聚焦时弹性变宽，并从自身边缘展开最近搜索面板。搜索词变为可移除的 chips，搜索条随之变宽。",
            badge: "new",
            launchedAt: "2026-10-11",
            installSlug: "morphing-search-chips",
            file: "components/motion/morphing-search-chips.tsx",
            previewKey: "blocks/morphing-search-chips",
            previewFile: "components/previews/blocks/morphing-search-chips.preview.tsx",
          },
          {
            slug: "overlay",
            name: "形变搜索",
            description:
              "搜索框或紧凑图标在点击或键盘快捷键时形变为玻璃质感的搜索结果表面。",
            installSlug: "morphing-search",
            file: "components/motion/morphing-search.tsx",
            previewKey: "blocks/morphing-search",
            previewFile: "components/previews/blocks/morphing-search.preview.tsx",
          },
        ],
        keywords: [
          "morphing search react",
          "animated search component",
          "search overlay react",
          "keyboard search shortcut",
          "command search ui",
        ],
      },
      {
        slug: "expandable-action-bar",
        name: "可展开操作栏",
        description: "紧凑的图标操作，悬停或聚焦时借助共享布局动效展开为带标签的控件。",
        file: "components/motion/expandable-action-bar.tsx",
      },
      {
        slug: "overflow-actions",
        name: "溢出操作",
        description: "相连的胶囊轨道：主操作常驻，spring 展开后揭示更多控件。",
        file: "components/motion/overflow-actions.tsx",
      },
      {
        slug: "expandable-tabs",
        name: "可展开标签页",
        description: "图标标签栏：激活标签展开为带标签的胶囊，上方面板形变高度并在切换时按方向滑动内容。",
        file: "components/motion/expandable-tabs.tsx",
      },
      {
        slug: "morphing-tabs",
        name: "形变标签页",
        description: "可重排的标签页：选中项生长为白色内容表面，激活形状随标签移动而滑动，房间之间共享形变。",
        file: "components/motion/morphing-tabs.tsx",
        badge: "new",
        launchedAt: "2026-08-06",
        keywords: [
          "reorderable tabs react",
          "drag tabs react",
          "morphing tabs component",
          "animated tab panel",
          "shared layout tabs",
        ],
      },
      {
        slug: "swipeable-list",
        name: "滑动列表",
        description: "移动端风格的列表行，向左或向右滑动即可揭示上下文操作按钮。",
        file: "components/motion/swipeable-list.tsx",
      },
      {
        slug: "file-upload",
        name: "文件上传",
        description:
          "两种文件上传模式：面向混合文件、链接、音频与媒体的附件工作区，以及带重试与移除的进度队列。",
        file: "components/motion/file-upload.tsx",
        extraFiles: ["components/motion/attachment-upload.tsx"],
        badge: "new",
        launchedAt: "2026-07-30",
        examples: [
          {
            slug: "attachment-upload",
            name: "附件上传",
            description:
              "混合附件工作区：带拖放区、错峰排列的文件与图片行、动画上传、成功/失败/重试/移除反馈、共享布局图片预览与音频波形。",
            badge: "new",
            launchedAt: "2026-07-30",
            installSlug: "attachment-upload",
            file: "components/motion/attachment-upload.tsx",
            previewKey: "blocks/attachment-upload",
            previewFile:
              "components/previews/blocks/attachment-upload.preview.tsx",
          },
          {
            slug: "upload-queue",
            name: "上传队列",
            description:
              "拖拽上传队列：带进度的行、上传状态、重试与移除。",
            installSlug: "file-upload",
            file: "components/motion/file-upload.tsx",
            previewKey: "blocks/file-upload",
            previewFile: "components/previews/blocks/file-upload.preview.tsx",
          },
        ],
        keywords: [
          "attachment upload react",
          "file attachment component",
          "mixed media upload",
          "audio attachment waveform",
          "drag and drop attachments",
        ],
      },
      {
        slug: "prediction-market",
        name: "预测市场",
        description: "动画市场列表卡片：带结果的 CTA、概率与收藏，另有买卖两种模式的交易票据与滚动金额输入。",
        file: "components/motion/prediction-market.tsx",
        extraFiles: ["components/motion/prediction-market-card.tsx"],
        badge: "new",
        launchedAt: "2026-09-10",
        examples: [
          {
            slug: "market-cards",
            name: "市场卡片",
            description: "紧凑的市场列表：一致的结果行、动画赔率 CTA、赔付倍数与收藏。赔率 CTA 使用绿/红背景并在成交时滚动。",
            badge: "new",
            launchedAt: "2026-09-10",
            installSlug: "prediction-market-card",
            file: "components/motion/prediction-market-card.tsx",
            previewKey: "blocks/prediction-market-card",
            usageFile: "components/previews/blocks/prediction-market-card.usage.tsx",
            previewFile: "components/previews/blocks/prediction-market-card.preview.tsx",
          },
          {
            slug: "trade-ticket",
            name: "交易票据",
            description: "买入与卖出结果，带滚动金额输入、快速加注 chips 与交易状态。",
            installSlug: "prediction-market",
            file: "components/motion/prediction-market.tsx",
            previewKey: "blocks/prediction-market",
            previewFile: "components/previews/blocks/prediction-market.preview.tsx",
          },
        ],
      },
      {
        slug: "wallet-card",
        name: "钱包卡片",
        description: "钱包总览卡片：账户切换器与搜索从触发器形变展开、级联余额、实时涨跌胶囊与隐私遮罩。",
        file: "components/motion/wallet-card/index.tsx",
        badge: "new",
        launchedAt: "2026-07-03",
        keywords: [
          "wallet card react",
          "web3 wallet component",
          "crypto balance component",
          "account switcher react",
          "chain switcher react",
        ],
      },
      {
        slug: "otp-input",
        name: "一次性验证码输入",
        description: "一次性验证码输入框：滑动的聚焦环、逐格滚入的数字、错误抖动与成功对勾描绘。",
        file: "components/motion/otp-input.tsx",
      },
      {
        slug: "signup-form",
        name: "注册表单",
        description: "组合式注册表单：仅在字段失焦后才标记错误，修正的瞬间即清除；带长度加权的强度指示、密码显示切换与提交状态。",
        file: "components/motion/signup-form.tsx",
        badge: "new",
        launchedAt: "2026-08-08",
        keywords: [
          "react signup form",
          "react registration form component",
          "animated form validation react",
          "password strength meter react",
          "tailwind sign up form",
        ],
      },
      {
        slug: "card-dealer",
        name: "发牌桌",
        description: "牌桌：带背面朝上的牌堆、扇形手牌与弃牌堆。卡片在区域之间沿弧线飞过桌面并在途中翻面，多张牌移动时错峰进行，悬停或聚焦的手牌会抬起并分开相邻的牌。",
        file: "components/motion/card-dealer.tsx",
        badge: "new",
        launchedAt: "2026-10-24",
        keywords: ["card dealer", "card hand", "deal cards animation", "playing cards react", "card fan"],
      },
      {
        slug: "bloom-menu",
        name: "绽放菜单",
        description: "形变展开为菜单的按钮：从中心以虹膜式揭开，网格项沿各方向呈放射状错峰揭示。",
        file: "components/motion/bloom-menu.tsx",
        badge: "new",
        launchedAt: "2026-06-26",
      },
      {
        slug: "feedback-widget",
        name: "反馈组件",
        description: "角落触发器形变展开为反馈弹窗：带消息输入与动画化的发送、成功与重试状态。",
        file: "components/motion/feedback-widget.tsx",
        badge: "new",
        launchedAt: "2026-06-29",
        keywords: [
          "react feedback widget",
          "feedback popover react",
          "in-app feedback component",
          "feedback form animation",
          "react feedback button",
        ],
      },
      {
        slug: "not-found",
        name: "404 / 页面未找到",
        description: "五种风格的动画 404 页面：故障乱序、磁吸数字、光标聚光、扇形卡片堆与打字机终端。",
        file: "components/motion/not-found/index.tsx",
        extraFiles: [
          "components/motion/not-found/shared.tsx",
          "components/motion/not-found/glitch.tsx",
          "components/motion/not-found/magnetic.tsx",
          "components/motion/not-found/spotlight.tsx",
          "components/motion/not-found/stacked.tsx",
          "components/motion/not-found/terminal.tsx",
        ],
        examples: [
          {
            slug: "glitch",
            name: "故障",
            description:
              "数字先在随机字形间乱序跳变，随后落定；悬停时出现彩色分离。",
            installSlug: "not-found-glitch",
            file: "components/motion/not-found/glitch.tsx",
            previewKey: "blocks/not-found-glitch",
            previewFile: "components/previews/blocks/not-found-glitch.preview.tsx",
          },
          {
            slug: "magnetic",
            name: "磁吸",
            description:
              "每个数字经 Magnetic 包装器被光标吸引，离开后弹回原位。",
            installSlug: "not-found-magnetic",
            file: "components/motion/not-found/magnetic.tsx",
            previewKey: "blocks/not-found-magnetic",
            previewFile: "components/previews/blocks/not-found-magnetic.preview.tsx",
          },
          {
            slug: "spotlight",
            name: "聚光",
            description:
              "深色面板中一道光标追踪的聚光灯，把暗淡底稿上的明亮代码揭示出来。",
            installSlug: "not-found-spotlight",
            file: "components/motion/not-found/spotlight.tsx",
            previewKey: "blocks/not-found-spotlight",
            previewFile: "components/previews/blocks/not-found-spotlight.preview.tsx",
          },
          {
            slug: "stacked",
            name: "堆叠",
            description:
              "一张代码卡片压在隐藏的卡片堆上，悬停时以 spring 扇形展开。",
            installSlug: "not-found-stacked",
            file: "components/motion/not-found/stacked.tsx",
            previewKey: "blocks/not-found-stacked",
            previewFile: "components/previews/blocks/not-found-stacked.preview.tsx",
          },
          {
            slug: "terminal",
            name: "终端",
            description:
              "终端窗口键入一条失败的 cd 命令并显示 404 状态，光标闪烁。",
            installSlug: "not-found-terminal",
            file: "components/motion/not-found/terminal.tsx",
            previewKey: "blocks/not-found-terminal",
            previewFile: "components/previews/blocks/not-found-terminal.preview.tsx",
          },
        ],
      },
    ],
  },
];

export function findCategory(slug: string) {
  return registry.find((c) => c.slug === slug);
}

export function findComponent(categorySlug: string, slug: string) {
  return findCategory(categorySlug)?.components.find((c) => c.slug === slug);
}

export function allComponents() {
  return registry.flatMap((c) =>
    c.components.map((comp) => ({ ...comp, category: c }))
  );
}

/** Top-level components and total installable targets (counting variants). */
export const COMPONENT_COUNT = registry.reduce(
  (n, c) => n + c.components.length,
  0,
);

export const INSTALLABLE_COUNT = registry.reduce(
  (n, c) =>
    n +
    c.components.reduce((m, comp) => {
      const variants = (comp.examples ?? []).filter((e) => e.installSlug).length;
      return m + (variants || 1);
    }, 0),
  0,
);
