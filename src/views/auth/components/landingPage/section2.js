import { section2Text } from 'views/auth/typo.json'
import { Button } from '@material-ui/core'

export default function SectionTwo() {
    return (
      <div className="section2">
        <p>{section2Text}</p>
        <div className="button-wrapper">
          <Button className="get-started-button" variant="contained">Get Started</Button>
        </div>

      </div>
    )
}
