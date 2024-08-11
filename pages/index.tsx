import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { userContext, UserContextType } from './_app';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [loginTabValue, setloginTabValue] = React.useState('login');

  const onLoginTabChangeHandel = (event: React.SyntheticEvent, value: any) => {
    setloginTabValue(value);
  };

  const userContextData = React.useContext(userContext);
  const [userNameState, setUserNameState] = React.useState('');
  const [userPasswordState, setUserPasswordState] = React.useState('');
  const router = useRouter();

  const onLoginClickHandeler = () => {
    const curentUserDta: UserContextType = {
      password: userPasswordState,
      username: userNameState,
      setInfo: () => {},
    };
    userContextData.setInfo(curentUserDta);
    router.push('/about');
  };

  return (
    <Container maxWidth="lg">
      <Box
        component={'div'}
        display="flex"
        height="100vh"
        marginTop="auto"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        gap={4}
      >
        <Box
          minWidth="50vw"
          height="fit-content"
          color="black"
          borderRadius="20px"
          padding="1.5rem"
          sx={{ backgroundColor: 'lightblue' }}
        >
          <TabContext value={loginTabValue}>
            <Tabs
              variant="fullWidth"
              value={loginTabValue}
              onChange={onLoginTabChangeHandel}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab color="blue" value="login" label="Login User" />
              <Tab value="register" label="Register User" />
            </Tabs>
            <TabPanel value="login">
              <form>
                <Box
                  display="flex"
                  flexDirection="row"
                  height="100%"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box
                    display="flex"
                    width="60%"
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <Box padding="0.5rem">
                      <TextField
                        fullWidth
                        id="standard-basic"
                        label="User Name"
                        variant="standard"
                        value={userNameState}
                        onChange={(e) => {
                          setUserNameState(e.target.value);
                        }}
                      />
                    </Box>
                    <Box padding="0.5rem">
                      <TextField
                        fullWidth
                        id="standard-basic"
                        label="Enter password"
                        variant="standard"
                        value={userPasswordState}
                        type="password"
                        onChange={(e) => {
                          setUserPasswordState(e.target.value);
                        }}
                      />
                    </Box>
                    <Box
                      padding="0.5rem"
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-evenly"
                    >
                      <Button
                        onClick={onLoginClickHandeler}
                        variant="contained"
                      >
                        Login
                      </Button>
                      <Button variant="outlined">Forget Password</Button>
                    </Box>
                  </Box>
                </Box>
              </form>
            </TabPanel>
            <TabPanel value="register">Item Two</TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Container>
  );
}
