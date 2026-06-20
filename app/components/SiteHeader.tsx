import { clinic, telHref } from "@/app/lib/clinic";

// Minimal sticky header: clinic wordmark + a quick tap-to-call.
export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <span className="wordmark">מרפאת {clinic.doctorName}</span>
        <a className="header-call" href={telHref}>
          חיוג למרפאה
        </a>
      </div>
    </header>
  );
}
