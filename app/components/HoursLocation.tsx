import { clinic, telHref } from "@/app/lib/clinic";
import { whatsappHref } from "@/app/lib/contact";
import { hours } from "@/app/lib/content";

// Hours + location: opening hours table, address, a plain map LINK (no embedded
// tracking iframe), tap-to-call, and a WhatsApp link.
export function HoursLocation() {
  return (
    <section className="section section-alt" aria-labelledby="hours-title">
      <div className="container hours-grid">
        <div>
          <h2 id="hours-title">שעות וכתובת</h2>
          <table className="hours-table">
            <caption className="visually-hidden">שעות הפעילות של המרפאה</caption>
            <thead>
              <tr>
                <th scope="col">יום</th>
                <th scope="col">שעות</th>
              </tr>
            </thead>
            <tbody>
              {hours.map((row) => (
                <tr key={row.day}>
                  <th scope="row">{row.day}</th>
                  <td>{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="hours-contact">
          <h3>כתובת ויצירת קשר</h3>
          <address className="clinic-address">{clinic.addressLine}</address>
          <ul className="link-list" role="list">
            <li>
              <a href={clinic.mapUrl} target="_blank" rel="noopener noreferrer">
                פתיחת מפה במפת רחובות
              </a>
            </li>
            <li>
              <a href={telHref}>חיוג: {clinic.phone}</a>
            </li>
            <li>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                שליחת הודעה בוואטסאפ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
