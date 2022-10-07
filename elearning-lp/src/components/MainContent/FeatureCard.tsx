import { PropsWithChildren } from "react";

interface Props {
  icon: string;
  title: string;
}

export const FeatureCard = ({
  icon,
  title,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div className="bg-white rounded-xl px-7 pt-14 relative">
      <img src={icon} alt="feature-icon" className="absolute -top-7" />
      <h2 className="text-darkblue font-extrabold text-xl mb-4">{title}</h2>
      <div className="text-specialgray leading-7 mb-6">{children}</div>
      <div className="mb-4">
        <a
          href="https://www.google.de"
          className="text-strawberry hover:text-piggypink transition-colors font-bold text-lg"
        >
          Get started
        </a>
      </div>
    </div>
  );
};
