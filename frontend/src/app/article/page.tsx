'use client'
import ArticleHero from "@/components/Articles/ArticleHero";
import ArticleTOC from "@/components/Articles/ArticleTOC";
import PageContent from "@/components/Global/PageContent";
import ArticleSubtopic from "@/components/Articles/ArticleSubtopic";
import ArticleRAList from "@/components/Articles/RecommendedActions";

const ArticleShowPage = () => {
  const tocData = [
    {
      title: "Why is it hard?",
      onClick: () => {
        // Handle TOC item click (optional)
      },
    },
    {
      title: "What should you learn?",
      onClick: () => {
        // Handle TOC item click (optional)
      },
    },
    {
      title: "How to get yourself out there.",
      onClick: () => {
        // Handle TOC item click (optional)
      },
    },
    {
      title: "Recommended Actions",
      onClick: () => {
        // Handle TOC item click (optional)
      },
    }
    // Add more TOC items as needed
  ];

  const raData = [
    {
      title: "Learn Cultural Basics",
    },
    {
      title: "Learn Basic Japanese",
    },
    {
      title: "Join a Social Group",
    }
  ];

  return (
    <div className="col-span-4 md:col-start-3 md:col-end-7 lg:col-start-4 lg:col-end-10">
      <ArticleHero
        src="/images/friends.png"
        alt="Friends in a Park"
        width={440}
        height={264}
        category="Relations"
        title="Making Friends in Japan"
        subtitle="Not sure where to begin? Learn the requirements to help you get started!"
        date="Oct 22, 2024"
        timestamp="5 min read"
      />

      <div className="mt-10">
        <ArticleTOC
          toc={tocData}
        />
      </div>

      <div className="mt-10">
        <PageContent
          content="Making friends in Japan can be an enriching yet sometimes challenging experience, especially if you’re new to the culture and language. While Japan is known for its warm hospitality and politeness, building deeper connections can take time. Here are some insights to help ease the journey and make lasting friendships."
        />
      </div>

      <div className="mt-6">
        <ArticleSubtopic
          title="What should you learn?"
          src="/images/learning.png"
          alt="Woman in a library"
          width={376}
          height={200}
          subtitle="Preparation is the key to happiness."
        />
      </div>

      <div className="mt-14">
        <ArticleRAList
          action={raData}
        />
      </div>

    </div>
  );
};

export default ArticleShowPage;
