import {
  Page_Builder_Sections,
  Page_Builder_Sections_Book,
  Page_Builder_Sections_Callout,
  Page_Builder_Sections_CalloutBig,
  Page_Builder_Sections_CalloutContact,
  Page_Builder_Sections_CalloutSimple,
  Page_Builder_Sections_Faqs,
  Page_Builder_Sections_FeaturedBlock,
  Page_Builder_Sections_Features,
  Page_Builder_Sections_FeaturesIcons,
  Page_Builder_Sections_FeaturesTabs,
  Page_Builder_Sections_Hero,
  Page_Builder_Sections_Interviews,
  Page_Builder_Sections_IntroBlock,
  Page_Builder_Sections_IntroSection,
  Page_Builder_Sections_PageIntro,
  Page_Builder_Sections_Pricing,
  Page_Builder_Sections_Services,
  Page_Builder_Sections_Team,
} from '@/types/wordpress'

import Book from '@/blocks/book'
import Callout from '@/blocks/callout'
import CalloutBig from '@/blocks/callout-big'
import ContactCallout from '@/blocks/callout-contact'
import CalloutSimple from '@/blocks/callout-simple'
import Faqs from '@/blocks/faqs'
import FeaturedBlock from '@/blocks/featured-block'
import Features from '@/blocks/features'
import FeaturesIcons from '@/blocks/features-icons'
import FeaturesTabs from '@/blocks/features-tabs'
import Hero from '@/blocks/hero'
import Interviews from '@/blocks/interviews'
import IntroBlock from '@/blocks/intro-block'
import IntroSection from '@/blocks/intro-section'
import PageIntro from '@/blocks/page-intro'
import Pricing from '@/blocks/pricing'
import Services from '@/blocks/services'
import Team from '@/blocks/team'

type ThemeSectionProps = {
  section: Page_Builder_Sections
}

export default function ThemeSection({ section }: ThemeSectionProps) {
  switch (section.fieldGroupName) {
    // PLOP_INJECT_SECTION_MAPPING
    case 'Page_Builder_Sections_Hero':
      return <Hero section={section as Page_Builder_Sections_Hero} />
    case 'Page_Builder_Sections_Book':
      return <Book section={section as Page_Builder_Sections_Book} />
    case 'Page_Builder_Sections_Callout':
      return <Callout section={section as Page_Builder_Sections_Callout} />
    case 'Page_Builder_Sections_CalloutBig':
      return <CalloutBig section={section as Page_Builder_Sections_CalloutBig} />
    case 'Page_Builder_Sections_CalloutSimple':
      return <CalloutSimple section={section as Page_Builder_Sections_CalloutSimple} />
    case 'Page_Builder_Sections_Faqs':
      return <Faqs section={section as Page_Builder_Sections_Faqs} />
    case 'Page_Builder_Sections_FeaturedBlock':
      return <FeaturedBlock section={section as Page_Builder_Sections_FeaturedBlock} />
    case 'Page_Builder_Sections_Features':
      return <Features section={section as Page_Builder_Sections_Features} />
    case 'Page_Builder_Sections_FeaturesTabs':
      return <FeaturesTabs section={section as Page_Builder_Sections_FeaturesTabs} />
    case 'Page_Builder_Sections_FeaturesIcons':
      return <FeaturesIcons section={section as Page_Builder_Sections_FeaturesIcons} />
    case 'Page_Builder_Sections_Interviews':
      return <Interviews section={section as Page_Builder_Sections_Interviews} />
    case 'Page_Builder_Sections_IntroBlock':
      return <IntroBlock section={section as Page_Builder_Sections_IntroBlock} />
    case 'Page_Builder_Sections_IntroSection':
      return <IntroSection section={section as Page_Builder_Sections_IntroSection} />
    case 'Page_Builder_Sections_PageIntro':
      return <PageIntro section={section as Page_Builder_Sections_PageIntro} />
    case 'Page_Builder_Sections_Pricing':
      return <Pricing section={section as Page_Builder_Sections_Pricing} />
    case 'Page_Builder_Sections_Services':
      return <Services section={section as Page_Builder_Sections_Services} />
    case 'Page_Builder_Sections_Team':
      return <Team section={section as Page_Builder_Sections_Team} />
    case 'Page_Builder_Sections_CalloutContact':
      return <ContactCallout section={section as Page_Builder_Sections_CalloutContact} />

    default:
      return (
        <div>In AllSections the mapping of this component is missing: {section.fieldGroupName}</div>
      )
  }
}
