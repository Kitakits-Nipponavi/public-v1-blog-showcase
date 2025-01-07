'use client'
import Hero from "@/components/Homepage/Hero";
import TopicGroup from "@/components/Homepage/TopicGroup";
import Subheader from "@/components/Global/Subheader";
import FeaturedArticle from "@/components/Articles/FeaturedArticle";
import Newsletter from "@/components/Homepage/Newsletter";
import Image from "next/image";
import BurgerMenu from "@/components/Global/BurgerMenu";

const Homepage = () => {
  const burgerData = [
    {
      label: "Home",
      onClick: () => {
      },
    },
    {
      label: "Relations",
      onClick: () => {
      },
    },
    {
      label: "Careers",
      onClick: () => {
      },
    },
    {
      label: "Families",
      onClick: () => {
      },
    }

  ];

  return (
    <div className="col-span-4 md:col-start-3 md:col-end-7 lg:col-start-4 lg:col-end-10">

      <div>
        <BurgerMenu
          menuItems={burgerData}
          onClose={() => {}}
          isOpen={true}
        />
      </div>

      <div className="mt-12">
        <Hero
          backgroundImage="/images/hero.png"
          title="NippoNavi"
          logo={
            <Image
              src="/images/kitakits_logo.svg"
              alt="Company Logo"
            />
          }
          subtitle="Learn, Guide & Share"
          actionButton={{
            label: "Join Us",
            onClick: () => {
              // Handle button click
            }
          }}
          />
      </div>

      <div className="mt-4">
        <TopicGroup />
      </div>

      <div className="mt-2">
        <Subheader
          label="Latest"
          />
      </div>

      <div className="mt-6">
        <FeaturedArticle
          src="/images/friends.png"
          alt="Friends in a Park"
          width={376}
          height={201}
          category="Relations"
          title="Making Friends in Japan"
          subtitle="Not sure where to begin? Learn some tips to help you get started!"
          date="Oct 23, 2024"
          timestamp="5 min read"
          onClick={() => {}}
        />
      </div>

      <Newsletter/>

    </div>
  );
};

export default Homepage;
