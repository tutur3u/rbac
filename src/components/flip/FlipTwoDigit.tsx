import FlipDigit from "@/components/flip/FlipDigit";

const to2 = (n: number) => [Math.floor(n / 10) % 10, n % 10] as const;
export default function FlipTwoDigits({
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
  const [cTens, cOnes] = to2(current);
  const [tTens, tOnes] = to2(target);

  const turnTens = globalTurn && cTens !== tTens;
  const turnOnes = globalTurn && cOnes !== tOnes;

  return (
    <div className={`flex items-center h-full gap-0.5 sm:gap-1 ${className}`}>
      <FlipDigit
        current={cTens}
        target={tTens}
        turn={turnTens}
        animMs={animMs}
      />
      <FlipDigit
        current={cOnes}
        target={tOnes}
        turn={turnOnes}
        animMs={animMs}
      />
    </div>
  );
}
