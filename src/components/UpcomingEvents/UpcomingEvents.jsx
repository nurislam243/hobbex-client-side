import React from "react";

const UpcomingEvents = ({ sortedEvents }) => {
  return (
    <section className="bg-base-100">
      <div className="">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-primary">
          Upcoming Events
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sortedEvents.slice(0, 3).map((event) => (
            <div
  key={event._id}
  className="card bg-base-200 shadow-md rounded overflow-hidden hover:shadow-xl transition duration-300"
>
  <div className="relative h-56">
    <img
      src={event.imageURL}
      alt={event.groupName}
      className="w-full h-full object-cover"
    />

    {/* Overlay layer */}
    <div className="absolute inset-0 bg-black/50 text-white p-4 flex flex-col justify-end">
      <h3 className="text-lg font-bold">{event.groupName}</h3>
      <p className="text-sm">
        {event.hobbyCategory} •{" "}
        {new Date(event.startDate).toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
    </div>
  </div>

  {/* Description below image */}
  <div className="p-4 flex flex-col justify-between">
    <p className="text-base-content/80 text-sm mb-4">
      {event.description.length > 100
        ? `${event.description.slice(0, 100)}...`
        : event.description}
    </p>

    <div className="text-xs text-base-content/60">
      <p>
        <strong>Organizer:</strong> {event.userName}
      </p>
      <p>{event.userEmail}</p>
    </div>
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
