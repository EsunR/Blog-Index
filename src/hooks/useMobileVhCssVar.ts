import { onMounted } from "vue";

/**
 * 为移动端设置视口高度的css变量
 */
export function useMobileVhCssVar() {
  const setVhCssVar = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  onMounted(() => {
    setVhCssVar();
    window.addEventListener("resize", setVhCssVar);
  });
}

export default useMobileVhCssVar;
