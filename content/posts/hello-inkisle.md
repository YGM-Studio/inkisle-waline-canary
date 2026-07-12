---
title: "InkIsle Waline Canary"
date: 2026-07-12
updated: 2026-07-12
summary: "从 npm 正式版本安装，并使用 Waline 验证点赞与留言的独立 InkIsle 验收站。"
tags:
  - InkIsle
  - Canary
category: "Validation"
interactionId: "waline-canary"
published: true
---

这个站点不引用 InkIsle 源码仓库，而是像真实用户一样从 npm 安装指定的正式版本。每次构建都会校验实际安装版本，并通过 GitHub Actions 部署到 GitHub Pages。

## 当前验证范围

- content-only 项目初始化与依赖安装。
- Markdown、多语言、RSS、搜索索引和 `llms.txt` 静态输出。
- GitHub Pages `/inkisle-waline-canary` 子路径。
- personal 主题、明暗模式，以及由 Waline 提供的共享点赞与留言。

## 互动数据

中英文页面使用同一个 `waline-canary` 互动标识。留言保存在独立的 Neon 数据库中，服务端由 Vercel 托管，用于验证 Waline provider 与正式 npm 包的集成行为。
