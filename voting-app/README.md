# Voting App/投票系统

> 注: 参照对象[《React全家桶：前端开发与实例详解》代码资料](https://www.ituring.com.cn/book/2673)

1. 新建项目

```
npm create vite@latest voting-app -- --template react
cd voting-app
```

2. 安装依赖

```
npm install -D tailwindcss postcss autoprefixer sass
```

3. 修改配置

```json
/* jsconfig.json */
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/*": [
                "src/*"
            ],
        }
    }
}
```

```javascript
/* vite.config.js */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

function _resolve(dir) {
  return path.resolve(__dirname, dir);
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": _resolve("src"),
    },
  },
});
```

定义 `@` 及识别

4. 相关说明

>- seed.js 为本地数据集
>- 相关组件通过 index.jsx 统一导出

0. 最终效果

![](https://s2.loli.net/2022/10/05/PhkQuMBb1RsTAJd.png)
