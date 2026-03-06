function StatusBadge(props) {
  const status = props.status;

  let bgClass = "bg-sky-100";
  let textClass = "text-sky-700";
  let dotClass = "bg-sky-500";
  let label = "Upcoming";

  if (status === "On Going") {
    bgClass = "bg-emerald-100";
    textClass = "text-emerald-700";
    dotClass = "bg-emerald-500";
    label = status;
  } else if (status === "Confirmed") {
    bgClass = "bg-emerald-100";
    textClass = "text-emerald-700";
    dotClass = "bg-emerald-500";
    label = status;
  } else if (status === "Pending") {
    bgClass = "bg-amber-100";
    textClass = "text-amber-700";
    dotClass = "bg-amber-500";
    label = "Pending";
  }

  let containerClass = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium " + bgClass + " " + textClass;
  let finalDotClass = "h-1.5 w-1.5 rounded-full " + dotClass;

  return (
    <span className={containerClass}>
      <span className={finalDotClass} />
      {label}
    </span>
  );
}

export default StatusBadge;

