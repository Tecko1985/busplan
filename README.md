# Busplan (v1.0)

Bus-/Transportplanung für die Auswärtsspiele der Nachwuchsmannschaften des
1. SC 1911 Heiligenstadt — Teil der
[Tools-Übersicht](https://tecko1985.github.io/ToolsUebersicht/).

Löst die bisherige Excel „Busse Frühjahr/Herbst“ ab: je Mannschaft eine Liste der
Auswärtsspiele mit dem Status je Transport-Option (Stadtbus, Busunternehmen,
vereinseigene Busse, Eltern/Privatfahrer, Leihwagen).

Alle eingeloggten Nutzer können den Plan einsehen; **Bearbeiten dürfen
Administratoren und Mitglieder der Gruppe „Busplan Bearbeiter“** (Pflege in der
Tools-Übersicht-Benutzerverwaltung).

## Bedienung

- **Übersicht** — Kennzahlen (Zusagen/Absagen/offene Punkte) und eine Tabelle je
  Mannschaft; Klick auf eine Zeile springt in den Busplan der Mannschaft.
- **Busplan** — Mannschaft oben auswählen, darunter die Spiele als Tabelle mit
  einer Spalte je Bus-Option der Mannschaft. Klick auf einen Status-Chip setzt
  Zusage/Absage/offen/in Klärung/Unter Vorbereitung + optionale Notiz (z. B. für
  eine gemeinsame Fahrt mit einer anderen Mannschaft).
- **Liste** — alle Spiele aller Mannschaften, filterbar nach Mannschaft und
  Textsuche (handyfreundlich).
- **Einstellungen** — Saison anlegen/duplizieren/löschen, Bus-Optionen der
  aktuellen Saison pflegen, Mannschaften über „+ Mannschaft“ im Busplan-Tab.

Mannschaften und Bus-Optionen sind pro Saison frei konfigurierbar, da sich das
Angebot (Busunternehmen, Jugendmannschaften) von Halbjahr zu Halbjahr ändert.

## Technik

Vanilla-JS-App (kein Build-Step), Anmeldung & Speicherung laufen über das zentrale
ToolsUebersicht-Login-Gateway (`admin-worker.js`), das die Daten serverseitig in der
Vereins-Nextcloud ablegt (`busplan.json`). Kein separates Passwort im Client;
gleichzeitige Änderungen von zwei Geräten werden erkannt und gemeldet.

- `index.html`, `app.js`, `db.js`, `config.js`, `style.css` — die App

## Erstbefüllung

Die reale Frühjahr-2026-Datenlage (Trainer, echte Spieltermine) enthält
Personendaten und liegt daher **nicht** im Repository. Als berechtigter Nutzer
anmelden, Tab **Busplan** → „Datendatei auswählen…“ (erscheint, solange die
Saison noch keine Mannschaft hat) → die separat bereitgestellte Seed-JSON wählen.
Danach wird der Plan ausschließlich in der App gepflegt.
