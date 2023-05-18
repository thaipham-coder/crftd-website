// @ts-nocheck

'use client'

import useIsomorphicLayoutEffect from "@/components/helpers/isomorphicEffect";
import { useRef } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

// not necessary after GSAP 3.11.5
(function () {
    let proto = gsap.core.Tween.prototype,
        progress = proto.progress;
    proto.progress = function (value, suppressEvents) {
        return arguments.length
            ? progress.call(this, value || 0, suppressEvents)
            : progress.call(this);
    };
})();

export default function SmoothScroller({
  children,
}: {
  children: React.ReactNode
}) {
    const smoother = useRef<any>(null);
    const ctx = useRef<any>(null);
    const pathname = usePathname();

    useIsomorphicLayoutEffect(() => {
        if (ScrollTrigger.isTouch) return

        let existingTriggers = ScrollTrigger.getAll();
        existingTriggers.forEach((t) => t.revert(true, true));

        ctx.current = gsap.context((self) => {
            smoother.current = ScrollSmoother.create({
                smooth: 1,
                effects: true,
            });

            // not necessary after GSAP 3.11.5
            existingTriggers.forEach((t) => {
                t.revert(false, true);
                t.init(t.vars, t.animation);
                let i = self.data.length;
                while (i--) {
                    if (self.data[i] === t) {
                        self.data.splice(i, 1);
                    }
                }
                t.animation &&
                t.animation.vars.immediateRender !== false &&
                t.animation.render(0, true, true);
            });
        });

        return () => ctx.current.revert();
    }, [pathname]);
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}
