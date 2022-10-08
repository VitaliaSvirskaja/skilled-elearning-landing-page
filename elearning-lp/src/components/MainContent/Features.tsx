import { FeatureCard } from "./FeatureCard";
import animationIcon from "../../assets/icon-animation.svg";
import designIcon from "../../assets/icon-design.svg";
import photographyIcon from "../../assets/icon-photography.svg";
import cryptoIcon from "../../assets/icon-crypto.svg";
import businessIcon from "../../assets/icon-business.svg";

export const Features = () => {
  return (
    <div className="mb-20 flex flex-col gap-10 sm:grid sm:grid-cols-2 sm:gap-y-14">
      <div className="orange-gradient mb-1 rounded-xl p-7 text-2xl font-extrabold leading-8 text-white sm:pt-14">
        Check out our most popular courses!
      </div>
      <FeatureCard icon={animationIcon} title="Animation">
        <p>
          Learn the latest animation techniques to create stunning motion design
          and captivate your audience.
        </p>
      </FeatureCard>
      <FeatureCard icon={designIcon} title="Design">
        <p>
          Create beautiful, usable interfaces to help shape the future of how
          the web looks.
        </p>
      </FeatureCard>
      <FeatureCard icon={photographyIcon} title="Photography">
        <p>
          Explore critical fundamentals like lighting, composition, and focus to
          capture exceptional photos.
        </p>
      </FeatureCard>
      <FeatureCard icon={cryptoIcon} title="Crypto">
        <p>
          All you need to know to get started investing in crypto. Go from
          beginner to advanced with this 54 hour course.
        </p>
      </FeatureCard>
      <FeatureCard icon={businessIcon} title="Business">
        <p>
          A step-by-step playbook to help you start, scale, and sustain your
          business without outside investment.
        </p>
      </FeatureCard>
    </div>
  );
};
