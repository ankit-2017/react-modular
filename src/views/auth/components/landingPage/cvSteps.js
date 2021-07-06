import Image1 from 'assets/images/pick-a-resume-template.jpeg'
import Image2 from 'assets/images/make-it-yours.jpeg'
import Image3 from 'assets/images/publish.jpeg'

export default function CVSteps() {
    return (
      <div className="cv-steps">
        <div>
          <img src={Image1} alt="pick a template" />
          <div>
            <h3>Pick a resume tamplate</h3>
            <p>Select your most suitable template and proceed with that.</p>
          </div>

        </div>

        <div>
          <img src={Image2} alt="make it yours" />
          <div>
            <h3>Fill the details</h3>
            <p>Fill all details as per template sections.</p>
          </div>

        </div>

        <div>
          <img src={Image3} alt="Publish" />
          <div>
            <h3>Publish and export resume</h3>
            <p>Review your resume, publish it and export to local system.</p>
          </div>

        </div>
      </div>
    )
}
