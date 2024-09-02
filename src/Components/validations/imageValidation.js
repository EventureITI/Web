import * as yup from 'yup';

export const imageSchema = yup.object({
  image: yup.mixed()
    .required('An image file is required')
    // .test('fileType', 'Unsupported file format(jpg, png, gif)', value => {
    //   return value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
    // }),
});


