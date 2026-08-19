/* Still a server component: <T> is the only client thing in here, and it takes
   a string, so the footer's markup and its English copy both prerender. */

import Link from "next/link";
import BrandMark from "./BrandMark";
import T from "./T";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="bleed">
        <div className="foot__grid">
          <div>
            <Link className="brand" href="/">
              <BrandMark id="foot" />
              <span className="brand__name">
                Cosmox<span>Chemicals</span>
              </span>
            </Link>
            <p style={{ maxWidth: "34ch" }}>
              <T>
                Advanced chemical manufacturing and export — enabling industrial
                efficiency, safety and sustainability worldwide.
              </T>
            </p>
          </div>
          <div>
            <h4><T>Company</T></h4>
            <ul>
              <li><Link href="/about"><T>About us</T></Link></li>
              <li><Link href="/capabilities"><T>Capabilities</T></Link></li>
              <li><Link href="/rnd"><T>Research &amp; development</T></Link></li>
              <li><Link href="/innovation"><T>Innovation</T></Link></li>
              <li><Link href="/sustainability"><T>Sustainability</T></Link></li>
            </ul>
          </div>
          <div>
            <h4><T>Offering</T></h4>
            <ul>
              <li><Link href="/divisions"><T>Business units</T></Link></li>
              <li><Link href="/products"><T>Products</T></Link></li>
              <li><Link href="/finder"><T>Product finder</T></Link></li>
              <li><Link href="/industries"><T>Industries</T></Link></li>
              <li><Link href="/applications"><T>Applications</T></Link></li>
              <li><Link href="/contact"><T>Contact</T></Link></li>
            </ul>
          </div>
          <div>
            <h4><T>Get in touch</T></h4>
            <p>
              A2/N-59, 18/A,B,C/1, C/2, B/5, B/6<br />
              Ekta Industrial Estate, Tempa Gali<br />
              N.H. 8, Mangrol, Pipodara<br />
              {/* the address is a postal address — it is not translated, it has
                  to be readable by the courier who delivers to it */}
              Surat, Gujarat 394110, India
            </p>
            <p>
              <a href="tel:+919265943799">+91 92659 43799</a> &middot;{" "}
              <a href="tel:+918758194050">+91 87581 94050</a>
            </p>
          </div>
        </div>
        <div className="foot__note">
          <span>
            &copy; {new Date().getFullYear()} Cosmox International Pvt. Ltd.{" "}
            <T>All rights reserved.</T>
          </span>
          <span><T>Manufacturer &amp; exporter of speciality chemicals</T></span>
        </div>
      </div>
    </footer>
  );
}
