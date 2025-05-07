import React from "react";
import "./team.css";

export default function Team() {
  

  return (
    <div className="vehicle-wrapper">

    

    {/* Main Content */}
    <main className="vehicle-container">
      {/* PPF Section */}
      <section className="vehicle-section">
        <h2 className="vehicle-section__title">Paint Protection Film (PPF) Process</h2>
        <div className="vehicle-section__content">
          <p>
            <strong>Paint Protection Film (PPF)</strong>, or clear bra, is a transparent urethane film that protects your vehicle’s paint from scratches, chips, UV rays, and debris. Its self-healing properties fix minor scratches with heat.
          </p>
          <h3>Steps for PPF Application</h3>
          <ol>
            <li><strong>Surface Prep</strong>: Wash, correct paint, decontaminate with clay bar and IPA.</li>
            <li><strong>Film Cutting</strong>: Use CAD software or manual cuts for precision.</li>
            <li><strong>Application</strong>: Apply wet with squeegee; wrap edges for seamless finish.</li>
            <li><strong>Curing</strong>: Cure for 24–48 hours in a clean environment.</li>
            <li><strong>Inspection</strong>: Resolve minor flaws with heat.</li>
          </ol>
          <h3>Maintenance Tips</h3>
          <ul>
            <li>Wash every 60–90 days with pH-neutral shampoo.</li>
            <li>Avoid automatic car washes.</li>
            <li>Use heat to heal minor scratches.</li>
          </ul>
          <p><strong>Duration</strong>: 5–10 years, up to 15 with 3M or XPEL.</p>
        </div>
        <div className="vehicle-gallery">
          <div className="vehicle-gallery__item">
          <img src="https://img.freepik.com/free-photo/selective-focus-shot-man-cleaning-car-s-back-headlight-with-microfiber-cloth_181624-46344.jpg?t=st=1746608554~exp=1746612154~hmac=b95bd9718bcd5f81c4aa298c6a66812de3e9f9e5c13827c062ab2c3a2a7588b7&w=740" alt="Before PPF" />


            <p>Before</p>
          </div>
          <div className="vehicle-gallery__item">
            <img src="https://via.placeholder.com/400x300?text=After+PPF" alt="After PPF" />
            <p>After</p>
          </div>
        </div>
      </section>

      {/* Ceramic Coating Section */}
      <section className="vehicle-section">
        <h2 className="vehicle-section__title">Ceramic Coating Process</h2>
        <div className="vehicle-section__content">
          <p>
            <strong>Ceramic coating</strong> is a liquid polymer that bonds with paint, creating a glossy, hydrophobic layer to repel water, UV rays, and dirt.
          </p>
          <h3>Steps for Ceramic Coating</h3>
          <ol>
            <li><strong>Surface Prep</strong>: Wash, clay, and polish surface.</li>
            <li><strong>Application</strong>: Apply in small sections with crosshatch pattern.</li>
            <li><strong>Buffing</strong>: Remove excess with microfiber towels.</li>
            <li><strong>Curing</strong>: Initial cure in 24–48 hours; full bond in 7 days.</li>
            <li><strong>Inspection</strong>: Fix streaks or reapply if needed.</li>
          </ol>
          <h3>Maintenance Tips</h3>
          <ul>
            <li>Wash biweekly with pH-neutral shampoo.</li>
            <li>Avoid harsh chemicals.</li>
            <li>Reapply maintenance spray every 1–2 years.</li>
          </ul>
          <p><strong>Duration</strong>: 2–5 years with proper upkeep.</p>
        </div>
        <div className="vehicle-gallery">
          <div className="vehicle-gallery__item">
            <img src="https://via.placeholder.com/400x300?text=Before+Ceramic" alt="Before Ceramic" />
            <p>Before</p>
          </div>
          <div className="vehicle-gallery__item">
            <img src="https://via.placeholder.com/400x300?text=After+Ceramic" alt="After Ceramic" />
            <p>After</p>
          </div>
        </div>
      </section>

      {/* Color Wrapping Section */}
      <section className="vehicle-section">
        <h2 className="vehicle-section__title">Color Wrapping Process</h2>
        <div className="vehicle-section__content">
          <p>
            <strong>Color wrapping</strong> uses vinyl film to customize your vehicle’s look while offering moderate paint protection.
          </p>
          <h3>Steps for Color Wrapping</h3>
          <ol>
            <li><strong>Prep</strong>: Clean and fix minor surface issues.</li>
            <li><strong>Design</strong>: Select color/texture; cut vinyl with plotters.</li>
            <li><strong>Application</strong>: Apply with heat guns to shape curves.</li>
            <li><strong>Post-Heat</strong>: Set adhesive and inspect.</li>
            <li><strong>Finish</strong>: Clean residue for a polished look.</li>
          </ol>
          <h3>Maintenance Tips</h3>
          <ul>
            <li>Hand wash with mild soap.</li>
            <li>Park in shade to prevent fading.</li>
            <li>Remove wraps professionally.</li>
          </ul>
          <p><strong>Duration</strong>: 3–7 years.</p>
        </div>
        <div className="vehicle-gallery">
          <div className="vehicle-gallery__item">
            <img src="https://via.placeholder.com/400x300?text=Before+Wrap" alt="Before Wrap" />
            <p>Before</p>
          </div>
          <div className="vehicle-gallery__item">
            <img src="https://via.placeholder.com/400x300?text=After+Wrap" alt="After Wrap" />
            <p>After</p>
          </div>
        </div>
      </section>

      {/* Ethical Practices Section */}
      <section className="vehicle-section">
        <h2 className="vehicle-section__title">Ethical Practices</h2>
        <div className="vehicle-section__content">
          <p>Responsible providers prioritize quality and transparency:</p>
          <ol>
            <li><strong>Transparency</strong>: Clear pricing and warranty terms.</li>
            <li><strong>Quality</strong>: Use trusted brands like 3M, XPEL; certified installers.</li>
            <li><strong>Education</strong>: Provide customer guides and demos.</li>
            <li><strong>Eco-Friendly</strong>: Recycle vinyl, use safe products.</li>
            <li><strong>Labor Ethics</strong>: Fair wages and training.</li>
          </ol>
        </div>
      </section>

      {/* Combo Section */}
      <section className="vehicle-section">
        <h2 className="vehicle-section__title">Combining PPF and Ceramic Coating</h2>
        <div className="vehicle-section__content">
          <p>
            Apply <strong>PPF</strong> to high-impact areas and <strong>ceramic coating</strong> over the entire vehicle for maximum protection. Ensure compatibility. Lasts 7–10 years.
          </p>
        </div>
      </section>

      {/* Why Professional Section */}
      <section className="vehicle-section">
        <h2 className="vehicle-section__title">Why Choose Professional Services?</h2>
        <div className="vehicle-section__content">
          <ul>
            <li><strong>Precision</strong>: Skilled installers ensure flawless application.</li>
            <li><strong>Warranty</strong>: 5–10 years for defects.</li>
            <li><strong>Durability</strong>: Professional work extends product life.</li>
            <li><strong>Resale</strong>: Protected vehicles retain higher value.</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      
    </main>

    {/* Footer */}
 
  </div>
      
  );
}
