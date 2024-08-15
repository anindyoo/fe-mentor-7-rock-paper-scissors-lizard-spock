import { useState } from 'react';
import rulesImage from '../../assets/images/rules/image-rules-bonus.svg';
import closeIcon from '../../assets/icons/rules_icons/icon-close.svg';

const Rules = () => {
  const [modalIsActive, setModalIsActive] = useState(false);

  const handleOpenModalButton = () => setModalIsActive(true);
  const handleCloseModalButton = () => setModalIsActive(false);

  return (
    <div className="RULES-BUTTON-MODAL-WRAPPER">
      <button
        type="button"
        onClick={handleOpenModalButton}
        className="
        RULES-BUTTON
        absolute right-8 bottom-8
        h-[2.625rem]
        px-10
        border-2 border-headerOutline
        rounded-lg
        text-[1.063rem] tracking-[0.11rem] font-semibold text-white"
      >
        RULES
      </button>
      <div className={`
      RULES-MODAL-OVERLAY
      absolute left-0 top-0
      flex justify-center items-center
      w-screen h-screen
      ${modalIsActive ? 'visible' : 'hidden'}
      `}
      >
        <div className="
        RULES-MODAL
        relative z-20
        flex flex-col gap-4
        w-[25rem] h-[28.813rem]
        px-8 pt-7 pb-[2.938rem]
        rounded-md
        bg-white
        opacity-100"
        >
          <div className="
          RULES-MODAL-HEADER
          flex flex-row justify-between items-center"
          >
            <div className="MODAL-TITLE text-[2rem] font-bold text-darkText">RULES</div>
            <button
              type="button"
              onClick={handleCloseModalButton}
            >
              <img
                src={closeIcon}
                alt="Cross or X icon for clossing the rules modal."
                className="w-5 h-5"
              />
            </button>
          </div>
          <img src={rulesImage} alt="Rules image." />
        </div>
        <div className="
        OVERLAY-SHADOW
        absolute left-0 top-0
        w-screen h-screen
        bg-neutral-950
        opacity-55"
        />
      </div>
    </div>
  );
};

export default Rules;
