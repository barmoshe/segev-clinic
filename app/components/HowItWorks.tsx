import { steps } from "@/app/lib/content";

// How a visit works: 3-4 step flow to reduce friction.
export function HowItWorks() {
  return (
    <section className="section" aria-labelledby="how-title">
      <div className="container">
        <h2 id="how-title">איך זה עובד</h2>
        <ol className="steps" role="list">
          {steps.map((step) => (
            <li key={step.n} className="card step-card">
              <span className="step-num" aria-hidden="true">
                {step.n}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
