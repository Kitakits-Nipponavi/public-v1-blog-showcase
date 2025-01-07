'use client'
import FeaturedIndex from "@/components/Articles/FeaturedIndex";
import IndexArticle from "@/components/Articles/IndexArticle";

const AllArticles = () => {
  return (
    <div className="col-span-4 md:col-start-3 md:col-end-7 lg:col-start-4 lg:col-end-10">

      <div className="mt-6">
        <FeaturedIndex
          src="/images/friends.png"
          alt="Friends in a Park"
          width={376}
          height={201}
          header="Relations"
          title="Making Friends in Japan"
          subtitle="Not sure where to begin? Learn some tips to help you get started!"
          date="Oct 23, 2024"
          timestamp="5 min read"
          onClick={() => {}}
        />
      </div>

      <div className="mt-6">
        <IndexArticle
          title="Useful Japanese Phrases"
          subtitle="What are the most useful phrases? Pick up some here!"
          date="Oct 9, 2024"
          timestamp="4 min read"
          src="/images/lesson.png"
          alt="Japanese Lesson"
          width={107}
          height={93}
          onClick={() => {}}
        />
      </div>

    </div>
  );
};

export default AllArticles;
