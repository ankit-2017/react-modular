import Header from 'views/auth/components/landingPage/header.landing'
import SectionTwo from 'views/auth/components/landingPage/section2'
import CVSteps from 'views/auth/components/landingPage/cvSteps'

import('views/auth/css/index.css')

export default function LandingPage() {
    return (
      <div className="container">
        <Header />
        <SectionTwo />
        <CVSteps />
      </div>

    )
}
