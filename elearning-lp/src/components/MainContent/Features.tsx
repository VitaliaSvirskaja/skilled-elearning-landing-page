import { FeatureCard } from "./FeatureCard";
import animationIcon from "../../assets/icon-animation.svg";
import designIcon from "../../assets/icon-design.svg";
import photographyIcon from "../../assets/icon-photography.svg";
import cryptoIcon from "../../assets/icon-crypto.svg";
import businessIcon from "../../assets/icon-business.svg";

export const Features = () => {
  return (
    <div className="flex flex-col gap-10 mb-20">
      <div className="orange-gradient p-7 text-white rounded-xl font-extrabold text-2xl leading-8 mb-1">
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
