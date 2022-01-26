import { Login } from './src/pages/Login';
import { Routes } from './src/routes/routes';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/context/AuthContext';
export default function App() {
  return (
      <NavigationContainer>
        <AuthProvider>
        <Routes/>
        </AuthProvider>
      </NavigationContainer>
  );
}

