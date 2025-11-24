export const validateEmployee = (data) => {
    const errors = {};

    if (!data.name || data.name.trim() === '') {
        errors.name = 'Name is required';
    }

    if (!data.role || data.role.trim() === '') {
        errors.role = 'Role is required';
    }

    if (!data.department || data.department.trim() === '') {
        errors.department = 'Department is required';
    }

    if (!data.email || data.email.trim() === '') {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (!data.phone || data.phone.trim() === '') {
        errors.phone = 'Phone is required';
    }

    return errors;
};
