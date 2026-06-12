const COLUMN_COUNT = 12

/** Development-only column overlay to help match the Figma grid. */
const DevGrid = () => (
  <div className="devGrid w-full container py-0" aria-hidden="true">
    <div className="grid h-full grid-cols-4 gap-x-4 md:grid-cols-12 md:gap-x-6">
      {Array.from({ length: COLUMN_COUNT }, (_, i) => (
        <div className="col col-span-1" key={`dev-grid-col-${i}`} />
      ))}
    </div>
  </div>
)

export default DevGrid
