import Section from "../../../layout/Section";

type Props = {};

function Testimonials({}: Props) {
  return (
    <Section className="h-[100vh] py-24 lg:py-36">
      <div className="max-w-3xl">
        <div className="flex flex-col  gap-4">
          <h2 className="text-2xl">
            I was paying them to hold my own money hostage.
          </h2>

          <p>
            That’s what the director of a massive touring circus told me. She
            was doing all the heavy lifting: moving tents, managing a massive
            crew, taking all the physical risk… but her ticketing provider had
            all the leverage. They were sitting on her payouts for weeks, taking
            a large cut of her gross, and locking her into an 8-year contract.
            She realized she wasn’t running her own box office anymore: she was
            acting as a high-volume lead generator for a software giant. That
            was the trigger. We realized operators didn’t need another generic
            app: they needed to fire the middlemen. We built Evinra so
            independent producers could take their gates, their data, and their
            revenue back.
          </p>
        </div>

        <div>
          <p>
            “We were locked into expensive contracts and losing control of our
            own gates. The ticketing platform Yoaldis and his team built gave us
            our brand back and immediately protected our profit margins.”
          </p>
          <div>
            <p>Director of a Multi-City Touring Circus</p>
            <span>Veteran Event Operator</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Testimonials;
