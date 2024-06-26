export interface Role {
  title: string;
  from: string;
  to: string;
}

export interface Work {
  company: string;
  companyWeb?: string;
  description?: string;
  roles: Role[];
}

export interface Content {
  title: string;
  subtitle: string;
  about: string;
  work: Work[];
}

export const content: Content = {
  title: 'Claudio Angrigiani',
  subtitle: 'Design & Engineering',
  about: 'Crafting digital products with love and care.',
  work: [
    {
      company: 'Footprint',
      companyWeb: 'https://onefootprint.com',
      description:
        'At Footprint, we are pioneers in revolutionizing identity and personal data security solutions. Our mission is to empower companies with seamless onboarding experiences while ensuring robust identity verification, security, fraud prevention, and data protection. With just five lines of code, our platform enables organizations to take control of their onboarding processes and easily safeguard customer data.',
      roles: [
        {
          title: 'Design Engineer',
          from: '2022',
          to: 'Present',
        },
      ],
    },
    {
      company: 'Mainstreet',
      companyWeb: 'https://mainstreet.com',
      description:
        'MainStreet is a cutting-edge platform dedicated to assisting startups in identifying and securing Federal and State tax credits swiftly, resulting in substantial cost savings, with an average of over $50,000 per company.',
      roles: [
        {
          title: 'Product Designer',
          from: '2021',
          to: '2022',
        },
      ],
    },
    {
      company: 'Dorothy',
      companyWeb: 'https://hidorothy.com',
      roles: [
        {
          title: 'Co-founder & Head of Product',
          from: '2019',
          to: '2021',
        },
      ],
    },
    {
      company: 'Banco Galicia',
      description:
        'Banco Galicia, based in Buenos Aires, Argentina, is a leading financial institution with over a century of history. Renowned for its innovation and trust, it offers a wide range of banking services, emphasizing technological advancement.',
      companyWeb: 'https://bancogalicia.com.ar',
      roles: [
        {
          title: 'Product Design Manager',
          from: '2018',
          to: '2019',
        },
        {
          title: 'Sr. Product Designer',
          from: '2017',
          to: '2018',
        },
      ],
    },
    {
      company: 'Masisa Lab',
      companyWeb: 'https://www.masisalab.com/en/',
      roles: [
        {
          title: 'Head of Accelerator Program',
          from: '2016',
          to: '2017',
        },
      ],
    },
    {
      company: 'Cranio',
      companyWeb: undefined,
      roles: [
        {
          title: 'Partner & Head of Product',
          from: '2014',
          to: '2016',
        },
      ],
    },
    {
      company: 'ComeCasero | 500 Startups',
      companyWeb: 'https://www.f6s.com/company/comecasero.com#about',
      roles: [
        {
          title: 'Co Founder - CEO',
          from: '2013',
          to: '2014',
        },
      ],
    },
  ],
};
