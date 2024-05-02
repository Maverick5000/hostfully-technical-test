const formatDate = (date: string): string => {
  const dateObj = new Date(date + "T00:00:00");

  const timeZoneOffset = dateObj.getTimezoneOffset();

  const adjustedDate = new Date(dateObj.getTime() + timeZoneOffset * 60000);

  const formattedDate = adjustedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
};

export default formatDate;
