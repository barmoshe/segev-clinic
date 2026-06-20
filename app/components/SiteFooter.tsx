import { clinic } from "@/app/lib/clinic";

// Footer with the placeholder disclaimer: nothing here implies a real person.
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p className="footer-note">
          {clinic.doctorName} היא דמות לדוגמה. זהו אתר הדגמה (lab) ואינו מרפאה
          פעילה. הפרטים והכתובת הם דמה בלבד.
        </p>
      </div>
    </footer>
  );
}
