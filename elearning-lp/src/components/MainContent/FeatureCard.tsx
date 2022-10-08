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
    <div className="relative rounded-xl bg-white px-7 pt-14">
      <img src={icon} alt="feature-icon" className="absolute -top-7" />
      <h2 className="mb-4 text-xl font-extrabold text-darkblue">{title}</h2>
      <div className="mb-6 leading-7 text-specialgray">{children}</div>
      <div className="mb-4">
        <a
          href="https://www.google.de"
          className="text-lg font-bold text-strawberry transition-colors hover:text-piggypink"
        >
          Get started
        </a>
      </div>
    </div>
  );
};
