const APP_VERSION = "1.4";

// Gruppen-Id (Tools-Übersicht-Benutzerverwaltung) für Nutzer ohne Admin-Status,
// die den Busplan trotzdem bearbeiten dürfen. Mitgliederpflege dort, nicht hier.
const EDITOR_GROUP_ID = "busplan-bearbeiter";

// Startsaison, falls im Gateway noch nichts liegt.
const DEFAULT_SEASON = "Fruehjahr-2026";

// Status-Werte je Spiel/Bus-Option — Reihenfolge bestimmt die Dropdown-Reihenfolge.
const STATUS_WERTE = [
  { id: "", label: "—", farbe: "#c7ccd6" },
  { id: "zusage", label: "Zusage", farbe: "#2d8c4e" },
  { id: "absage", label: "Absage", farbe: "#c0392b" },
  { id: "offen", label: "offen", farbe: "#c9941f" },
  { id: "klaerung", label: "in Klärung", farbe: "#d2691e" },
  { id: "vorbereitung", label: "Unter Vorbereitung", farbe: "#6b7280" }
];

// Startbestand an Bus-Optionen — keine Personendaten. Echte Trainer/Spieltermine
// kommen ausschließlich per einmaligem Cloud-Import in die Nextcloud, nie ins Repo.
const DEFAULT_BUSOPTIONEN = [
  { id: "stadtbus", name: "Stadtbus", regeln: "" },
  { id: "villa-lampe", name: "Villa Lampe", regeln: "" },
  { id: "laerz-weiss", name: "Lärz & Weiß", regeln: "" },
  { id: "sch-bus-hig", name: "SCH-Bus HIG SC911", regeln: "" },
  { id: "sch-bus-eic", name: "SCH-Bus EIC SC911", regeln: "" },
  { id: "eltern", name: "Eltern / Privatfahrer", regeln: "" },
  { id: "vw-autohaus", name: "VW Autohaus (Leihwagen)", regeln: "" }
];

// Startbestand an Mannschaften (Name/Liga sind keine Personendaten). Trainer und
// tatsächliche Spieltermine kommen per Cloud-Import (siehe oben) — hier bewusst leer.
const DEFAULT_TEAMS = [
  { id: "a-jugend", name: "A-Jugend", liga: "Verbandsliga", busOptionIds: ["stadtbus", "villa-lampe", "sch-bus-hig", "sch-bus-eic", "eltern"] },
  { id: "b-jugend", name: "B-Jugend", liga: "Verbandsliga", busOptionIds: ["stadtbus", "villa-lampe", "sch-bus-hig", "sch-bus-eic", "eltern", "vw-autohaus"] },
  { id: "c-jugend", name: "C-Jugend", liga: "Verbandsliga", busOptionIds: ["stadtbus", "laerz-weiss", "villa-lampe", "sch-bus-hig", "sch-bus-eic", "eltern"] },
  { id: "c2-jugend", name: "C2-Jugend", liga: "Kreisoberliga", busOptionIds: ["stadtbus", "laerz-weiss", "villa-lampe", "sch-bus-hig", "sch-bus-eic", "eltern"] },
  { id: "d1-jugend", name: "D1-Jugend", liga: "Verbandsliga", busOptionIds: ["stadtbus", "laerz-weiss", "villa-lampe", "sch-bus-hig", "sch-bus-eic", "eltern", "vw-autohaus"] },
  { id: "d2-jugend", name: "D2-Jugend", liga: "Verbandsliga", busOptionIds: ["stadtbus", "laerz-weiss", "villa-lampe", "sch-bus-hig", "sch-bus-eic", "eltern"] }
];

const APP_CHANGELOG = [
  {
    version: "1.4",
    groups: [
      {
        title: "Navigation",
        items: [
          "„Zurück zum Dashboard“ ist jetzt ein Button direkt in der blauen Kopfzeile (mittig), statt eines separaten Links darüber."
        ]
      }
    ]
  },
  {
    version: "1.3",
    groups: [
      {
        title: "Bus-Regeln als eigener Tab",
        items: [
          "Bus-Optionen und ihre Regeln stehen jetzt in einem eigenen Tab „Bus-Regeln“ statt in den Einstellungen — für alle eingeloggten Nutzer einsehbar, bearbeiten dürfen weiterhin nur Admin und die Gruppe „Busplan Bearbeiter“."
        ]
      }
    ]
  },
  {
    version: "1.2",
    groups: [
      {
        title: "Regeln je Bus-Option",
        items: [
          "In den Einstellungen kann zu jeder Bus-Option ein Freitext mit Regeln hinterlegt werden (z. B. Buchungsfrist, maximale Personenzahl, Abfahrtsort).",
          "Ist eine Regel hinterlegt, erscheint ein ℹ️-Hinweis an der jeweiligen Spalte im Busplan-Gitter — der Regeltext steht als Tooltip dahinter."
        ]
      }
    ]
  },
  {
    version: "1.1",
    groups: [
      {
        title: "Konflikt-Prüfung",
        items: [
          "Nutzen zwei Mannschaften dieselbe Bus-Option am selben Tag (z. B. Stadtbus), wird das als Konflikt markiert — als Warn-Symbol direkt am Status im Busplan-Gitter und gesammelt in einer neuen Übersichts-Karte.",
          "Beim Setzen eines Status auf einen bereits belegten Tag/Bus erscheint zusätzlich eine Sicherheitsabfrage (kann bei Bedarf trotzdem gespeichert werden, z. B. bei einer bewusst gemeinsamen Fahrt)."
        ]
      }
    ]
  },
  {
    version: "1.0",
    groups: [
      {
        title: "Busplan",
        items: [
          "Löst die Excel „Busse Frühjahr 2026“ ab: je Mannschaft eine Liste der Auswärtsspiele mit Status je Transport-Option (Stadtbus, Busunternehmen, vereinseigene Busse, Eltern, Leihwagen).",
          "Mehrere Saisons planbar (Saison anlegen/duplizieren/löschen), wie von Personalkosten/Vereinsbudget gewohnt.",
          "Mannschaften und Bus-Optionen sind frei konfigurierbar, da sich das Angebot von Saison zu Saison ändert."
        ]
      },
      {
        title: "Bearbeiten (Admin & Gruppe „Busplan Bearbeiter“)",
        items: [
          "Mannschaften, Spiele und Bus-Optionen anlegen, ändern und löschen.",
          "Status je Spiel und Bus-Option setzen (Zusage/Absage/offen/in Klärung/Unter Vorbereitung) inkl. optionaler Notiz — z. B. für eine gemeinsame Fahrt mit einer anderen Mannschaft.",
          "Alle übrigen eingeloggten Nutzer sehen den Plan nur an."
        ]
      },
      {
        title: "Daten & Speicherung",
        items: [
          "Einmaliger Import des bestehenden Excel-Plans (als JSON) je Saison per Knopfdruck.",
          "Automatische Nextcloud-Synchronisierung über die zentrale Anmeldung (Tools-Übersicht) — kein separates Passwort nötig; gleichzeitige Änderungen von zwei Geräten werden erkannt und gemeldet."
        ]
      }
    ]
  }
];
