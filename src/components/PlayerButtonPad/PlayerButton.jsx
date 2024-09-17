import useGameStore from '../../store/gameStore';

const PlayerButton = (props) => {
  const {
    data,
    isMatching,
    player,
  } = props;

  const {
    setPlayer,
    setScore,
    setPlayed,
    played,
  } = useGameStore();

  const handlePlayerButtonClick = (e) => {
    e.preventDefault();
    if (!played) {
      setPlayed();
    }
    if (!isMatching) {
      setPlayer({
        player: 1,
        choice: data.value,
      });
      setTimeout(() => {
        setPlayer({
          player: 2,
          choice: Math.floor(Math.random() * 5) + 1,
        });
        setScore();
      }, 3000);
    }
  };

  return (
    <button
      type="button"
      onClick={handlePlayerButtonClick}
      className={`
      PLAYER-BUTTON
      PLAYER-BUTTON-${player}
      ${!isMatching && `absolute ${data.positions}`}`}
    >
      <div className={`
      OUTTER-CIRCLE
      flex justify-center items-center
      rounded-full
      ${isMatching
        ? 'w-[8.25rem] lg:w-[18.75rem] h-[8.25rem] lg:h-[18.75rem] border-b-[0.375rem] lg:border-b-[0.875rem]'
        : 'w-[6.125rem] lg:w-[9.25rem] h-[6.125rem] lg:h-[9.25rem] border-b-4 lg:border-b-[0.375rem]'}
      ${data.gradient}
      ${data.shadow}`}
      >
        <div className={`
        INNER-CIRCLE
        flex justify-center items-center
        ${isMatching
          ? 'w-[6.25rem] lg:w-[14.25rem] h-[6.25rem] lg:h-[14.25rem] border-t-[0.313rem] lg:border-t-[0.625rem]'
          : 'w-[4.635rem] lg:w-28 h-[4.635rem] lg:h-28 border-t-4 lg:border-t-[0.375rem]'}
        rounded-full
        border-t-innerShadow
        bg-innerButton`}
        >
          <div className="BUTTON-ICON-CONTAINER">
            <img
              src={require(`../../assets/icons/player_button_icons/${data.icon}`)}
              alt={data.iconsAlt}
              className={`
              BUTTON-ICON
              ${isMatching
                ? 'max-w-[93.75%] w-[93.75%] lg:max-w-[200%] lg:w-[200%] lg:-ml-[50%]'
                : 'w-8 h-auto lg:w-auto'
              }`}
            />
          </div>
        </div>
      </div>
    </button>
  );
};

export default PlayerButton;
