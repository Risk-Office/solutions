import { trackingItems, updateItems } from "~/data/tracking";
import { Button } from "~/components/ui/button";

const Tracking = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_23rem] 2xl:grid-cols-[1fr_26rem] gap-2 w-full h-full">
      {/* Left side - Table */}
      <div className="flex flex-col items-stretch overflow-hidden h-full">
        <div className="w-full bg-white rounded-lg h-full overflow-y-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold">Title</th>
                  <th className="text-left py-3 px-4 font-semibold">Type</th>
                  <th className="text-left py-3 px-4 font-semibold">Last Update</th>
                  <th className="text-left py-3 px-4 font-semibold">Expected Update</th>
                </tr>
              </thead>
              <tbody>
                {trackingItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="py-3 px-4">{item.title}</td>
                    <td className="py-3 px-4">{item.type}</td>
                    <td className="py-3 px-4">{item.lastUpdate}</td>
                    <td className="py-3 px-4">{item.expectedUpdate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right side - Updates */}
      <div className="bg-white p-3 rounded-lg flex flex-col items-stretch h-full overflow-auto">
        <div className="flex items-center justify-between">
        <h1>Fire at Costco Moondoor</h1>

        <Button variant="text" className="text-sm text-primary">Updates</Button>
        </div>
        <div className="flex flex-col gap-4">
          {updateItems.map((update) => (
            <div key={update.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold">{update.title}</h3>
                  <span className="text-sm text-gray-500">Updates</span>
                </div>
                
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">{update.type}</span>
                  <span className="text-sm text-gray-500">{update.date}</span>
                </div>

                <p className="text-sm text-gray-600">{update.description}</p>

                <div className="flex flex-wrap gap-2">
                  {update.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button variant="default" className="w-full">
                  READ FULL DETAIL
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tracking;
