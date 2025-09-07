import FlipDigit from "@/components/flip/FlipDigit";

function splitDigits(n: number, width: number): number[] {
  if (!Number.isFinite(n) || n < 0) n = 0;
  const s = Math.floor(n).toString().padStart(width, "0");
  // '0' → 48; convert chars to numbers 0..9
  return Array.from(s, (ch) => ch.charCodeAt(0) - 48);
}
export default function FlipThreeDigits({
  current,
  target,
  globalTurn,
  animMs,
  className = "",
}: {
  current: number;
  target: number;
  globalTurn: boolean;
  animMs: number;
  className?: string;
}) {
  const [c100, c10, c1] = splitDigits(current, 3);
  const [t100, t10, t1] = splitDigits(target, 3);

  const turn100 = globalTurn && c100 !== t100;
  const turn10 = globalTurn && c10 !== t10;
  const turn1 = globalTurn && c1 !== t1;

  // Reuse your FlipTwoDigits' inner FlipDigit by rendering two + one,
  // or create a <FlipDigit> and render 3 of them. Assuming you have <FlipDigit>:
  // return (<div className="flex gap-1"><FlipDigit .../> x3</div>)

  // If you *only* have <FlipTwoDigits>, an easy approach:
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {/* Hundreds */}
      {/* Quick hack: render a two-digit with 0X for the hundreds (X) and a single-digit component for the others.
          Better: expose <FlipDigit> from your FlipTwoDigits module and render it 3 times. */}
      {/* Recommended: expose <FlipDigit>. Here is an inline minimal FlipDigit copy */}

      <FlipDigit current={c100} target={t100} turn={turn100} animMs={animMs} />
      <FlipDigit current={c10} target={t10} turn={turn10} animMs={animMs} />
      <FlipDigit current={c1} target={t1} turn={turn1} animMs={animMs} />
    </div>
  );
}
