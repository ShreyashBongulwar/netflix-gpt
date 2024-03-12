export const checkValidData = (email, password) => {
    const isValidEmail = /^([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (!isValidEmail) return "email is not valid";
    if (!isValidPassword) return "password is not valid";
    
    return null;
    
};
