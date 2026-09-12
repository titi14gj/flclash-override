# FlClash Override

由 Quantumult X 20260912234140 配置转换的 FlClash JavaScript 覆写。

## 导入

先在 FlClash 中添加可用的 Clash/Mihomo 订阅。在该订阅的“更多 → 覆写 → 脚本模式”中新建脚本，使用以下地址导入（或粘贴脚本全文），保存并关联订阅：

https://raw.githubusercontent.com/titi14gj/flclash-override/main/QuantumultX-FlClash.js

应用前预览代理组及规则。各版本菜单可能略有不同；URL 导入后是否自动更新取决于客户端，更新时应重新导入。

## 本次修复

- 地区缩写使用英文字母边界，避免 US 命中 Just/Business/Australia 等名称片段；去掉会误排除地区的宽泛排除表达式。
- 支持国旗、中文、英文地区名称及 HK01/JP01/SG01/KR01/US01 等格式。
- 对 proxies 中的节点显式计算成员，对 proxy-providers 使用相同 filter，并明确指定 use。
- 空地区不填充其他国家节点。没有动态提供器且筛选为空时设为 REJECT；动态提供器空组设置 empty-fallback: REJECT（需客户端核心支持）。
- 新增 QX 的 AppleTV、Shawn 策略；Apple TV 规则使用 AppleTV 策略，不再强制美国。AppleTV 与 Shawn 初始选择 DIRECT，与 QX 静态组第一项一致。
- IPTV 源没有 force-policy，也没有逐条策略，新增“📺 IPTV”组，默认“🍿 国外媒体”，可自行切换。

## 范围与限制

33 个策略组，12,978 条最终规则。24 个远程规则源均下载成功，规则是转换时的静态快照，不会自动抓取上游更新。来源和跳过项见 SOURCES.md。

保留订阅节点及 proxy-providers；替换策略组、规则并设为 rule 模式。规则顺序为排除网段 DIRECT、UDP443 REJECT、本地规则、远程规则、MATCH。排除网段分流并非操作系统路由排除。

DNS 主解析器迁移为 223.5.5.5 / 119.29.29.29 / 114.114.114.114，cloud-nodes.com 定向解析也保留；其余订阅 DNS 字段保留，FlClash 的全局设置可能再次覆写它们。

未迁移 MITM、HTTPS 重写、定时脚本、fallback_udp_policy=direct 和 97 条 User-Agent/URL-REGEX 规则。域名分流不能替代这些能力。未携带原始配置、订阅令牌、节点密码或证书。

地区归类依据节点名称，不是出口 IP 地理定位。跨地区中转名称、服务商品牌恰好包含地区名时可能需要额外定制。♻️ ALL 仍包含所有节点。

## 验证

运行 `node test-override.cjs`。测试覆盖 11 个地区、跨地区反例、动态提供器筛选、空组、策略引用、AppleTV/IPTV 规则及节点保留。

另在本机已有配置的 46 个节点名称上检查：香港 8、日本 5、新加坡 4、韩国 1、美国 5，归类符合名称。实际节点名称和凭据没有上传。

尚未完成目标 FlClash 客户端的核心载入及网络连通性实测；JS 测试不代表节点一定可用。

## 参考

- [Mihomo 代理组参数](https://wiki.metacubex.one/config/proxy-groups/)
- [COMPATIBLE 内置策略](https://wiki.metacubex.one/en/config/proxies/built-in/)

上游规则归各原作者所有；此仓库保留来源，不重新声明其许可。
