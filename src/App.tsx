import { useState } from 'react';
import axios from 'axios';

interface Users {
  name: string;
  password: string;
  email: string;
  noHp: string;
}

function App() {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [noHp, setNoHp] = useState<string>('08');

  // Validasi form sebelum melakukan submit
  const handleRegister = async () => {
    if (!name || !password || !email || !noHp) {
      alert('Isi Formulir Terlebih Dahulu');
      return; // Hentikan eksekusi jika ada field yang kosong
    }

    const data: Users = {
      name,
      password,
      email,
      noHp,
    };

    try {
      const response = await axios.post('https://overflowing-analysis-production.up.railway.app/users/register', data);
      console.log(response.data);
      // Reset form setelah berhasil registrasi
      setName('');
      setPassword('');
      setEmail('');
      setNoHp('08');
      alert('Akun berhasil didaftarkan');
    } catch (err) {
      console.log('Terjadi kesalahan saat mendaftar', err);
      alert('Gagal mendaftar, coba lagi!');
    }
  };

  return (
    <>
      <label>Username</label>
      <br />
      <input
        type='text'
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder='Name...'
      />
      <br />
      <label >Password</label>
      <br />
      <input
        type='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder='Password'
      />
      <br />
      <label >Email</label>
      <br />
      <input
        type='email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder='Email'
      />
      <br />
      <label
      >NoHp</label>
      <br />
      <input
        type='text'
        value={noHp}
        onChange={(event) => setNoHp(event.target.value)}
        placeholder='NoHp'
      />
      <br />
      <button
        id='Register-btn'
        type='button'
        onClick={handleRegister}
        disabled={!name || !password || !email || !noHp} // Disable tombol jika ada yang kosong
      >
        Register
      </button>
    </>
  );
}

export default App;
