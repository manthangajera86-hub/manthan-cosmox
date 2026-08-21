import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Organic & Pharmaceutical Intermediates — Business Units — Cosmox Chemicals" },
  description: "Manufacture and export of high-purity organic intermediates for pharmaceutical, agrochemical and industrial chemical applications.",
};

export default function Page() {
  return (
    <TopicPage family="divisions" slug="organic-pharmaceutical-intermediates">
      <div><h4>Products</h4><ul className="list"><li>N-Methyl-2-pyrrolidone</li><li>[1,2,4]Triazolo[4,3-a]pyridin-3(2H)-one</li><li>Diphenyl ether</li><li>Methyl 2-[(3S)-3-[3-[(1E)-2-(7-chloro-2-quinolinyl)ethenyl]phenyl]-3-hydroxypropyl]benzoate</li><li>N-[5-(Diphenylphosphinoylmethyl)-4-(4-fluorophenyl)-6-isopropylpyrimidin-2-yl]-N-methylmethanesulfonamide</li><li>2,3-Dichlorobenzoyl chloride</li><li>2-Azaspiro[4.5]decan-3-one</li><li>(R)-(-)-3-Carbamoymethyl-5-methylhexanoic acid</li><li>3-Carbamoymethyl-5-methylhexanoic acid</li><li>3-(Aminomethyl)-5-methylhexanoic acid</li><li>3-Isobutylglutaric acid</li><li>4-Chloro-2,6-Diaminopyrimidine</li><li>2-Chloro-3,5-difluoropyridine</li><li>4-Chloro-2-fluoro-5-nitroaniline</li><li>2-Chloro-4-(trifluoromethyl)pyrimidine</li><li>4-Bromo-2,6-difluoroaniline</li><li>2,4-Dichlorophenoxyacetic acid</li><li>2-Aminophenol-4-sulfonic acid</li><li>N,N-Dimethylformamide dimethyl acetal</li><li>Ethyl 2-bromopropionate</li><li>1-(2-Bromoethoxy)-2-ethoxybenzene</li><li>Toluene-2,5-diamine sulfate</li><li>Cyclopropanecarboxamide</li></ul></div>
      <div><h4>Applications</h4><ul className="list"><li>Pharmaceutical synthesis and research</li><li>Agrochemical intermediate production</li><li>Fine chemicals and industrial formulations</li></ul></div>
      <div><h4>Capabilities</h4><ul className="list"><li>High-purity chemical synthesis</li><li>Custom molecular and batch development</li><li>Lab-to-commercial scale-up</li><li>Process optimisation for reproducibility</li></ul></div>
      <div><h4>Export &amp; R&amp;D</h4><ul className="list"><li>Fully export-ready with international compliance</li><li>Custom packaging for sensitive or high-value chemicals</li><li>Tailored research support for client-specific intermediates</li><li>Innovation in high-purity, application-specific molecules</li></ul></div>
    </TopicPage>
  );
}
