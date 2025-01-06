import Link from 'next/link';

function EnergyOptionCard({ energyType, provider, location, id }) {
  // Check if the id is a valid URL or fallback if needed
  if (!id) {
    return <div className="energy-option-card">Error: Invalid URL</div>; // Fallback message
  }

  return (
    <Link href={id} passHref className="energy-option-card">
        <h3>{energyType}</h3>
        <p><strong>Provider:</strong> {provider}</p>
        <p><strong>Location:</strong> {location}</p>
    </Link>
  );
}

export default EnergyOptionCard;


