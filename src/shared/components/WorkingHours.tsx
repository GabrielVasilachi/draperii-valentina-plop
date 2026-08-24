const workingHours = [
  ["Luni–Sâmbătă", "10:00–18:00"],
  ["Duminică", "Închis"],
] as const;

export function WorkingHours({ compact = false }: { compact?: boolean }) {
  return (
    <dl className={compact ? "working-hours compact" : "working-hours"}>
      {workingHours.map(([day, hours]) => (
        <div key={day}>
          <dt>{day}</dt>
          <dd>{hours}</dd>
        </div>
      ))}
    </dl>
  );
}
