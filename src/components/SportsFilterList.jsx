function SportsFilterList(props) {
  const sportsFilters = props.sportsFilters;
  const selectedSport = props.selectedSport;
  const onChangeSport = props.onChangeSport;

  return (
    <div className="mb-5 flex gap-2 overflow-x-auto pb-1">
      {sportsFilters.map((sport) => {
        let btnClass = "flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium border ";
        if (selectedSport === sport) {
          btnClass = btnClass + "bg-white text-primary-dark border-white shadow-soft";
        } else {
          btnClass = btnClass + "bg-white/10 text-indigo-100 border-white/20";
        }

        return (
          <button
            key={sport}
            onClick={() => onChangeSport(sport)}
            className={btnClass}
          >
            {sport}
          </button>
        );
      })}
    </div>
  );
}

export default SportsFilterList;

