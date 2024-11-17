import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import EuroIcon from '@mui/icons-material/Euro';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import { useNavigate } from 'react-router-dom'; 

const NAVIGATION = [
  {
    segment: 'Menu',
    title: 'Menu',
    icon: <DashboardIcon />,
  },
  {
    segment: 'utilisateurs',
    title: 'utilisateurs',
    icon: <PeopleIcon />,
  },
  {
    segment: 'Paiements',
    title: 'Paiements',
    icon: <EuroIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography style={{ color: '#004080', fontSize: '24px' }}>Bienvenue dans ton espace Administrateur</Typography>
    </Box>
  );
}

export default function DashboardLayoutAccount(props) {
  const { window } = props;
  const navigate = useNavigate(); // Initialiser useNavigate

  const [session, setSession] = React.useState({
    user: {
      name: 'Alex KUETCHE',
      email: 'akuetche55@gmail.com',
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Alex KUETCHE',
            email: 'akuetche55@gmail.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
          },
        });
      },
      signOut: () => {
        setSession(null);
        navigate('/medecin'); // Rediriger vers la page /medecin après déconnexion
      },
    };
  }, [navigate]);

  const router = useDemoRouter('/dashboard');

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}
