import FlipThreeDigits from "@/components/flip/FlipThreeDigits";
import FlipTwoDigits from "@/components/flip/FlipTwoDigit";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type DHMS = { d: number; h: number; m: number; s: number };

const SECONDS_PER_DAY = 86400;
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MINUTE = 60;
const MS_PER_SECOND = 1000;

const clamp = (n: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, n));

function toValidDate(input: Date | string | number): Date | null {
  if (input instanceof Date) return Number.isNaN(input.getTime()) ? null : input;
  const d = new Date(input);
  return Number.isNaN(d.getTime()) ? null : d;
}

function secsToDHMS(total: number): DHMS {
  const safe = Number.isFinite(total) ? Math.max(0, Math.floor(total)) : 0;
  let rem = safe;
  const d = Math.floor(rem / SECONDS_PER_DAY);
  rem -= d * SECONDS_PER_DAY;
  const h = Math.floor(rem / SECONDS_PER_HOUR);
  rem -= h * SECONDS_PER_HOUR;
  const m = Math.floor(rem / SECONDS_PER_MINUTE);
  const s = rem - m * SECONDS_PER_MINUTE;
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
  const deadlineMs = deadlineDate?.getTime() || 0;

  const init = useMemo(() => {
    const now = Date.now();
    const secsLeft = Math.max(0, Math.floor((deadlineMs - now) / 1000));
    const dhms = secsToDHMS(secsLeft);
    return { current: dhms, target: dhms, secsLeft };
  }, [deadlineMs]);

  const [current, setCurrent] = useState<DHMS>(init.current);
  const [target, setTarget] = useState<DHMS>(init.target);
  const [turn, setTurn] = useState(false);
  const [isExpired, setIsExpired] = useState(init.secsLeft === 0);

  const intervalRef = useRef<number | null>(null);
  const commitRef = useRef<number | null>(null);

  const calculateSecsLeft = useCallback(
    () => Math.max(0, Math.floor((deadlineMs - Date.now()) / MS_PER_SECOND)),
    [deadlineMs]
  );

  useEffect(() => {
    // Clear any existing timers
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (commitRef.current) clearTimeout(commitRef.current);

    // Check if already expired
    const initialSecsLeft = calculateSecsLeft();
    if (initialSecsLeft === 0) {
      setIsExpired(true);
      return;
    }

    // Sync to next second boundary first
    const now = Date.now();
    const msToNextSecond = MS_PER_SECOND - (now % MS_PER_SECOND);

    const startInterval = () => {
      intervalRef.current = window.setInterval(() => {
        const secsLeft = calculateSecsLeft();

        if (secsLeft === 0) {
          setIsExpired(true);
          if (intervalRef.current) clearInterval(intervalRef.current);
          return;
        }

        const nextDHMS = secsToDHMS(secsLeft);
        setTarget(nextDHMS);
        setTurn(true);

        commitRef.current = window.setTimeout(() => {
          setCurrent(nextDHMS);
          setTurn(false);
        }, animMs);
      }, MS_PER_SECOND);
    };

    // Start on next second boundary
    const syncTimeout = setTimeout(startInterval, msToNextSecond);

    return () => {
      clearTimeout(syncTimeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (commitRef.current) clearTimeout(commitRef.current);
    };
  }, [animMs, calculateSecsLeft]);

  // Choose 2-digit or 3-digit days display
  const DayDigits = daysWidth === 3 ? FlipThreeDigits : FlipTwoDigits;
  const currentD = daysWidth === 2 ? clamp(current.d, 0, 99) : current.d;
  const targetD = daysWidth === 2 ? clamp(target.d, 0, 99) : target.d;

  // Pre-calculate turn conditions to avoid inline evaluations
  const dayTurn = turn && currentD !== targetD;
  const hourTurn = turn && current.h !== target.h;
  const minuteTurn = turn && current.m !== target.m;
  const secondTurn = turn && current.s !== target.s;

  if (!deadlineDate) {
    console.error("[FlipCountdown] Invalid deadline:", deadline);
    return (
      <div className="flex h-12 min-w-0 items-center justify-center rounded-lg bg-gradient-to-r from-red-50 to-orange-50 px-4 shadow-sm xs:h-14 sm:h-16 sm:px-6 md:h-20 lg:h-24">
        <p className="text-base font-semibold text-red-600 xs:text-lg sm:text-xl md:text-2xl">
          Invalid deadline
        </p>
      </div>
    );
  }

  if (isExpired) {
    return (
      <div className="group relative flex h-12 min-w-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 px-4 shadow-lg transition-all hover:shadow-xl xs:h-14 sm:h-16 sm:px-6 md:h-20 md:px-8 lg:h-24">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-emerald-400/10 to-teal-400/10 opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="relative flex flex-col items-center gap-0.5 sm:gap-1">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">🎉</span>
            <p className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-base font-bold text-transparent xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Time's Up!
            </p>
            <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">🎉</span>
          </div>
          <p className="text-[10px] font-medium text-emerald-600/80 xs:text-xs sm:text-sm">
            The countdown has ended
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-12 min-w-0 max-w-full items-center justify-center gap-0.5 xs:h-14 xs:gap-1 sm:h-16 sm:gap-1.5 md:h-20 md:gap-2 lg:h-24 lg:gap-3">
      <DayDigits current={currentD} target={targetD} globalTurn={dayTurn} animMs={animMs} />
      <span className="countdown-sep flex-shrink-0 select-none text-lg font-bold text-primary/70 xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl">:</span>
      <FlipTwoDigits current={current.h} target={target.h} globalTurn={hourTurn} animMs={animMs} />
      <span className="countdown-sep flex-shrink-0 select-none text-lg font-bold text-primary/70 xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl">:</span>
      <FlipTwoDigits current={current.m} target={target.m} globalTurn={minuteTurn} animMs={animMs} />
      <span className="countdown-sep flex-shrink-0 select-none text-lg font-bold text-primary/70 xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl">:</span>
      <FlipTwoDigits current={current.s} target={target.s} globalTurn={secondTurn} animMs={animMs} />
    </div>
  );
}
