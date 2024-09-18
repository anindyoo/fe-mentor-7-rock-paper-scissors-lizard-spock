import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import useGameStore from '../../store/gameStore';

gsap.registerPlugin(useGSAP);

const WinnerButton = () => {
  const { winner } = useGameStore();

  useGSAP(
    () => {
      if (winner !== 0 && document.querySelector('.PULSATING-LAYER')) {
        const tl = gsap.timeline({});

        tl.fromTo(
          '.PULSATING-LAYER',
          {
            opacity: 0.9, scale: 0.4,
          },
          {
            opacity: 1,
            scale: 1,
            ease: 'bounce.in',
            duration: 4,
            stagger: 0.2,
          },
        );
        tl.to(
          '.PULSATING-LAYER',
          {
            scale: 1.055,
            yoyo: true,
            ease: 'sine.inOut',
            duration: 1,
            repeat: -1,
            stagger: 0.2,
          },
        );
      }
    },
    {
      dependencies: [winner],
    },
  );

  return (
    <div className="
    WINNER-BUTTON-CONTAINER
    absolute -z-40
    flex justify-center items-center
    w-[45.625rem] h-[45.625rem]"
    >
      <div className="
      OUTER-LAYER
      PULSATING-LAYER
      absolute
      flex justify-center items-center
      w-[17.75rem] lg:w-[45.625rem] h-[17.75rem] lg:h-[45.625rem]
      rounded-full
      bg-slate-700 bg-opacity-20"
      >
        <div className="
        MIDDLE-LAYER
        PULSATING-LAYER
        absolute
        flex justify-center items-center
        w-[13.75rem] lg:w-[35.375rem] h-[13.75rem] lg:h-[35.375rem]
        rounded-full
        bg-slate-700 bg-opacity-20"
        >
          <div className="
          INNER-LAYER
          PULSATING-LAYER
          absolute
          flex justify-center items-center
          w-40 lg:w-[26.375rem] h-40 lg:h-[26.375rem]
          rounded-full
          bg-slate-500 bg-opacity-10"
          />
        </div>
      </div>
    </div>
  );
};

export default WinnerButton;
