'use client';

import Icon from "../Icons/Icon";

const Footer = () => {
  const footerItems = [
    {
      onClick: () => console.log('Clicked on Terms'),
      label: 'Terms of Use',
      areaLabel: 'View Terms of Use'
    },
    {
      onClick: () => console.log('Clicked on Privacy'),
      label: 'Privacy Policy',
      areaLabel: 'View Privacy Policy'
    },
    {
      onClick: () => console.log('Clicked on Map'),
      label: 'Site Map',
      areaLabel: 'View Site Map'
    },
    {
      onClick: () => console.log('Clicked on FAQ'),
      label: 'FAQ',
      areaLabel: 'View Frequently Asked Questions'
    },
    {
      onClick: () => console.log('Clicked on Contact'),
      label: 'Contact Us',
      areaLabel: 'Go to Contact Page'
    },
    {
      onClick: () => console.log('Clicked on About'),
      label: 'About Us',
      areaLabel: 'Learn More About Us'
    },
    {
      onClick: () => console.log('Clicked on LI Link'),
      icon:
        <Icon
          src="/images/linkedin_icon.svg"
          alt="Linked In Link"
          width={24}
          height={24}
        />,
      areaLabel: 'Visit us on LinkedIn'
    },
    {
      onClick: () => console.log('Clicked on FB Link'),
      icon:
        <Icon
          src="/images/facebook_icon.svg"
          alt="Facebook Link"
          width={24}
          height={24}
        />,
      areaLabel: 'Visit us on Facebook'
    },
    {
      onClick: () => console.log('Clicked on X Link'),
      icon:
        <Icon
          src="/images/x_icon.svg"
          alt="Linked In Link"
          width={24}
          height={24}
        />,
      areaLabel: 'Visit us on X'
    },
  ];

  return (
    <footer className="grid justify-center items-center bg-neutral h-[128px] w-full bottom-0 left-0 right-0">
      <div className='grid grid-cols-3 gap-2 w-[320px]'>
        {footerItems.map((item, index) => (
          <a
            key={index}
            onClick={item.onClick}
            className="grid justify-center font-body text-bodyXS cursor-pointer"
            aria-label={item.areaLabel || item.label} // Use ariaLabel if available, otherwise fallback to label
          >
            {item.icon ? (
            <span className="inline-block pt-2">{item.icon}</span>
            ) : (
              <span className ="font-body text-bodyXS">{item.label}</span>
            )}
          </a>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
