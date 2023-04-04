import { NextSeo } from 'next-seo';

const SEO = () => {
  return (
    <NextSeo
      title="Claudio's Portfolio"
      description="Welcome to Claudio Land"
      canonical="https://www.claudio.land"
      openGraph={{
        url: 'https://www.claudio.land',
        title: "Claudio's Portfolio",
        description: 'Welcome to Claudio Land',
        images: [
          {
            url: '/images/og-image.png',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          },
          {
            url: '/images/og-image.png',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
          },
          { url: '/images/og-image.png' },
          { url: '/images/og-image.png' },
        ],
        site_name: 'Claudio Land',
      }}
      twitter={{
        handle: '@clodoan',
        site: '@clodoan',
        cardType: 'summary_large_image',
      }}
    />
  );
};

export default SEO;
