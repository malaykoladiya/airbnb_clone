import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import Image from "next/image";
import Link from "next/link";

import apiService from "@/app/services/apiService";
import { getUserId } from "@/app/lib/actions";

const PropertyDetailPage = async ({ params }: { params: { id: string } }) => {
  const property = await apiService.get(`/api/properties/${params.id}`);
  const userId = await getUserId();

  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          fill
          src="/tinyhomes_1.jpg"
          className="w-full h-full object-cover"
          alt="Tiny Home"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap 4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className=" mb-4 text-4xl"> {property.title}</h1>
          <span className="mb-6 block text-lg text-gray-600">
            {property.guests} guests - {property.bedrooms} bedrooms -{" "}
            {property.bathrooms} bathrooms
          </span>
          <hr />
          <Link
            href={`/hosts/${property.landlord.id}`}
            className="py-6 flex items-center space-x-4"
          >
            {property.landlord.avatar_url && (
              <Image
                src={property.landlord.avatar_url}
                alt="Profile Pic"
                width={50}
                height={50}
                className="rounded-full"
              />
            )}
            <p>
              <strong>{property.landlord.name}</strong> is your host
            </p>
          </Link>

          <hr />

          <p className="mt-6 text-lg">{property.description}</p>
        </div>

        <div className="py-6 pl-6 col-span-2">
          <ReservationSidebar userId={userId} property={property} />
        </div>
      </div>
    </main>
  );
};

export default PropertyDetailPage;
