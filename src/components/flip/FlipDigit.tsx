import { cn } from "@/lib/utils";

export default function FlipDigit({
  current,
  target,
  turn,
  animMs,
}: {
  current: number;
  target: number;
  turn: boolean;
  animMs: number;
}) {
  const topStaticDigit = turn ? target : current;
  const bottomStaticDigit = current;
  return (
    <div className="flip-book h-full min-w-0 flex-shrink-0 aspect-[3/4]">
      <div className="absolute right-0 top-0 flex flex-col gap-0 w-full h-full">
        <div className="flip-card-content flip-card-content-top">
          <div className="flip-card-content-border-top" />
          <p className="truncate px-0.5">{topStaticDigit}</p>
        </div>
        <div className="flip-card-content flip-card-content-bottom">
          <div className="flip-card-content-border-bottom" />
          <p className="truncate px-0.5">{bottomStaticDigit}</p>
        </div>
      </div>

      <div
        className={cn("page page--sheet h-1/2", { turn: turn })}
        style={{
          transitionDuration: turn ? `${animMs}ms` : "0ms",
          transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)"
        }}
      >
        <div className="front flip-card-content flip-card-content-top">
          <p className="truncate px-0.5">{bottomStaticDigit}</p>
        </div>
        <div className="back flip-card-content flip-card-content-bottom">
          <p className="truncate px-0.5">{topStaticDigit}</p>
        </div>
      </div>
    </div>
  );
}
