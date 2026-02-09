export default function Home() {
  return (
    <main style={{ backgroundColor: "#020617", color: "#e5e7eb", minHeight: "100vh", padding: "4rem" }}>
      <section style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Waters Estates</h1>
        <p style={{ fontSize: "1.25rem", maxWidth: "700px", marginBottom: "2rem" }}>
          Waters Estates is a privately held real estate investment firm focused on residential and multifamily acquisitions through
          professional, transparent, and flexible deal structures.
        </p>

        <h2 style={{ fontSize: "2rem", marginTop: "3rem", marginBottom: "1rem" }}>About Waters Estates</h2>
        <p style={{ maxWidth: "800px", lineHeight: "1.6" }}>
          I started Waters Estates out of a passion for real estate and its ability to create lasting value. Beyond financial growth,
          my mission is to cultivate a career that combines entrepreneurship, investment, and meaningful impact—building generational
          wealth while celebrating the opportunity inherent in every property.
        </p>

        <h2 style={{ fontSize: "2rem", marginTop: "3rem", marginBottom: "1rem" }}>Residential Sellers</h2>
        <ul>
          <li>10% down payment at closing</li>
          <li>6-month interest-only note</li>
          <li>Balloon payoff at the end of term</li>
          <li>Property sold as-is</li>
        </ul>

        <h2 style={{ fontSize: "2rem", marginTop: "3rem", marginBottom: "1rem" }}>Multifamily Owners</h2>
        <ul>
          <li>Fixed monthly annuity-style payments</li>
          <li>Typically structured over 10 years</li>
          <li>Smaller final lump-sum payoff</li>
          <li>Secured by promissory note and lien</li>
        </ul>

        <p style={{ marginTop: "4rem", opacity: 0.7 }}>
          © {new Date().getFullYear()} Waters Estates
        </p>
      </section>
    </main>
  );
}

