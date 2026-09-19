# 上游来源与未迁移条目

除 IPTV 外，各源规则数为去重前计数，属于上次 QX 转换的静态快照。Gary 与 Cathy 改为动态规则提供器：

- [Gary 域名](https://raw.githubusercontent.com/marcuccilli/gary/main/iptv_mihomo_domain.mrs)、[Gary IP](https://raw.githubusercontent.com/marcuccilli/gary/main/iptv_mihomo_ipcidr.mrs)
- [Cathy 域名](https://raw.githubusercontent.com/marcuccilli/Cathy/main/cathy_mihomo_domain.mrs)、[Cathy IP](https://raw.githubusercontent.com/marcuccilli/Cathy/main/cathy_mihomo_ipcidr.mrs)

- [Apple TV](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/QuantumultX/AppleTV/AppleTV.list)：7 条。
- [AI](https://raw.githubusercontent.com/fmz200/wool_scripts/main/Loon/rule/AI.list)：66 条。
- [F1 TV](https://raw.githubusercontent.com/dler-io/Rules/main/Surge/Surge%203/Provider/Media/F1%20TV.list)：8 条。
- [广告拦截合集@奶思](https://raw.githubusercontent.com/fmz200/wool_scripts/main/QuantumultX/filter/filter.list)：2760 条。
- [Microsoft](https://yfamilys.com/rule/Microsoft.list)：670 条。
- [Apple](https://yfamilys.com/rule/Apple.list)：33 条。
- [App Store](https://yfamilys.com/rule/AppStore.list)：2 条。
- [Apple Proxy](https://yfamilys.com/rule/AppleProxy.list)：39 条。
- [Telegram](https://yfamilys.com/rule/Telegram.list)：46 条。
- [Weibo](https://yfamilys.com/rule/Weibo.list)：4 条。
- [Wechat](https://yfamilys.com/rule/WeChat.list)：330 条。
- [Steam](https://yfamilys.com/rule/Steam.list)：54 条。
- [Spotify](https://yfamilys.com/rule/Spotify.list)：29 条。
- [Paypal](https://yfamilys.com/rule/PayPal.list)：247 条。
- [Youtube](https://yfamilys.com/rule/YouTube.list)：183 条。
- [Netflix](https://yfamilys.com/rule/Netflix.list)：1157 条。
- [Bilibili](https://yfamilys.com/rule/BiliBili.list)：129 条。
- [ChinaMedia](https://yfamilys.com/rule/ChinaMedia.list)：411 条。
- [ProxyMedia](https://yfamilys.com/rule/ProxyMedia.list)：371 条。
- [Twitch](https://yfamilys.com/rule/Twitch.list)：20 条。
- [Google](https://yfamilys.com/rule/Google.list)：700 条。
- [Proxy](https://yfamilys.com/rule/Proxy.list)：123 条。
- [ASN-CN](https://yfamilys.com/rule/ASN-CN.list)：5231 条。

## 不支持的条目（含重复）

```text
USER-AGENT,AppleTV*,AppleTV
USER-AGENT,com.apple.tv*,AppleTV
USER-AGENT,AVOS*, reject
USER-AGENT,Microsoft*
USER-AGENT,OneDrive*
USER-AGENT,OneDriveiOSApp*
USER-AGENT,*FindMyiPhone?
USER-AGENT,*Music?
USER-AGENT,*WeatherFoundation*
USER-AGENT,*com.apple.Maps?
USER-AGENT,*com.apple.mobileme.fmip1
USER-AGENT,FMDClient*
USER-AGENT,FMFD*
USER-AGENT,FindMyFriends*
USER-AGENT,FindMyiPhone*
USER-AGENT,Maps*
USER-AGENT,Wallet*
USER-AGENT,com.apple.Maps
USER-AGENT,com.apple.appstored*
USER-AGENT,fmflocatord*
USER-AGENT,geod*
USER-AGENT,locationd*
USER-AGENT,passd*
USER-AGENT,Music*
USER-AGENT,AppleNews*
USER-AGENT,AppleTV*
USER-AGENT,com.apple.news*
USER-AGENT,com.apple.trustd*
USER-AGENT,com.apple.tv*
USER-AGENT,AppleNews*
USER-AGENT,AppleTV*
USER-AGENT,com.apple.news*
USER-AGENT,com.apple.trustd*
USER-AGENT,com.apple.tv*
USER-AGENT,MicroMessenger*
USER-AGENT,WeChat*
USER-AGENT,Spotify*
USER-AGENT,PayPal*
USER-AGENT,*YouTubeMusic*
USER-AGENT,*com.google.ios.youtubemusic*
USER-AGENT,*youtube*
USER-AGENT,YouTube*
USER-AGENT,YouTubeMusic*
USER-AGENT,com.google.ios.youtube*
USER-AGENT,com.google.ios.youtubemusic*
USER-AGENT,Argo*
USER-AGENT,*bili*
USER-AGENT,Bilibili*
USER-AGENT,bili*
USER-AGENT,bili-inter*
USER-AGENT,*bili*
USER-AGENT,Bilibili*
USER-AGENT,bili*
USER-AGENT,bili-inter*
USER-AGENT,%E4%BC%98%E9%85%B7*
USER-AGENT,%E5%92%AA%E5%92%95%E8%A7%86%E9%A2%91
USER-AGENT,%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90
USER-AGENT,%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90*
USER-AGENT,%E9%85%B7%E6%88%91%E9%9F%B3%E4%B9%90*
USER-AGENT,*QIYI*
USER-AGENT,AcFun*
USER-AGENT,DomesticMedia*
USER-AGENT,MGTV*
USER-AGENT,MOO%E9%9F%B3%E4%B9%90*
USER-AGENT,MOO*
USER-AGENT,MiguVideo*
USER-AGENT,NeteaseMusic*
USER-AGENT,PPStream*
USER-AGENT,QIYI*
USER-AGENT,QQ%E9%9F%B3%E4%B9%90
USER-AGENT,QQ%e9%9f%b3%e4%b9%90*
USER-AGENT,QQMusic*
USER-AGENT,QYPlayer*
USER-AGENT,TencentMidasConnect*
USER-AGENT,YYeTs*
USER-AGENT,Youku*
USER-AGENT,baiduyinyue
USER-AGENT,bilibili*
USER-AGENT,iQiYi*
USER-AGENT,iQiyi*
USER-AGENT,live4iphone*
USER-AGENT,qqlive4iphone*
USER-AGENT,walkman*
USER-AGENT,xiami*
USER-AGENT,youku*
URL-REGEX,^https?:\/\/www\.amazon\.com\/(Amazon-Video|gp\/video)\/
USER-AGENT,%E4%BA%91%E7%AB%AF%E7%A1%AC%E7%9B%98*
USER-AGENT,*com.google.Drive*
USER-AGENT,Google.Drive*
USER-AGENT,Duolingo*
USER-AGENT,OneDrive*
USER-AGENT,PayPal*
USER-AGENT,Roam*
USER-AGENT,WhatsApp*
USER-AGENT,battleroyale*
USER-AGENT,com.apple.trustd*
USER-AGENT,hearthstone*
```
