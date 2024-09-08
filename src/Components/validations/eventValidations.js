import * as yup from "yup";
const today = new Date();
const todayFormatted = today.toISOString().split("T")[0];
// export const eventSchema = yup.object({
//   title: yup.string().required("Title is required"),
//   host: yup.string().required("Host is required"),
//   location: yup.string().required("Location is required"),
//   price: yup
//     .number()
//     .required("Price is required")
//     .typeError("Price must be a number")
//     .positive("Price must be greater than 0"),
//   startDate: yup
//     .date()
//     .required("Start date is required")
//     .typeError("Invalid date format")
//     .min(todayFormatted, "Start date must be today or later"),
//   endDate: yup
//     .date()
//     .required("End date is required")
//     .typeError("Invalid date format")
//     .min(
//       yup.ref("startDate"),
//       "End date must be the same as or after start date"
//     ),
//   startTime: yup
//     .string()
//     .required("Start time is required")
//     .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid start time format"),
//   endTime: yup
//     .string()
//     .required("End time is required")
//     .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid end time format")
//     .test(
//       "is-after-start",
//       "End time must be after start time",
//       function (value) {
//         const { startTime, startDate, endDate } = this.parent;
//         if (startDate === endDate) {
//           return startTime && value && startTime < value;
//         }
//         return true;
//       }
//     ),
//   description: yup.string().required("Description is required"),
//   imgUrl: yup.string().required("Image is required"),
// });

export const eventSchema = yup.object({
  title: yup.string().required("Title is required"),
  host: yup.string().required("Host is required"),
  location: yup.string().required("Location is required"),
  price: yup
    .number()
    .required("Price is required")
    .typeError("Price must be a number")
    .positive("Price must be greater than 0"),
  startDate: yup
    .date()
    .required("Start date is required")
    .typeError("Invalid date format")
    .min(todayFormatted, "Start date must be today or later"),
  endDate: yup
    .date()
    .required("End date is required")
    .typeError("Invalid date format")
    .min(
      yup.ref("startDate"),
      "End date must be the same as or after start date"
    ),
  startTime: yup
    .string()
    .required("Start time is required")
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid start time format"),
  endTime: yup
    .string()
    .required("End time is required")
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid end time format"),
  description: yup.string().required("Description is required"),
  imgUrl: yup.string().required("Image is required"),
  tickets: yup
    .number()
    .required("Tickets is required")
    .typeError("Tickets must be a number")
    .positive("Tickets must be greater than 0"),
    eventDate: yup
    .date()
    .required("Event date is required")
    .typeError("Invalid date format")
    .min(
      yup.ref("endDate"),
      "Event date must be the same as or after end date"
    )
});
