import React, { useState } from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from "../Redux/AuthReducer/action";


export default function JoinOurTeam() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch();


  const handleLogin = (e) => {
    e.preventDefault();

    if(email && pass){
      dispatch(login({email:email, password:pass})).then((r) => {
        if(r.type === "LOGIN_USER_SUCCESS"){
           navigate('/')
        }else{
          alert("invalid Credentias")
        }
      })
    }else{
      alert('please Input all the Field')
    }

  }





  return (
    <Box textAlign={"center"}>
      <Image
        margin={"20px auto"}
        src="https://www.freelogovectors.net/wp-content/uploads/2022/05/harvest_logo_freelogovectors.net_.png"
        width={"10%"}
      />
      <Heading
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "3xl" }}
        background="none"
      >
        Sign in to Harvest
      </Heading>
      <Stack
        margin=" auto"
        border={"1px solid orange"}
        p={{ base: 4, sm: 6, md: 8 }}
        spacing={{ base: 5 }}
        maxW={{ lg: "lg" }}
        background="orange.50"
        mt={"30px"}
      >
        <Button
          fontFamily={"heading"}
          bg={"white"}
          border="1px solid grey"
          color={"black"}
        >
          Sign Up with Google
        </Button>
        <p>--------------- or with your email below ---------------</p>
        <Box as={"form"} mt={10}>
          <Stack spacing={4}>
            <Input
              placeholder="Work Email"
              bg={"white"}
              outline={"1px solid grey"}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              bg={"white"}
              border={0}
              outline={"1px solid grey"}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
              onChange={(e) => setPass(e.target.value)}
            />

            <Button
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bgGradient="linear(to-r, green,green)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, green.100,green.100)",
                boxShadow: "xl",
                color: "green",
              }}
              borderRadius="20px"
              onClick={handleLogin}
            >
              Sign In
            </Button>
          </Stack>
        </Box>
        form
      </Stack>
      <Text mt="10px">
        Not a customer?{" "}
        <Link to="/signup">
          <u>Sign Up</u>
        </Link>
      </Text>
      <Flex
        fontSize="s"
        mt="2"
        color={"grey"}
        spacing="10"
        justify={"center"}
        gap="10"
      >
        <span>Forget Password?</span> <span>Terms of service</span>
        <span>Privacy policy</span>.
      </Flex>
    </Box>
  );
}

const Login = () => {
  return <div>Login</div>;
};

export { Login };
