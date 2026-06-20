"use client";

import { useLang } from "@/app/lib/LangContext";

// Footer with the placeholder disclaimer: nothing here implies a real person.
export function SiteFooter() {
  const { t } = useLang();
  return (
    <footer className="site-footer">
      <div className="container">
        <p className="footer-note">{t.footer.disclaimer}</p>
      </div>
    </footer>
  );
}
