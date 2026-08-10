/* A dictionary maps an English source string to its translation. Every entry is
   optional by construction: a key that is absent renders as the English it was
   keyed by, so a dictionary is never "incomplete" in a way that breaks a page.

   Two rules the translations follow, both from the source copy:

   - Chemical names, grade names and the Cosmox™ mark are not translated. A
     buyer searching for "Aluminium Hypophosphite" needs to find it under that
     name in every market, and a translated blurb keeps the substance list in
     the original with only the surrounding sentence localised.
   - Division numbers (01…10) and the ISO/REACH-style compliance names stay as
     they are for the same reason. */

export type Dict = Record<string, string>;
