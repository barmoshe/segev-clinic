import { services } from "@/app/lib/content";

// Services: what a private visit covers, as clean cards. Describes services;
// makes NO medical or outcome promises.
export function Services() {
  return (
    <section className="section section-alt" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title">מה כולל ביקור פרטי</h2>
        <p className="section-lead">
          שירותי רפואת משפחה לפי הצורך, בתיאום אישי. להלן עיקרי השירותים:
        </p>
        <ul className="card-grid" role="list">
          {services.map((s) => (
            <li key={s.title} className="card service-card">
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
