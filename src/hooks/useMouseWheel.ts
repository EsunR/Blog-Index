import { Ref, watch } from "vue";

interface useMouseWheelOptions {
  onWheelUp?: () => void;
  disable: Ref<boolean>;
}

export function useMouseWheel({ onWheelUp, disable }: useMouseWheelOptions) {
  function onMouseWheel(event: WheelEvent) {
    if (event.deltaY < 0) {
      onWheelUp?.();
    }
  }

  watch(
    disable,
    (newVal) => {
      if (newVal) {
        window.removeEventListener("wheel", onMouseWheel);
      } else {
        window.addEventListener("wheel", onMouseWheel);
      }
    },
    {
      immediate: true,
    }
  );
}

export default useMouseWheel;
