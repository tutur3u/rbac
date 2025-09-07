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
    <div className={"flip-book w-10 sm:w-14 md:w-16 h-full"}>
      <div className="absolute right-0 top-0 flex flex-col gap-0 w-full h-full">
        <div className="flip-card-content flip-card-content-top ">
          <div className="flip-card-content-border-top" />
          <p>{topStaticDigit}</p>
        </div>
        <div className="flip-card-content flip-card-content-bottom">
          <div className="flip-card-content-border-bottom" />
          <p>{bottomStaticDigit}</p>
        </div>
      </div>

      <div
        className={cn(`page page--sheet h-1/2`, { turn: turn })}
        style={{ transitionDuration: turn ? `${animMs}ms` : "0ms" }}
      >
        <div className="front flip-card-content flip-card-content-top ">
          <p>{bottomStaticDigit}</p>
        </div>
        <div className="back flip-card-content flip-card-content-bottom ">
          <p>{topStaticDigit}</p>
        </div>
      </div>
    </div>
  );
}
