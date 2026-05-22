// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";
// @ts-ignore
import "viewerjs/dist/viewer.min.css"; // 引入插件的样式
import imageViewer from "vitepress-plugin-image-viewer";
import { useRoute } from "vitepress";

export default {
  // 扩展默认主题，这样你之前的所有样式和功能都会保留
  extends: DefaultTheme,
  setup() {
    // 获取当前路由，这是插件必需的参数[citation:1]
    const route = useRoute();
    // 初始化图片查看器，它会自动为 .vp-doc 区域内的所有图片启用点击放大功能
    imageViewer(route);
  },
};
