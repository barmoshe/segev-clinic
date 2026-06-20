import { clinic, telHref } from "@/app/lib/clinic";

// Hero: name, role, a one-line trust promise, a primary CTA that anchors to the
// contact form, and a tap-to-call secondary (tel:).
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <p className="hero-eyebrow">{clinic.role}</p>
        <h1 id="hero-title" className="hero-title">
          {clinic.doctorName}
        </h1>
        <p className="hero-promise">
          רפואה אישית, בקצב שלכם: זמן להקשיב, להסביר וללוות, בלי להמתין על הקו.
        </p>
        <div className="hero-actions">
          <a className="btn" href="#contact">
            קביעת תור / השארת פרטים
          </a>
          <a className="btn btn-ghost" href={telHref}>
            חיוג למרפאה
          </a>
        </div>
      </div>
    </section>
  );
}
