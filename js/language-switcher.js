(function () {
  "use strict";

  var translations = {
    en: {
      "page.title": "Mohamad Omar Aboghalon | Portfolio",
      "page.description": "Portfolio of Mohamad Omar Aboghalon, an aspiring software developer and Computer Science student based in Cairo, Egypt.",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.resume": "Resume",
      "nav.contact": "Contact",
      "hero.eyebrow": "Computer Science student",
      "hero.ctaProjects": "View Projects",
      "hero.ctaContact": "Get In Touch",
      "hero.basedLabel": "Based In",
      "hero.basedValue": "Cairo, Egypt",
      "hero.degreeLabel": "Degree",
      "hero.degreeValue": "Computer Science",
      "hero.focusLabel": "Focus",
      "hero.focusValue": "Python, Java, Web",
      "hero.directionLabel": "Current Direction",
      "hero.directionTitle": "Clean code, useful interfaces, and steady growth.",
      "hero.directionBody": "I am currently focused on academic and personal projects that strengthen problem solving, interface design, and real-world software thinking.",
      "about.kicker": "About Me",
      "about.title": "Turning technical foundations and ideas into practical software projects.",
      "about.body1": "I am a Computer Science student at Modern University for Technology & Information with a strong interest in software development and technology. My work so far has focused on turning technical concepts into usable tools, from desktop interfaces in Python to responsive web applications.",
      "about.body2": "I learn quickly, enjoy solving problems step by step, and care about creating software that feels clear, reliable, and useful.",
      "about.strengths": "Strengths",
      "about.strength1": "Object-Oriented Programming",
      "about.strength2": "Problem Solving",
      "about.strength3": "Fast Learner",
      "about.strength4": "Effective Communication",
      "about.strength8": "Microsoft Office",
      "about.resumeButton": "Download My Resume",
      "tech.title": "Technical Snapshot",
      "tech.languagesTitle": "Languages Spoken",
      "tech.languageArabic": "Arabic - Native",
      "tech.languageEnglish": "English - Upper Intermediate",
      "tech.languageGerman": "German - Beginner",
      "portfolio.kicker": "Selected Work",
      "portfolio.title": "My humble Projects",
      "project.metroLabel": "Python Desktop App",
      "project.metroTitle": "Metro Passenger Display System",
      "project.metroPoint1": "Created a GUI that mirrors metro display behavior",
      "project.metroPoint2": "Handled dynamic station and passenger information",
      "project.metroPoint3": "Focused on usability and clear visual presentation",
      "project.numericalLabel": "Web Application",
      "project.numericalTitle": "Numerical Analysis Solver Website",
      "project.numericalPoint1": "Implemented methods like Bisection and Newton-Raphson",
      "project.numericalPoint2": "Translated mathematical logic into browser-based tools",
      "project.numericalPoint3": "Built with a simple and accessible front-end structure",
      "project.bmiLabel": "Responsive Website",
      "project.bmiTitle": "Simple BMI Calculator website",
      "project.bmiPoint1": "Designed for clarity and quick interaction",
      "project.bmiPoint2": "Focused on immediate, readable result feedback",
      "project.bmiPoint3": "Structured to work well on different screen sizes",
      "project.githubButton": "GitHub",
      "project.liveButton": "Live Demo",
      "resume.kicker": "Resume Highlights",
      "resume.title": "Education and certifications",
      "education.title": "Education",
      "education.item1Date": "Sep 2023 - Jun 2027",
      "education.item1Degree": "Bachelor's Degree in Computer Science",
      "education.item1School": "Modern University for Technology & Information, Cairo, Egypt",
      "education.item1Gpa": "GPA: 3.00 / 4.00",
      "education.item2Date": "Jan 2022 - Jun 2023",
      "education.item2Degree": "Bachelor's Degree in Civil Engineering (Incomplete)",
      "education.item2School": "University of Garden City, Khartoum, Sudan",
      "interests.title": "Interests",
      "interests.item1": "Tech Events",
      "interests.item2": "Tech Content",
      "interests.item3": "Astronomy",
      "certifications.title": "Certifications",
      "certifications.python": "Python Programming Basics",
      "certifications.hcia": "HCIA-AI v4.0",
      "certifications.german": "German A1",
      "certifications.flutter": "Introduction to Flutter",
      "certifications.git": "Git",
      "contact.kicker": "Contact",
      "contact.title": "All what you need to find me.",
      "contact.locationLabel": "Location",
      "contact.locationValue": "Egypt, Cairo",
      "contact.onlineTitle": "Find Me Online",
      "contact.linkedinText": "Contact me on LinkedIn",
      "contact.githubText": "Check out my GitHub",
      "contact.emailLabel": "Email",
      "contact.phoneLabel": "Phone",
      "footer.copy": "\u00A9 Mohamad Omar Aboghalon Portfolio"
    },
   de: {
  "page.title": "Mohamad Omar Aboghalon | Portfolio",
  "page.description": "Portfolio von Mohamad Omar Aboghalon, einem angehenden Softwareentwickler und Informatikstudenten aus Kairo, Ägypten.",
  "nav.home": "Start",
  "nav.about": "Über mich",
  "nav.projects": "Projekte",
  "nav.resume": "Lebenslauf",
  "nav.contact": "Kontakt",
  "hero.eyebrow": "Informatikstudent",
  "hero.ctaProjects": "Projekte ansehen",
  "hero.ctaContact": "Kontakt aufnehmen",
  "hero.basedLabel": "Standort",
  "hero.basedValue": "Kairo, Ägypten",
  "hero.degreeLabel": "Studium",
  "hero.degreeValue": "Informatik",
  "hero.focusLabel": "Fokus",
  "hero.focusValue": "Python, Java, Web",
  "hero.directionLabel": "Aktueller Fokus",
  "hero.directionTitle": "Sauberer Code, nützliche Oberflächen und stetiges Wachstum.",
  "hero.directionBody": "Ich konzentriere mich derzeit auf akademische und persönliche Projekte, die Problemlösung, Interface-Design und praxisnahes Softwaredenken stärken.",
  "about.kicker": "Über mich",
  "about.title": "Technische Grundlagen und Ideen in praktische Softwareprojekte verwandeln.",
  "about.body1": "Ich studiere Informatik an der Modern University for Technology & Information und interessiere mich sehr für Softwareentwicklung und Technologie. Meine bisherigen Arbeiten konzentrieren sich darauf, technische Konzepte in nutzbare Werkzeuge umzusetzen - von Desktop-Oberflächen in Python bis hin zu responsiven Webanwendungen.",
  "about.body2": "Ich lerne schnell, löse Probleme gerne Schritt für Schritt und lege Wert auf Software, die klar, zuverlässig und nützlich ist.",
  "about.strengths": "Stärken",
  "about.strength1": "Objektorientierte Programmierung",
  "about.strength2": "Problemlösung",
  "about.strength3": "Schnelle Auffassungsgabe",
  "about.strength4": "Effektive Kommunikation",
  "about.strength8": "Microsoft Office",
  "about.resumeButton": "Meinen Lebenslauf öffnen",
  "tech.title": "Technischer Überblick",
  "tech.languagesTitle": "Gesprochene Sprachen",
  "tech.languageArabic": "Arabisch - Muttersprache",
  "tech.languageEnglish": "Englisch - Fortgeschritten",
  "tech.languageGerman": "Deutsch - Anfänger",
  "portfolio.kicker": "Ausgewählte Arbeiten",
  "portfolio.title": "Einige meiner Projekte",
  "project.metroLabel": "Python-Desktop-App",
  "project.metroTitle": "Metro-Passagier-Anzeigesystem",
  "project.metroPoint1": "Eine GUI erstellt, die eine Metroanzeige simuliert",
  "project.metroPoint2": "Dynamische Stations- und Fahrgastinformationen verarbeitet",
  "project.metroPoint3": "Auf Benutzerfreundlichkeit und klare visuelle Darstellung fokussiert",
  "project.numericalLabel": "Webanwendung",
  "project.numericalTitle": "Website für numerische Analyse",
  "project.numericalPoint1": "Methoden wie Bisektion und Newton-Raphson implementiert",
  "project.numericalPoint2": "Mathematische Logik in browserbasierte Werkzeuge übertragen",
  "project.numericalPoint3": "Mit einer einfachen und zugänglichen Frontend-Struktur entwickelt",
  "project.bmiLabel": "Responsive Website",
  "project.bmiTitle": "Website für BMI-Rechner",
  "project.bmiPoint1": "Für Klarheit und schnelle Interaktion gestaltet",
  "project.bmiPoint2": "Auf sofortige und gut lesbare Ergebnisanzeige fokussiert",
  "project.bmiPoint3": "So aufgebaut, dass sie auf verschiedenen Bildschirmgrößen gut funktioniert",
  "project.githubButton": "GitHub",
  "project.liveButton": "Live-Demo",
  "resume.kicker": "Lebenslauf-Highlights",
  "resume.title": "Ausbildung und Zertifikate",
  "education.title": "Ausbildung",
  "education.item1Date": "Sept. 2023 - Juni 2027",
  "education.item1Degree": "Bachelorabschluss in Informatik",
  "education.item1School": "Modern University for Technology & Information, Kairo, Ägypten",
  "education.item1Gpa": "Notendurchschnitt: 3,00 / 4,00",
  "education.item2Date": "Jan. 2022 - Juni 2023",
  "education.item2Degree": "Bachelorabschluss im Bauingenieurwesen (nicht abgeschlossen)",
  "education.item2School": "University of Garden City, Khartum, Sudan",
  "interests.title": "Interessen",
  "interests.item1": "Tech-Events",
  "interests.item2": "Tech-Inhalte",
  "interests.item3": "Astronomie",
  "certifications.title": "Zertifikate",
  "certifications.python": "Python-Grundlagen",
  "certifications.hcia": "HCIA-AI v4.0",
  "certifications.german": "Deutsch A1",
  "certifications.flutter": "Einführung in Flutter",
  "certifications.git": "Git",
  "contact.kicker": "Kontakt",
  "contact.title": "Alles, was Sie brauchen, um mich zu finden.",
  "contact.locationLabel": "Standort",
  "contact.locationValue": "Ägypten, Kairo",
  "contact.onlineTitle": "Online finden",
  "contact.linkedinText": "Kontaktieren Sie mich auf LinkedIn",
  "contact.githubText": "Schauen Sie sich mein GitHub an",
  "contact.emailLabel": "E-Mail",
  "contact.phoneLabel": "Telefon",
  "footer.copy": "© Mohamad Omar Aboghalon Portfolio"
}
  };

  var storageKey = "portfolio-language";
  var translatableNodes = document.querySelectorAll("[data-i18n]");
  var languageButtons = document.querySelectorAll("[data-language-option]");

  function applyLanguage(lang) {
    var selectedLanguage = translations[lang] ? lang : "en";
    var dictionary = translations[selectedLanguage];

    translatableNodes.forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      var value = dictionary[key];

      if (typeof value === "undefined") {
        return;
      }

      var attribute = node.getAttribute("data-i18n-attr");
      if (attribute) {
        node.setAttribute(attribute, value);
      } else {
        node.textContent = value;
      }
    });

    document.documentElement.lang = selectedLanguage;

    languageButtons.forEach(function (button) {
      var isActive = button.getAttribute("data-language-option") === selectedLanguage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    window.localStorage.setItem(storageKey, selectedLanguage);
  }

  languageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyLanguage(button.getAttribute("data-language-option"));
    });
  });

  var savedLanguage = window.localStorage.getItem(storageKey);
  var browserLanguage = (navigator.language || "en").toLowerCase().indexOf("de") === 0 ? "de" : "en";
  applyLanguage(savedLanguage || browserLanguage);
})();
