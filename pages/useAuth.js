// useAuth.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    // Retrieve stored hashed username and password from localStorage
    const storedUsernameHash = localStorage.getItem('usernameHash');
    const storedPasswordHash = localStorage.getItem('passwordHash');

    const correctUsernameHash = 'b0e0ec7fa0a89577c9341c16cff870789221b310a02cc465f464789407f83f377a87a97d635cac2666147a8fb5fd27d56dea3d4ceba1fc7d02f422dda6794e3c';
    const correctPasswordHash = '921412f4b8860a2175db0264a391f48c6d3e53bdd683159975ee9a6091d77b56b41bec0e1e01f4920313adffad2d6f1e5dbfccea11ab3e7521a4289835c8518b';

    // Check if the user is authenticated   
    let isAuthenticated = false;
    if (storedUsernameHash == correctUsernameHash && storedPasswordHash == correctPasswordHash) {
        isAuthenticated = storedUsernameHash && storedPasswordHash;
    }
    // If not authenticated, redirect to login page
    if (!isAuthenticated) {
      router.push('/login');
    }
    else {
        console.log("Logged in")
    }
  }, [router]);
};
