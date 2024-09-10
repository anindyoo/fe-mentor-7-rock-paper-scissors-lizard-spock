import helpers from '../../helpers/helpers';
import LoadingButton from './LoadingButton';
import PlayerButton from './PlayerButton';

const PlayerHeader = ({ player, text }) => (
  <div className={`
  PLAYER-${player}-HEADER
  w-max
  text-base lg:text-2xl font-bold tracking-[0.09rem] lg:tracking-[0.12rem]
  text-center`}
  >
    {text}
  </div>
);

const SelectedButton = (props) => {
  const {
    player,
    choice,
    text,
  } = props;

  const { findButtonData } = helpers;

  return (
    <div className={`
    SELECTED-BUTTON-${player}-CONTAINER`}
    >
      <div className={`
      PLAYER-${player}-CHOICE
      flex flex-col-reverse lg:flex-col justify-center items-center gap-6 lg:gap-16
      w-[8.125rem] lg:w-[20.25rem]`}
      >
        <PlayerHeader player={text} text={text} />
        {player === '1' && (
          <PlayerButton
            isMatching
            data={findButtonData(choice)}
          />
        )}
        {player === '2' && (
          choice ? (
            <PlayerButton
              isMatching
              data={findButtonData(choice)}
            />
          ) : <LoadingButton />
        )}
      </div>
    </div>
  );
};

export default SelectedButton;
