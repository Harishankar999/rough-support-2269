import React from "react";
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
import { useState } from "react";
import { register } from "../Redux/AuthReducer/action";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function JoinOurTeam() {
  const [flag, setFlag] = useState(false);
  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!first || !last || !username || !password) {
      setFlag(true);
    }

    if (username && password) {
      dispatch(register({username, password})).then((r) => {
        if(r.type === "REGD_USER_SUCCESS"){
          alert('signup success')
          navigate('/login')
        }else{
          alert('InValid Credentials')
        }
      })
    }
  };

  return (
    <Box
      border={"1px solid yellow"}
      width="100%"
      height="100vh"
      bgSize={"cover"}
      bgRepeat="no-repeat"
      backgroundImage={
        "//res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/3048-free-trial-2-column%2Bprogressive-form/aura-top-right-corner-min.jpg"
      }
    >
      <Image
        margin={"20px auto"}
        src="https://www.freelogovectors.net/wp-content/uploads/2022/05/harvest_logo_freelogovectors.net_.png"
        width={"10%"}
      />
      <Stack
        margin=" auto"
        rounded={"lg"}
        p={{ base: 4, sm: 6, md: 8 }}
        spacing={{ base: 8 }}
        maxW={{ lg: "lg" }}
      >
        <Stack spacing={4}>
          <Heading
            color={"gray.800"}
            lineHeight={1.1}
            fontSize={{ base: "2xl", sm: "3xl", md: "3xl" }}
          >
            Start your free 30-days trial
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              !
            </Text>
          </Heading>
          <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
            Fully functional. No credit card required.
          </Text>
          {/* { "" ? <Text fontWeight={'bold'} colorScheme={'red.400'} color='red'>In Valid Credentials </Text > : null}  */}
          {flag ? (
            <Text fontWeight={"bold"} colorScheme={"red.400"} color="red">
              Please! Input all the field{" "}
            </Text>
          ) : null}
        </Stack>
        <Box as={"form"} mt={10}>
          <Stack spacing={4}>
            <Flex direction={"row"} gap="6">
              <Input
                placeholder="Firstname"
                bg={"white"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                onChange={(e) => setFirst(e.target.value)}
              />
              <Input
                placeholder="Lastname"
                bg={"white"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                onChange={(e) => setLast(e.target.value)}
              />
            </Flex>
            <Input
              placeholder="Work Email"
              bg={"white"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Input
              placeholder="password"
              bg={"white"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              fontFamily={"heading"}
              bg={"white"}
              border="1px solid grey"
              color={"gray.800"}
            >
              Sign Up with Google
            </Button>
            <Text>Or</Text>
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
              onClick={handleRegister}
              borderRadius="20px"
            >
              Create my account
            </Button>
          </Stack>
        </Box>
        form
      </Stack>
      <Text>
        Already a customer?{" "}
        <Link to="/login">
          <u>Sign In</u>
        </Link>
      </Text>
      <Text fontSize="xs" mt="2">
        By creating an account, you agree to the Harvest <u>Terms of service</u>{" "}
        and <u>Privacy policy</u>.
      </Text>
    </Box>
  );
}

const Signup = () => {
  return <div>Signup</div>;
};

export { Signup };
