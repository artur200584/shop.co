export function formatDateTime(isoString) {
  if (!isoString) return "";
  const date = new Date(isoString);

  if (isNaN(date.getTime())) return "Некоректна дата";

  return date.toLocaleString("uk-UA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
