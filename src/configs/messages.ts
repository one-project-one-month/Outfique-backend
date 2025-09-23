export const MESSAGES = {
  SUCCESS: {
    CREATE: 'Successfully Created!',
    UPDATE: 'Successfully Updated!',
    DELETE: 'Successfully Deleted!',
    RETRIVE: 'Successfully Retrived!',
    LOGIN: 'Successfully Logged In!',
  },
  ERROR: {
    CREATE: '',
    UPDATE: '',
    DELETE: '',
    RETRIVE: '',
    SERVER: '',
    USER_NOT_FOUND: 'User Not Found!',
    NO_PERMISSION: 'You have no permission to access this resource!',
    BAD_REQUEST: 'Invalid Request!',
    INVALID_CREDENTIAL: 'Invalid Credential!',
    UNAUTHORIZED: 'Unauthorized Access!',
  },
} as const;
