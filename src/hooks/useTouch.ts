import { isNode } from "@/utils";
import { Ref, watch } from "vue";

interface useTouchOptions {
  onSlideUp?: () => void;
  disable: Ref<boolean>;
}

export function useTouch({ onSlideUp, disable }: useTouchOptions) {
  const touchStart = { x: 0, y: 0, timestamp: 0 };

  function onTouchStart(event: TouchEvent) {
    touchStart.x = event.touches[0].clientX;
    touchStart.y = event.touches[0].clientY;
    touchStart.timestamp = event.timeStamp;
  }

  function onTouchEnd(event: TouchEvent) {
    const touchEnd = {
      x: event.changedTouches[0].clientX,
      y: event.changedTouches[0].clientY,
      timestamp: event.timeStamp,
    };

    const diff = {
      x: touchEnd.x - touchStart.x,
      y: touchEnd.y - touchStart.y,
      timestamp: touchEnd.timestamp - touchStart.timestamp,
    };

    if (diff.y < -100 && diff.timestamp < 1000) {
      onSlideUp?.();
    }
  }

  watch(
    disable,
    (newVal) => {
      if (isNode()) {
        return;
      }
      if (newVal) {
        window.removeEventListener("touchstart", onTouchStart);
        window.removeEventListener("touchend", onTouchEnd);
      } else {
        window.addEventListener("touchstart", onTouchStart);
        window.addEventListener("touchend", onTouchEnd);
      }
    },
    {
      immediate: true,
    }
  );
}

export default useTouch;
