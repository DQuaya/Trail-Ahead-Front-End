
export async function signUp(email, password, firstName, lastName) {
    const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        body: {
            email,
            password,
            firstName,
            lastName
        }
      });
    
      if (response.status !== 201) {
        throw new Error(`Request failed with status code ${response.status}`);
      }
    
      const { token } = response.data;
      localStorage.setItem('DTAGtrailAheadToken', token);
      return token;
}

export async function login(email, password) {
    const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        body: {
            email,
            password,
        }
      });
    
      if (response.status !== 200) {
        throw new Error(`Request failed with status code ${response.status}`);
      }
    
      const { token } = response.data;
      localStorage.setItem('DTAGtrailAheadToken', token);
      return token;
}

export function logout() {
    localStorage.removeItem('DTAGtrailAheadToken');
}

export function isLoggedIn() {
    const token = localStorage.getItem('DTAGtrailAheadToken');
    return !!token;
}

export async function getLoggedInUser() {
    const token = localStorage.getItem('DTAGtrailAheadToken');

    if (!token) {
        return null;
    }

    const response = await fetch('http://localhost:3000/users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}