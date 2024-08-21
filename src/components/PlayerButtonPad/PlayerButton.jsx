import useGameStore from '../../store/gameStore';

const PlayerButton = (props) => {
  const {
    data,
    isMatching,
  } = props;

  const {
    setPlayer,
    setScore,
  } = useGameStore();

  const handlePlayerButtonClick = (e) => {
    e.preventDefault();
    if (!isMatching) {
      setPlayer({
        player: 1,
        choice: data.value,
      });
      setTimeout(() => {
        setPlayer({
          player: 2,
          choice: Math.floor(Math.random() * 6),
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
      ${!isMatching && `absolute ${data.positions}`}`}
    >
      <div className={`
      OUTTER-CIRCLE
      flex justify-center items-center
      rounded-full
      border-b-[0.375rem]
      ${isMatching ? 'w-[18.75rem] h-[18.75rem]' : 'w-[9.25rem] h-[9.25rem]'}
      ${data.gradient}
      ${data.shadow}`}
      >
        <div className={`
        INNER-CIRCLE
        flex justify-center items-center
        ${isMatching ? 'w-[14.25rem] h-[14.25rem]' : 'w-28 h-28'}
        rounded-full
        border-t-4 border-t-innerShadow
        bg-innerButton`}
        >
          <div className="BUTTON-ICON-CONTAINER">
            <img
              src={require(`../../assets/icons/player_button_icons/${data.icon}`)}
              alt={data.iconsAlt}
              className={isMatching && 'max-w-[200%] w-[200%] -ml-[50%]'}
            />
          </div>
        </div>
      </div>
    </button>
  );
};

export default PlayerButton;
