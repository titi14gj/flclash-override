# FlClash Override

由 Quantumult X 20260912235850 配置转换的 FlClash JavaScript 覆写。

## 导入

先在 FlClash 中添加可用的 Clash/Mihomo 订阅。在该订阅的“更多 → 覆写 → 脚本模式”中新建脚本，使用以下地址导入（或粘贴脚本全文），保存并关联订阅：

https://raw.githubusercontent.com/titi14gj/flclash-override/main/QuantumultX-FlClash.js

应用前预览代理组及规则。各版本菜单可能略有不同；URL 导入后是否自动更新取决于客户端，更新时应重新导入。

## Anywhere 规则

- Gary IPTV：https://raw.githubusercontent.com/titi14gj/flclash-override/main/anywhere/gary-iptv.arrs
- Cathy IPTV：https://raw.githubusercontent.com/titi14gj/flclash-override/main/anywhere/cathy-iptv.arrs

这两个文件是对应上游仓库在 2026-09-30 提供的 Anywhere `.arrs` 规则镜像：Gary 350 条，Cathy 791 条。它们是当前快照，不会跟随上游自动更新。

## IPTV 分组

- “📺 IPTV Gary”使用 [Gary](https://github.com/marcuccilli/gary) 的域名、IP 两份 Mihomo MRS 规则。
- “📺 IPTV Cathy”使用 [Cathy](https://github.com/marcuccilli/cathy) 的域名、IP 两份 Mihomo MRS 规则。
- 两组默认选择“🍿 国外媒体”，也可选“♻️ ALL”、所有地区节点组、“🚀 策略选择”或 DIRECT。两套规则每 12 小时通过 Mihomo 更新；首次载入需要能访问 GitHub Raw。
- Gary 规则排在 Cathy 前面。同一域名或 IP 如果同时命中两套规则，将使用 Gary 分组。
- 在 FlClash 的代理列表中，所有可手动选择的策略组（含 Gary、Cathy）排在测速及地区节点组之前。

## 地区筛选

- 地区缩写使用英文字母边界，避免 US 命中 Just/Business/Australia 等名称片段；去掉会误排除地区的宽泛排除表达式。
- 支持国旗、中文、英文地区名称及 HK01/JP01/SG01/KR01/US01 等格式。
- 对 proxies 中的节点显式计算成员，对 proxy-providers 使用相同 filter，并明确指定 use。
- 空地区不填充其他国家节点。没有动态提供器且筛选为空时设为 REJECT；动态提供器空组设置 empty-fallback: REJECT（需客户端核心支持）。
- 保留 QX 的 AppleTV 策略，Apple TV 规则使用 AppleTV；AppleTV 初始选择 DIRECT，与 QX 静态组第一项一致。
- 原先内嵌、指向“🍿 国外媒体”的 437 条 Gary IPTV 规则已移除，避免绕过新分组。

## 范围与限制

32 个策略组，12,545 条内嵌规则（含 4 条 IPTV RULE-SET）。原有其他 23 个远程规则源仍是转换时的静态快照；Gary/Cathy 的四份 MRS 规则独立自动更新。来源和跳过项见 SOURCES.md。

保留订阅节点、proxy-providers 和原有 rule-providers；替换策略组、规则，加入四份 IPTV rule-providers，并设为 rule 模式。规则顺序为排除网段 DIRECT、UDP443 REJECT、本地规则、Gary/Cathy IPTV、其他远程规则、MATCH。排除网段分流并非操作系统路由排除。

DNS 主解析器迁移为 223.5.5.5 / 119.29.29.29 / 114.114.114.114，cloud-nodes.com 定向解析也保留；其余订阅 DNS 字段保留，FlClash 的全局设置可能再次覆写它们。

未迁移 MITM、HTTPS 重写、定时脚本、fallback_udp_policy=direct 和 97 条 User-Agent/URL-REGEX 规则。域名分流不能替代这些能力。未携带原始配置、订阅令牌、节点密码或证书。

地区归类依据节点名称，不是出口 IP 地理定位。跨地区中转名称、服务商品牌恰好包含地区名时可能需要额外定制。♻️ ALL 仍包含所有节点。

## 验证

运行 `node test-override.cjs`。测试覆盖 11 个地区、跨地区反例、动态提供器筛选、空组、策略引用、四份 IPTV 规则提供器及节点保留。

另使用 FlClash for oixCloud 当前 `config.yaml` 中的 46 个节点名称执行覆写：香港 8、日本 5、新加坡 4、韩国 1、美国 5，归类符合名称。实际节点名称和凭据没有上传。

尚未完成目标 FlClash 客户端的核心载入及网络连通性实测；JS 测试不代表节点一定可用。

## 参考

- [Mihomo 代理组参数](https://wiki.metacubex.one/config/proxy-groups/)
- [Mihomo 规则提供器参数](https://wiki.metacubex.one/config/rule-providers/)
- [COMPATIBLE 内置策略](https://wiki.metacubex.one/en/config/proxies/built-in/)

上游规则归各原作者所有；此仓库保留来源，不重新声明其许可。
