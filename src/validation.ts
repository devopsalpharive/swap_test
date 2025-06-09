import * as yup from 'yup';


export const RegisterSchema = yup.object({
    name: yup
        .string()
        .required('Name is required')
        .min(5, 'Name must be at least 5 characters'),

    email: yup
        .string()
        .email('Invalid email address')
        .required('Email is required'),

    password: yup
        .string()
        .required('Password is required')
        .min(5, 'Password must be at least 5 characters')
        .max(16, 'Password must be at most 16 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,16}$/,
            'Password must include at least one uppercase letter, one lowercase letter, and one number'
        ),

    confirmPassword: yup
        .string()
        .required('Confirm password is required')
        .oneOf([yup.ref('password'), null] as unknown as string[], 'Passwords must match')
});




export const LoginSchema = yup
  .object({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup.string().min(5).required("Required"),
  })
  .required();



export const OtpSchema = yup.object({
    otp: yup
        .string()
        .required('OTP is required')
        .length(6, 'OTP must be exactly 6 digits')
        .matches(/^\d+$/, 'OTP must be only digits')
})



export const changePasswordSchema = yup.object({
    oldPassword: yup
        .string()
        .required('Old password is required')
        .min(5, 'Password must be at least 5 characters')
        .max(16, 'Password must be at most 16 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,16}$/,
            'Password must include at least one uppercase letter, one lowercase letter, and one number'
        ),
    newPassword: yup
        .string()
        .required('New password is required')
        .min(5, 'Password must be at least 5 characters')
        .max(16, 'Password must be at most 16 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,16}$/,
            'Password must include at least one uppercase letter, one lowercase letter, and one number'
        ),
    confirmPassword: yup
        .string()
        .required('Confirm password is required')
        .oneOf([yup.ref('newPassword')], 'Passwords must match'),
});




export const editProfileSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    phone: yup.string().required("Phone number is required"),
    address: yup.string().required("Address is required"),
    state: yup.string().required("City is required"),
    country: yup.string().required("Country is required"),
    zipCode: yup.string().required("Zip Code is required"),
    image: yup.mixed().required("Image is required"),
});



export const forgotPasswordSchema = yup.object().shape({
    email: yup
        .string()
        .email('Invalid email address')
        .required('Email is required'),
});



//  forgot password changes

export const passwordResetSchema = yup.object().shape({
    otp: yup
        .string()
        .matches(/^\d{6}$/, "OTP must be a 6-digit number")
        .required("OTP is required"),

    newPassword: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(20, "Password must not exceed 20 characters")
        .required("New Password is required"),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref("newPassword")], "Passwords do not match")
        .required("Confirm Password is required"),
});




export const kycValidationSchema = yup.object().shape({
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    phone_no: yup.string()
        .required('Phone number is required')
        .matches(/^[0-9+\-() ]+$/, 'Invalid phone number'),
    gender: yup.string().required('Gender is required'),
    dob: yup.string().required('Date of birth is required'),
    country: yup.string().required('Country is required'),
    state: yup.string().required('State is required'),
    city: yup.string().required('City is required'),
    zipcode: yup.string().required('Zipcode is required'),
    telegram: yup.string().nullable(),
    address: yup.string().required('Address is required'),
    document_type: yup.string().required('Document type is required'),
    document_num: yup.string().required('Document number is required'),
    document_image: yup.string().required('Document image is required'),
    expiry_date: yup.string().nullable(),
    front: yup.string().required('Front side image is required'),
    back: yup.string().required('Back side image is required'),
    selfie: yup.string().nullable(),
    proof_address: yup.string().nullable(),
    residential: yup.string().nullable(),
    termsAccepted: yup
        .boolean()
        .oneOf([true], 'You must accept the terms and conditions'),
});

