import { PropsWithChildren } from "react";

interface Props {
  icon: string;
  title: string;
}

export const FeatureCard = ({
  icon,
  title,
  children,
}: PropsWithChildren<Props>) => (
  <div className="relative rounded-xl bg-white p-7 pt-14">
    <img src={icon} alt="feature-icon" className="absolute -top-7" />
    <div className="flex h-full flex-col gap-4">
      <h2 className="text-xl font-extrabold text-darkblue lg:text-2xl">
        {title}
      </h2>
      <div className="flex-1 leading-7 text-specialgray lg:text-lg">
        {children}
      </div>
      <div>
        <a
          href="https://www.google.de"
          className="py-2 text-lg font-bold text-strawberry transition-colors hover:text-piggypink lg:text-lg"
        >
          Get started
        </a>
      </div>
    </div>
  </div>
);
