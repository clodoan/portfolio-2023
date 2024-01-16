import { NextSeo } from 'next-seo';
import { useTheme } from 'styled-components';

const SEO = () => {
  const theme = useTheme();
  const themeName = theme.name;

  const themedFavicon = [
    ['light', '🌤️'],
    ['dark', '🌝'],
  ];

  const favicon = themedFavicon.find((item) => item[0] === themeName);

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
      additionalLinkTags={[
        {
          rel: 'icon',
          // eslint-disable-next-line no-useless-escape
          href: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${
            favicon && favicon[1]
          }</text></svg>`,
        },
        {
          rel: 'apple-touch-icon',
          href: `/favicon/apple-touch-icon.png`,
          sizes: '76x76',
        },
      ]}
    />
  );
};

export default SEO;
