import { faq } from "@/app/lib/content";

// FAQ: accessible accordion using native <details>/<summary> (keyboard- and
// screen-reader-friendly without custom JS).
export function Faq() {
  return (
    <section className="section" aria-labelledby="faq-title">
      <div className="container narrow">
        <h2 id="faq-title">שאלות נפוצות</h2>
        <div className="faq-list">
          {faq.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
