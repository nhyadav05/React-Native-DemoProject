export const login = async (email, password) => {
    // Mock API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@test.com' && password === 'password') {
          resolve({ email });
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  };
  
  export const forgotPassword = async (email) => {
    // Mock API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };
  
  export const verifyOtp = async (otp) => {
    // Mock API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (otp === '123456') {
          resolve();
        } else {
          reject(new Error('Invalid OTP'));
        }
      }, 1000);
    });
  };
  