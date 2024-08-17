import helpers from '../../helpers/helpers';
import PlayerButton from './PlayerButton';

const PlayerHeader = ({ player, text }) => (
  <div className={`
    PLAYER-${player}-HEADER
    text-2xl font-bold tracking-[0.12rem]`}
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
      flex flex-col justify-center items-center gap-16
      w-[20.25rem]`}
      >
        <PlayerHeader player={text} text={text} />
        {player === '1' && (
          <PlayerButton
            isBig
            data={findButtonData(choice)}
          />
        )}
        {player === '2' && (
          choice ? (
            <PlayerButton
              isBig
              data={findButtonData(choice)}
            />
          ) : 'loading'
        )}
      </div>
    </div>
  );
};

export default SelectedButton;
