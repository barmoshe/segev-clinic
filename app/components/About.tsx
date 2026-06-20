import { clinic } from "@/app/lib/clinic";

// About: a short, human bio that builds trust. Placeholder copy, no real claims.
export function About() {
  return (
    <section className="section" aria-labelledby="about-title">
      <div className="container narrow">
        <h2 id="about-title">קצת עליי</h2>
        <p>
          שמי {clinic.doctorName}, רופא משפחה. אחרי שנים של עבודה במרפאות עמוסות
          בחרתי בדרך אחרת: מרפאה פרטית קטנה שבה לכל פגישה יש מספיק זמן. אני מאמין
          שרפואה טובה מתחילה בהקשבה, ושכשמבינים את האדם שמולך קל יותר ללוות אותו
          לאורך זמן.
        </p>
        <p>
          ההכשרה שלי כוללת התמחות ברפואת משפחה וניסיון בליווי מטופלים בכל הגילאים,
          ממשפחות צעירות ועד מבוגרים עם מצבים נמשכים. הגישה שלי שקטה ומעשית:
          להסביר בגובה העיניים, להימנע מבדיקות מיותרות, ולהיות זמין כשצריך.
        </p>
      </div>
    </section>
  );
}
