import Map from "@/app/components/map";
import { database } from "@/lib/mongo";
import LocationModel from "@/models/locationModel";
import VanModel from "@/models/vanModel";
import BusinessHoursModel from "@/models/businessHoursModel";
import { Location } from "../types/location";
import { BusinessHours } from "../types/business-hours";
import moment from "moment";

type VanInfo = {
    name: string;
    businessHours: BusinessHours[];
}

type LocationWithVanInfo = Location & { vansInfo: VanInfo[] }

const PopUpLocations = async () => {
    await database();
    let locations = await LocationModel.find();

    const getVanInfo = async (vanId: string, locationId: string) => {
        const van = await VanModel.findOne({ _id: { $eq: vanId } }, { _id: 0, name: 1 });
        const businessHours = await BusinessHoursModel.find({ vanId: { $eq: vanId }, locationId: { $eq: locationId } }, { _id: 0, vanId: 0, locationId: 0 });
        return {
            name: van.name,
            businessHours,
        }
    };

    const locationsInfo: LocationWithVanInfo[] = await Promise.all(
        locations.map(async (location: Location) => {
            const vansInfoPromises = location.vanIds.map((vanId) => getVanInfo(vanId, location._id));
            const resolvedVanInfo = await Promise.all(vansInfoPromises);
            return { ...location._doc, vansInfo: resolvedVanInfo };
        })
    );

    return (
        <main className="md:container md:mx-auto mb-20">
            <section className="py-12 px-8 lg:px-40">
                <h1 className='text-2xl lg:text-4xl text-center font-semibold underline decoration-[#f04637] mb-5'>Where To Find Us</h1>
                <p className='text-base text-center'>
                    Welcome to the tasty treasure map of Sultan Catering! If you&apos;ve got an appetite as big as your dreams, you&apos;ve come to the right place. Our fabulous food vans are rolling out deliciousness across town, serving up mouthwatering meals that&apos;ll make your taste buds do a happy dance!
                </p>
            </section>

            {locationsInfo.map((locationInfo) => (
                <section key={locationInfo._id} className="flex flex-col md:flex-row gap-8 lg:gap-0 justify-between items-start md:items-center p-4 pt-0 px-8 lg:px-4 mb-6 md:mb-12">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h2 className='text-lg lg:text-2xl font-semibold mb-1'>Address</h2>
                            <p className="text-lg font-semibold">{locationInfo.address1}</p>
                            <p className="text-lg">{locationInfo.address2 && `${locationInfo.address2}, `}{locationInfo.city}{locationInfo.county && `, ${locationInfo.county}`}</p>
                            <p className="text-lg">{locationInfo.postalCode}</p>
                        </div>
                        {locationInfo.vansInfo.map((vanInfo) => (
                            <div key={vanInfo.name}>
                                <h2 className='text-lg lg:text-2xl font-semibold mb-1 underline decoration-[#f04637]'>{vanInfo.name}</h2>
                                <div>
                                    <h2 className='text-lg font-semibold mb-1'>Working Schedule</h2>
                                    <table>
                                        <tbody>
                                            {vanInfo.businessHours.map((businessDay, index) => (
                                                <tr key={index}>
                                                    <td className='pr-3'>
                                                        <p className="text-lg font-semibold">{moment().day(businessDay.day).format('dddd')}</p>
                                                    </td>
                                                    <td>
                                                        <p className="text-lg whitespace-nowrap">
                                                            {moment().hour(parseInt(businessDay.openTime.split(`:`)[0])).format('h')}
                                                            {parseInt(businessDay.openTime.split(`:`)[1]) > 0 && (
                                                                `:${moment().minute(parseInt(businessDay.openTime.split(`:`)[1])).format('mm')}`
                                                            )}
                                                            {moment().hour(parseInt(businessDay.openTime.split(`:`)[0])).format(' a')}
                                                            {` - `}
                                                            {moment().hour(parseInt(businessDay.closeTime.split(`:`)[0])).format('h')}
                                                            {parseInt(businessDay.closeTime.split(`:`)[1]) > 0 && (
                                                                `:${moment().minute(parseInt(businessDay.closeTime.split(`:`)[1])).format('mm')}`
                                                            )}
                                                            {moment().hour(parseInt(businessDay.closeTime.split(`:`)[0])).format(' a')}
                                                        </p>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full md:w-9/12">
                        <Map address={locationInfo.mapLocation} />
                    </div>
                </section>
            ))}
        </main>
    )
};

export default PopUpLocations;
