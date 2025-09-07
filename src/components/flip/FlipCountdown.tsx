import FlipThreeDigits from "@/components/flip/FlipThreeDigits";
import FlipTwoDigits from "@/components/flip/FlipTwoDigit";
import { useEffect, useMemo, useRef, useState } from "react";

type DHMS = { d: number; h: number; m: number; s: number };
const clamp = (n: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, n));
function toValidDate(input: Date | string | number): Date | null {
  if (input instanceof Date) return isNaN(input.getTime()) ? null : input;
  const d = new Date(input as any);
  return isNaN(d.getTime()) ? null : d;
}
function secsToDHMS(total: number): DHMS {
  const safe = Number.isFinite(total) ? Math.max(0, Math.floor(total)) : 0;
  let rem = safe;
  const d = Math.floor(rem / 86400);
  rem -= d * 86400;
  const h = Math.floor(rem / 3600);
  rem -= h * 3600;
  const m = Math.floor(rem / 60);
  const s = rem - m * 60;
  return { d, h, m, s };
}

export default function FlipCountdown({
  deadline,
  animMs = 500,
  daysWidth = 2, // 2 or 3
}: {
  deadline: Date | string | number;
  animMs?: number;
  daysWidth?: 2 | 3;
}) {
  const deadlineDate = toValidDate(deadline);
  if (!deadlineDate) {
    console.error("[FlipCountdown] Invalid deadline:", deadline);
    // Render zeros to avoid NaN in UI
    return (
      <div className="flex items-center gap-3">
        <FlipTwoDigits
          current={0}
          target={0}
          globalTurn={false}
          animMs={animMs}
        />
        <span className="countdown-sep">:</span>
        <FlipTwoDigits
          current={0}
          target={0}
          globalTurn={false}
          animMs={animMs}
        />
        <span className="countdown-sep">:</span>
        <FlipTwoDigits
          current={0}
          target={0}
          globalTurn={false}
          animMs={animMs}
        />
        <span className="countdown-sep">:</span>
        <FlipTwoDigits
          current={0}
          target={0}
          globalTurn={false}
          animMs={animMs}
        />
      </div>
    );
  }
  const deadlineMs = deadlineDate.getTime();

  const init = useMemo(() => {
    const now = Date.now();
    const secsLeft = Math.max(0, Math.floor((deadlineMs - now) / 1000));
    const dhms = secsToDHMS(secsLeft);
    return { current: dhms, target: dhms, secsLeft };
  }, [deadlineMs]);

  const [current, setCurrent] = useState<DHMS>(init.current);
  const [target, setTarget] = useState<DHMS>(init.target);
  const [turn, setTurn] = useState(false);

  const boundaryRef = useRef<number | null>(null);
  const commitRef = useRef<number | null>(null);

  useEffect(() => {
    const scheduleNextBoundary = () => {
      const now = Date.now();
      const msToNext = 1000 - (now % 1000);
      boundaryRef.current = window.setTimeout(() => {
        const secsLeft = Math.max(
          0,
          Math.floor((deadlineMs - Date.now()) / 1000),
        );
        const nextDHMS = secsToDHMS(secsLeft);
        setTarget(nextDHMS);
        setTurn(true);
        commitRef.current = window.setTimeout(() => {
          setCurrent(nextDHMS);
          setTurn(false);
          if (secsLeft > 0) scheduleNextBoundary();
        }, animMs);
      }, msToNext);
    };

    // prime
    const secsLeftNow = Math.max(
      0,
      Math.floor((deadlineMs - Date.now()) / 1000),
    );
    const startDHMS = secsToDHMS(secsLeftNow);
    setCurrent(startDHMS);
    setTarget(startDHMS);
    setTurn(false);
    scheduleNextBoundary();

    return () => {
      if (boundaryRef.current) clearTimeout(boundaryRef.current);
      if (commitRef.current) clearTimeout(commitRef.current);
    };
  }, [deadlineMs, animMs]);

  // Choose 2-digit or 3-digit days display
  const DayDigits = daysWidth === 3 ? FlipThreeDigits : FlipTwoDigits;
  const currentD = daysWidth === 2 ? clamp(current.d, 0, 99) : current.d;
  const targetD = daysWidth === 2 ? clamp(target.d, 0, 99) : target.d;

  return (
    <div className="h-[10%] sm:h-1/5 md:h-1/3 max-h-20 md:max-h-24 flex items-center gap-0.5 sm:gap-3">
      <DayDigits
        current={currentD}
        target={targetD}
        globalTurn={turn && currentD !== targetD}
        animMs={animMs}
      />
      <span className="countdown-sep">:</span>
      <FlipTwoDigits
        current={current.h}
        target={target.h}
        globalTurn={turn && current.h !== target.h}
        animMs={animMs}
      />
      <span className="countdown-sep">:</span>
      <FlipTwoDigits
        current={current.m}
        target={target.m}
        globalTurn={turn && current.m !== target.m}
        animMs={animMs}
      />
      <span className="countdown-sep">:</span>
      <FlipTwoDigits
        current={current.s}
        target={target.s}
        globalTurn={turn && current.s !== target.s}
        animMs={animMs}
      />
    </div>
  );
}
