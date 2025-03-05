const Validation = (email, password, name) => {
    if (!email || !password) {
        return "Please fill all the fields";
    }
    if (!email.includes("@") || /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(email)) {
        return "Invalid email";
    }
    if (password.length < 6) {
        return "Password should be atleast 6 characters long";
    }
    if (name && name.length < 3) {
        return "Name should be atleast 3 characters long";
    }
    return null;
}

export default Validation;