const PlayerButton = (props) => {
  const { data } = props;
  console.log(data);

  return (
    <button
      type="button"
      className={`
      PLAYER-BUTTON
      absolute
      ${data.positions}`}
    >
      <div className={`
      OUTTER-CIRCLE
      flex justify-center items-center
      w-[9.25rem] h-[9.25rem]
      rounded-full
      border-b-[0.375rem]
      ${data.gradient}
      ${data.shadow}`}
      >
        <div className={`
        INNER-CIRCLE
        flex justify-center items-center
        w-28 h-28
        rounded-full
        border-t-4 border-t-innerShadow
        bg-innerButton`}
        >
          <img
            src={require(`../../assets/icons/player_button_icons/${data.icon}`)}
            alt=""
          />
        </div>
      </div>
    </button>
  );
};

export default PlayerButton;
