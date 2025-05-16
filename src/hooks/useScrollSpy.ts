import { useEffect, useState } from "react";

export function useScrollSpy(
  sectionIds: string[],
  offset = 0,
  overrideId: string | null = null,
  enableOverride: boolean = false
) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (enableOverride && overrideId) {
      setActiveId(overrideId); // ✅ manual highlight
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        if (visibleSections.length === 0) {
          setActiveId(null); // ✅ nothing in view
        } else {
          const topMost = visibleSections.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top
              ? prev
              : curr
          );
          setActiveId(topMost.target.id);
        }
      },
      {
        rootMargin: `-${offset}px 0px -50% 0px`,
        threshold: 0.1,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset, overrideId, enableOverride]);

  return activeId;
}
