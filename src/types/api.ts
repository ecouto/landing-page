export type LogoProps = Image

export type HeaderProps = {
  title: string
  description: string
  button?: {
    label: string
    url: string
  }
  image: Image
}

export type AboutProjectsProps = {
  title: string
  description: string
  image: Image
}

export type TechProps = {
  title: string
  techIcons: [
    {
      icon: Image
      title: string
    }
  ]
}

export type ConceptsProps = {
  title: string
  concepts: [
    {
      title: string
    }
  ]
}

export type modulesProps = {
  title: string
  modules: [
    {
      title: string
      subtitle: string
      description: string
    }
  ]
}

export type AgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type Image = {
  alternativeText: string
  url: string
}

export type SocialLink = {
  title: string
  url: string
}

export type Author = {
  photo: Image
  name: string
  role: string
  socialLinks: SocialLink[]
  description: string
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type Review = {
  id: number
  photo: Image
  name: string
  text: string
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type Question = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: AboutProjectsProps
  sectionTech: TechProps
  sectionConcepts: ConceptsProps
  sectionModules: modulesProps
  sectionAgenda: AgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
