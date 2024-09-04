import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db, storage } from "../firebase/firebase-config";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { formatTimeTo12Hour } from "../utils/formatTimeTo12Hrs";
import Loader from "../Components/Loader";
import { appContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { eventSchema } from "../Components/validations/eventValidations";
import convertTo24HourFormat from "../utils/formatTimeTo24Hrs";

export default function CreateEvent() {
  const { id } = useParams();
  const mode = id === "new" ? "add" : "edit";
  const {
    handleAddEventsUI,
    events,
    restoreEvents,
    handleEditEventUI,
    categories,
  } = useContext(appContext);

  const [imgFile, setImgFile] = useState();
  const eventsCollectionRef = collection(db, "events");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formattedTime, setFormattedTime] = useState({
    startTime: "",
    endTime: "",
  });
  const [eventForm, setEventForm] = useState(
    mode === "add"
      ? {
          title: "",
          host: "",
          location: "",
          price: "",
          startTime: "",
          endTime: "",
          startDate: "",
          endDate: "",
          description: "",
          isDeleted: false,
          imgUrl: "",
          categoryId: "5FPf3i6ZnHaGvCYqR5UW",
          tickets: "",
          // customId: uuid(),
        }
      : events.find((e) => e.id === id)
  );
  useEffect(() => {
    // function convertTo24HourFormat(time12h) {
    //   console.log(time12h);

    //   const [time, modifier] = time12h.split(" "); // Split the time and the AM/PM modifier
    //   let [hours, minutes] = time.split(":"); // Split the hours and minutes
    //   console.log(time, " |", modifier);

    //   if (hours === "12") {
    //     hours = "00"; // Convert 12 AM to 00 hours
    //   }

    //   if (modifier.toLowerCase() === "pm") {
    //     hours = (parseInt(hours, 10) + 12).toString(); // Convert PM hours to 24-hour format
    //   }

    //   return `${hours.padStart(2, "0")}:${minutes}`; // Return in HH:mm format, padding single digit hours with 0
    // }
    if (mode === "edit") {
      console.log("edit");

      let startTime24F = convertTo24HourFormat(eventForm.startTime);
      setEventForm((prevForm) => ({ ...prevForm, startTime: startTime24F }));

      let endTime24F = convertTo24HourFormat(eventForm.endTime);
      setEventForm((prevForm) => ({ ...prevForm, endTime: endTime24F }));
    }
  }, []);
  const [errors, setErrors] = useState({
    title: null,
    host: null,
    location: null,
    price: null,
    startTime: null,
    endTime: null,
    startDate: null,
    endDate: null,
    description: null,
    imgUrl: null,
    tickets: null,
  });

  // store value from inputs to fromEvent
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    if (name === "startTime" || name === "endTime") {
      console.log("aaa");

      setFormattedTime((prevFormatted) => ({
        ...prevFormatted,
        [name]: formatTimeTo12Hour(value),
      }));
      // e.target.blur();
    }
  };

  // create or update an event depends on mode
  const handleCreateEvent = async (e) => {
    e.preventDefault();
    setErrors((prevErrors) => ({
      title: null,
      host: null,
      location: null,
      price: null,
      startTime: null,
      endTime: null,
      startDate: null,
      endDate: null,
      description: null,
      imgUrl: null,
      tickets: null,
    }));
    // const eventsBeforeAdd = events;
    try {
      eventSchema.validateSync(eventForm, { abortEarly: false });
      try {
        if (mode === "add") {
          const docRef = await addDoc(eventsCollectionRef, {
            ...eventForm,
            startTime: formattedTime.startTime,
            endTime: formattedTime.endTime,
          });
          console.log(docRef);
          handleAddEventsUI({
            ...eventForm,
            id: docRef.id,
            startTime: formattedTime.startTime,
            endTime: formattedTime.endTime,
          });
          toast.success("Event added successfully");
        } else {
          console.log(id);
          console.log(formattedTime);

          const eventToBeUpdated = doc(db, "events", id);
          await updateDoc(eventToBeUpdated, {
            ...eventForm,
            startTime: !formattedTime.startTime
              ? formatTimeTo12Hour(eventForm.startTime)
              : formattedTime.startTime,
            endTime: !formattedTime.endTime
              ? formatTimeTo12Hour(eventForm.endTime)
              : formattedTime.endTime,
          });
          handleEditEventUI({
            ...eventForm,
            startTime: !formattedTime.startTime
              ? formatTimeTo12Hour(eventForm.startTime)
              : formattedTime.startTime,
            endTime: !formattedTime.endTime
              ? formatTimeTo12Hour(eventForm.endTime)
              : formattedTime.endTime,
          });
          toast.success("Event edited successfully");
        }
        navigate("/admin");
      } catch (err) {
        // restoreEvents(eventsBeforeAdd);
        if (mode === "add") toast.error("Failed to add event");
        else toast.error("Failed to edit event");
      }
    } catch (error) {
      error.inner.forEach((err) => {
        setErrors((prevErrors) => ({ ...prevErrors, [err.path]: err.message }));
      });
      console.dir(error);
    }
  };

  // take image file from input then convert it to url
  const handleUploadImage = (e) => {
    setLoading(true);
    const imagesRef = ref(storage, `images/${uuid()}`);
    uploadBytes(imagesRef, e.target.files[0]).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
        console.log(typeof url);
        // setEventImg((prevUrl) => (prevUrl = url));
        setEventForm((prevForm) => ({
          ...prevForm,
          imgUrl: url,
        }));

        setLoading(false);
      });
    });
  };
  console.log(eventForm);

  return (
    <div className="bg-bg-main px-6 pt-8 pb-4">
      <div className="w-full max-w-xx rounded-lg  px-6 2xl:px-40 xl:px-40 lg:px-40 md:px-20 pt-16 mb-8">
        <h2 className="text-[32px] text-white font-semibold mb-6">
          {mode === "add" ? "Create" : "Edit"} Event
        </h2>
        <form onSubmit={(e) => handleCreateEvent(e)}>
          {/* Event Image */}
          <div className="mb-4 relative">
            {/* <p className="absolute left-1/2 top-1/2 z-10 text-white">loading ...</p> */}
            <label
              className={`block mb-2 text-base font-medium ${
                errors.imgUrl ? "text-red-600" : "text-white"
              }`}
              htmlFor="eventTitle"
            >
              Event Image
            </label>
            <div
              className={`${
                errors.imgUrl ? "border border-red-600" : "border-0"
              } w-full h-56 bg-input rounded-xl flex items-center justify-center relative overflow-hidden`}
            >
              <input
                id="dropzone-file"
                type="file"
                onChange={handleUploadImage}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />

              {eventForm.imgUrl ? (
                <img
                  id="image-preview"
                  src={eventForm.imgUrl}
                  alt="Event"
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <img
                  id="image-preview"
                  src="/images/Placeholder.svg"
                  alt="Event"
                  className={
                    loading ? "hidden" : "w-full h-full object-cover rounded-xl"
                  }
                />
              )}
              {loading && <Loader />}
            </div>
            {errors.imgUrl && (
              <span className="text-xs text-red-600 p-1 rounded-md">
                {errors.imgUrl}
              </span>
            )}
          </div>
          {/* Event Title */}
          <div className="mb-4">
            <label
              className={`block mb-2 text-base font-medium ${
                errors.title ? "text-red-600" : "text-white"
              }`}
              htmlFor="eventTitle"
            >
              Event Title
            </label>
            <input
              className={`w-full px-4 py-3 bg-input text-white rounded-xl ${
                errors.title
                  ? "border border-red-600 outline-none"
                  : "focus:outline-none focus:ring-2 focus:ring-teal-500"
              }`}
              type="text"
              id="eventTitle"
              name="title"
              value={eventForm.title}
              onChange={(e) => handleChange(e)}
              placeholder="Enter event title"
              style={{ caretColor: "#4FE0D2" }}
            />
            {errors.title && (
              <span className="text-xs text-red-600 p-1 rounded-md">
                {errors.title}
              </span>
            )}
          </div>
          {/* Event Host */}
          <div className="mb-4">
            <label
              className={`block mb-2 text-base font-medium" ${
                errors.host ? "text-red-600" : "text-white"
              }`}
              htmlFor="eventHost"
            >
              Event Host
            </label>
            <input
              className={`w-full px-4 py-3 bg-input text-white rounded-xl ${
                errors.host
                  ? "border border-red-600 outline-none"
                  : "focus:outline-none focus:ring-2 focus:ring-teal-500"
              }`}
              type="text"
              id="eventHost"
              name="host"
              value={eventForm.host}
              onChange={(e) => handleChange(e)}
              placeholder="Enter event title"
              style={{ caretColor: "#4FE0D2" }}
            />
            {errors.host && (
              <span className="text-xs text-red-800 p-1 rounded-md">
                {errors.host}
              </span>
            )}
          </div>
          {/* Event Location */}
          <div className="mb-4">
            <label
              className={`block mb-2 text-base font-medium" ${
                errors.location ? "text-red-600" : "text-white"
              }`}
              htmlFor="eventLocation"
            >
              Event Location
            </label>
            <input
              className={`w-full px-4 py-3 bg-input text-white rounded-xl ${
                errors.location
                  ? "border border-red-600 outline-none"
                  : "focus:outline-none focus:ring-2 focus:ring-teal-500"
              }`}
              type="text"
              id="eventLocation"
              name="location"
              value={eventForm.location}
              onChange={(e) => handleChange(e)}
              placeholder="Enter event location"
              style={{ caretColor: "#4FE0D2" }}
            />
            {errors.location && (
              <span className="text-xs text-red-800 p-1 rounded-md">
                {errors.location}
              </span>
            )}
          </div>
          {/* Ticket Price */}
          <div className="mb-4">
            <label
              className={`block mb-2 text-base font-medium" ${
                errors.price ? "text-red-600" : "text-white"
              }`}
              htmlFor="ticketPrice"
            >
              Ticket Price
            </label>
            <input
              className={`w-full px-4 py-3 bg-input text-white rounded-xl ${
                errors.price
                  ? "border border-red-600 outline-none"
                  : "focus:outline-none focus:ring-2 focus:ring-teal-500"
              }`}
              type="number"
              id="ticketPrice"
              name="price"
              value={eventForm.price}
              onChange={(e) => handleChange(e)}
              placeholder="Enter ticket price"
              style={{ caretColor: "#4FE0D2" }}
            />
            {errors.price && (
              <span className="text-xs text-red-800 p-1 rounded-md">
                {errors.price}
              </span>
            )}
          </div>
          {/* Events Tickets */}
          <div className="mb-4">
            <label
              className={`block mb-2 text-base font-medium" ${
                errors.tickets ? "text-red-600" : "text-white"
              }`}
              htmlFor="tickets"
            >
              Number of tickets
            </label>
            <input
              className={`w-full px-4 py-3 bg-input text-white rounded-xl ${
                errors.tickets
                  ? "border border-red-600 outline-none"
                  : "focus:outline-none focus:ring-2 focus:ring-teal-500"
              }`}
              type="number"
              id="tickets"
              name="tickets"
              value={eventForm.tickets}
              onChange={(e) => handleChange(e)}
              placeholder="Enter number of tickets"
              style={{ caretColor: "#4FE0D2" }}
            />
            {errors.tickets && (
              <span className="text-xs text-red-800 p-1 rounded-md">
                {errors.tickets}
              </span>
            )}
          </div>

          {/* Event Category */}
          <div className="mb-4">
            <label
              htmlFor="categories"
              className="block mb-2 text-base font-medium text-white"
            >
              Choose a category
            </label>
            <select
              id="categories"
              name="categoryId"
              value={eventForm.categoryId}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-input text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          {/* Start Date and End Date */}
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label
                className={`block mb-2 text-base font-medium" ${
                  errors.startDate ? "text-red-600" : "text-white"
                }`}
                htmlFor="startDate"
              >
                Start Date
              </label>
              <input
                className={`w-full px-4 py-3 bg-input text-white rounded-xl ${
                  errors.startDate
                    ? "border border-red-600 outline-none"
                    : "focus:outline-none focus:ring-2 focus:ring-teal-500"
                }`}
                type="date"
                id="startDate"
                name="startDate"
                value={eventForm.startDate}
                onChange={(e) => handleChange(e)}
              />
              {errors.startDate && (
                <span className="text-xs text-red-800 p-1 rounded-md">
                  {errors.startDate}
                </span>
              )}
            </div>
            <div>
              <label
                className={`block mb-2 text-base font-medium" ${
                  errors.endDate ? "text-red-600" : "text-white"
                }`}
                htmlFor="endDate"
              >
                End Date
              </label>
              <input
                className={`w-full px-4 py-3 bg-input text-white rounded-xl ${
                  errors.endDate
                    ? "border border-red-600 outline-none"
                    : "focus:outline-none focus:ring-2 focus:ring-teal-500"
                }`}
                type="date"
                id="endDate"
                name="endDate"
                value={eventForm.endDate}
                onChange={(e) => handleChange(e)}
              />
              {errors.endDate && (
                <span className="text-xs text-red-800 p-1 rounded-md">
                  {errors.endDate}
                </span>
              )}
            </div>
          </div>
          {/* Start Time and End Time */}
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label
                className={`block mb-2 text-base font-medium" ${
                  errors.startTime ? "text-red-600" : "text-white"
                }`}
                htmlFor="startTime"
              >
                Start Time
              </label>
              <input
                className={`w-full px-4 py-3 bg-input text-white rounded-xl ${
                  errors.startTime
                    ? "border border-red-600 outline-none"
                    : "focus:outline-none focus:ring-2 focus:ring-teal-500"
                }`}
                type="time"
                id="startTime"
                name="startTime"
                value={eventForm.startTime}
                onChange={(e) => handleChange(e)}
              />
              {errors.startTime && (
                <span className="text-xs text-red-800 p-1 rounded-md">
                  {errors.startTime}
                </span>
              )}
            </div>
            <div>
              <label
                className={`block mb-2 text-base font-medium" ${
                  errors.endTime ? "text-red-600" : "text-white"
                }`}
                htmlFor="endTime"
              >
                End Time
              </label>
              <input
                className={`w-full px-4 py-3 bg-input text-white rounded-xl ${
                  errors.endTime
                    ? "border border-red-600 outline-none"
                    : "focus:outline-none focus:ring-2 focus:ring-teal-500"
                }`}
                type="time"
                id="endTime"
                name="endTime"
                value={eventForm.endTime}
                onChange={(e) => handleChange(e)}
              />
              {errors.endTime && (
                <span className="text-xs text-red-800 p-1 rounded-md">
                  {errors.endTime}
                </span>
              )}
            </div>
          </div>

          {/* Event Description */}
          <div className="mb-10">
            <label
              className={`block mb-2 text-base font-medium" ${
                errors.description ? "text-red-600" : "text-white"
              }`}
              htmlFor="eventDescription"
            >
              Event Description
            </label>
            <textarea
              className={`w-full px-4 py-3 bg-input text-white rounded-xl ${
                errors.description
                  ? "border border-red-600 outline-none"
                  : "focus:outline-none focus:ring-2 focus:ring-teal-500"
              }`}
              id="eventDescription"
              rows={7}
              name="description"
              value={eventForm.description}
              onChange={(e) => handleChange(e)}
              placeholder="Enter event description"
              style={{ caretColor: "#4FE0D2" }}
            />
            {errors.description && (
              <span className="text-xs text-red-600 p-1 rounded-md">
                {errors.description}
              </span>
            )}
          </div>
          {/* Create Event Button */}

          <div className="flex justify-end  space-x-6">
            <button
              onClick={() => navigate("/admin")}
              className=" w-[320px] transition duration-300 ease-in-out text-white font-bold py-2 rounded-2xl border-2 border-teal-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Cancel
            </button>
            <button className=" w-[320px] transition duration-300 ease-in-out bg-main-color hover:bg-main-hover text-white font-bold py-2 px-6 rounded-2xl">
              {mode === "add" ? "Create" : "Edit"} Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
