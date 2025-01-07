'use client'
import PageHeader from "@/components/Global/PageHeader";
import PageContent from "@/components/Global/PageContent";
import InfoTOC from "@/components/Global/InfoTOC";
import PageSubheader from "@/components/Global/PageSubheader";

const TermsOfUse = () => {
  const tocData = [
    {
      title: "Definitions and Parties",
      onClick: () => {
        // Handle TOC item click (optional)
      },
    },
    {
      title: "Intellectual Property",
      onClick: () => {
        // Handle TOC item click (optional)
      },
    },
    {
      title: "Links",
      onClick: () => {
        // Handle TOC item click (optional)
      },
    }
    // Add more TOC items as needed
  ];

  return (
    <div className="col-span-4 md:col-start-3 md:col-end-7 lg:col-start-4 lg:col-end-10">

      <div className="mt-12">
        <PageHeader
          title="Terms of Use"
          />
      </div>

      <div className="mt-6">
        <PageContent
          content="Welcome to kitakits.me! By using this website, you agree to comply with and be bound by the following Terms of Use. Please read these terms carefully before accessing or using our website."
        />
      </div>

      <div className="mt-6">
        <InfoTOC
          toc={tocData}
        />
      </div>

      <div>
        <PageSubheader
          order={1}
          title="Definitions and Parties"
        />
      </div>

      <div className="mt-2">
        <PageContent
          content="“NippoNavi” refers to this website, operated as a blog service.
          “User,” “you,” and “your” refer to the person accessing or using NippoNavi.
          “Content” includes all materials posted on the website, including but not limited to text and images."
        />
      </div>

      <div className="mt-8">
        <PageSubheader
          order={2}
          title="Intellectual Property"
        />
      </div>

      <div className="mt-2">
        <PageContent
          content="All content on NippoNavi including text, graphics, logos, and images, is the property of NippoNavi or its content providers and is protected by copyright and trademark laws. Users may not copy, reproduce, distribute, or use content for commercial purposes without prior written permission."
        />
      </div>

      <div className="mt-8">
        <PageSubheader
          order={3}
          title="Links"
        />
      </div>

      <div className="mt-2">
        <PageContent
          content="NippoNavi may contain links to third-party websites. We do not control these sites and are not responsible for their content, availability, or practices. The inclusion of any link does not imply endorsement, and you access third-party sites at your own risk."
        />
      </div>


    </div>
  );
};

export default TermsOfUse;
