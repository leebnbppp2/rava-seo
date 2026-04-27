# rava-seo

一个极简、中文优先的 VPN SEO 引流页项目。

目标：
- 面向中文浏览器 + 中文 IP 用户
- 用简洁清晰的落地页承接 SEO 流量
- 突出中国网络环境可用、3 天免费试用、4 台设备、不留日志
- 通过按钮把用户导向 Rava 的邀请链接

## 当前页面方向

首页重点卖点：
1. 自研协议，针对中国网络环境穿透力更强
2. 3 天免费试用
3. 一个账号支持 4 台设备
4. 不留日志，保护隐私
5. 支持 Android / iPhone / Windows / Mac

## 本地开发

```bash
npm install
npm run dev
```

## 生产构建

```bash
npm run build
npm run start
```

## SEO 数据接入

支持通过环境变量接入基础 SEO 数据链路：

- `GOOGLE_SITE_VERIFICATION`：Google Search Console 验证码
- `BING_SITE_VERIFICATION`：Bing Webmaster Tools 验证码
- `NEXT_PUBLIC_GA_ID`：GA4 Measurement ID，例如 `G-XXXXXXXXXX`

当前已经接好：
- 根布局自动注入 Google / Bing 站点验证标签
- GA4 脚本按环境变量启用
- Vercel Analytics 已接入
- `/go` 相关 CTA 会发送 `cta_click` 事件到 GA4

本地调试示例：

```bash
export GOOGLE_SITE_VERIFICATION=your_google_code
export BING_SITE_VERIFICATION=your_bing_code
export NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
npm run dev
```

## 当前路由

- `/`：中文引流首页
- `/go`：跳转到主邀请链接
- `/robots.txt`
- `/sitemap.xml`
